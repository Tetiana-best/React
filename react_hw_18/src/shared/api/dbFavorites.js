import db from '@/shared/config/firebase-config'
import {
	collection,
	doc,
	getDoc,
	setDoc,
	updateDoc,
} from 'firebase/firestore/lite'

class FavoritesOperations {
  constructor() {
    this.collectionRef = collection(db, 'favorites')
  }

  // Отримати всі улюблені для юзера
  async getFavoritesByUserId(userId) {
    const snap = await getDoc(doc(this.collectionRef, userId))
    if (!snap.exists()) return {}
    return snap.data() // { product_id: {...} }
  }

  // Створити повний документ favorites/{userId}
  async setFavoritesByUserId(userId, favoritesObj) {
    await setDoc(doc(this.collectionRef, userId), favoritesObj)
    return true
  }

  // Додати або оновити один товар
  async updateFavoriteProduct(userId, productId, productData) {
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: productData,
    })
    return true
  }

  // Видалити один товар
  async removeFavoriteProduct(userId, productId) {
    await updateDoc(doc(this.collectionRef, userId), {
      [productId]: null,
    })
    return true
  }
}

export default FavoritesOperations