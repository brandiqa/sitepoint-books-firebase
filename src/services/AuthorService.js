import { db } from '../firebase'

const authorsRef = db.collection('authors')

const list = async () => {
  const snapshot = await authorsRef.get()
  return snapshot.docs.map((doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
  })
}

const AuthorService = {
  list,
}

export default AuthorService
