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

async getAllPaginated({ page = 1, perPage = 6, cursors = [] }) {
	let q

	const realLimit = perPage + 1 // беремо на 1 більше

	if (page === 1) {
		q = query(this.collectionRef, orderBy('titleDream'), limit(realLimit))
	} else {
		const lastDocId = cursors[page - 2]
		if (!lastDocId) throw new Error('Cursor not found')

		const lastDocSnap = await getDoc(doc(this.collectionRef, lastDocId))

		q = query(
		this.collectionRef,
		orderBy('titleDream'),
		startAfter(lastDocSnap),
		limit(realLimit)
		)
	}

	const snapshot = await getDocs(q)
	const docs = snapshot.docs

	const hasMore = docs.length > perPage

	const data = docs
		.slice(0, perPage)
		.map((doc) => ({ id: doc.id, ...doc.data() }))
	const lastVisible = docs[docs.length - 2] || null
	const cursor = lastVisible ? lastVisible.id : null 

	return { data, cursor, hasMore }
}

async getById(id) {
	const snap = await getDoc(doc(this.collectionRef, id))
	return { id: snap.id, ...snap.data() }
}


	// loadFilteredData({ fieldTitle, compareOperator, valueToCompare }, options)
	// {
	// const filter = where(fieldTitle, compareOperator, valueToCompare)
	// const queryOpt = this.getQueryOptions(options, filter)
	// const q = query(this.dbCollection, ...queryOpt)
	// return new Promise((resolve, reject) => {
	// getDocs(q)
	// .then((querySnapshot) => {
	// resolve(this.getListFromSnapshot(querySnapshot))
	// })
	// .catch((error) => {
	// reject(error)
	// })
	// })
	// }

async add(data) {
	await addDoc(this.collectionRef, data)
	return true
}
async update(id, data) {
	await updateDoc(doc(this.collectionRef, id), data)
	return true
}
async delete(id) {
	await deleteDoc(doc(this.collectionRef, id))
	return true
}
}

export default DbOperations
