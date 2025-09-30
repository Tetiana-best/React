import db from '@/shared/config/firebase-config'
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
	updateDoc,
	where,
} from 'firebase/firestore/lite'

class DbOperations {
  constructor(name) {
    this.collectionRef = collection(db, name)
  }

  /** Получить все документы без пагинации */
  async getAll() {
    const snapshot = await getDocs(this.collectionRef)
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  }

  async getAllPaginatedWithFilter({ page = 1, perPage = 6, cursors = [], searchTerm  = '', }) {
    let q

    const realLimit = perPage + 1 // беремо на 1 більше
	const hasFilter = searchTerm && searchTerm.trim() !== ""
	const searchKey = searchTerm.toLowerCase()
	const orderField = hasFilter ? 'title_lower' : 'title'

    if (page === 1) {
      q = query(
			this.collectionRef,
			orderBy(orderField),
			...(hasFilter ? 
				[where('title_lower','>=',searchKey),where('title_lower', '<=',searchKey+'\uf8ff')]:[]),
			limit(realLimit))
    } else {
      const cursor = cursors[page - 2]
      if (!cursor) throw new Error('Cursor not found')
      q = query(
        this.collectionRef,
        orderBy(orderField),
		...(hasFilter ? 
			[where('title_lower','>=',searchKey),where('title_lower', '<=',searchKey+'\uf8ff')]:[]),
        startAfter(cursor),
        limit(realLimit)
      )
    }

    const snapshot = await getDocs(q)
    const docs = snapshot.docs

    const hasMore = docs.length > perPage

    const data = docs.slice(0, perPage).map((doc) => ({ id: doc.id, ...doc.data() }))
    const lastVisible = docs[docs.length - 2] || null

    return { data, cursor: lastVisible ? lastVisible.id : null, hasMore }
  }

  async getById(id) {
    const snap = await getDoc(doc(this.collectionRef, id))
    return { id: snap.id, ...snap.data() }
  }


// async loadFilteredData({ fieldTitle, compareOperator, valueToCompare }){
// try{

// 	const q = query(this.collectionRef, where(fieldTitle, compareOperator, valueToCompare))

// 	const snapshot = await getDocs(q)
// 	const docs = snapshot.docs

// 	return docs.map((doc)=>({id:doc.id, ...doc.data()}))
// }
// 	catch(error) {
// 	console.error("Error loading filtered data:", error)
// 		throw error
// 	}
// }


  async add(data) {
    await addDoc(this.collectionRef, {...data, title_lower: data.title.toLowerCase()})
    return true
  }
  async update(id, data) {
    await updateDoc(doc(this.collectionRef, id), {...data, title_lower: data.title.toLowerCase()})
    return true
  }
  async delete(id) {
    await deleteDoc(doc(this.collectionRef, id))
    return true
  }
}

export default DbOperations
