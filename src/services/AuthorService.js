import { db } from '../firebase'

const collection = db.collection('authors')

const getAll = async () => {
  const snapshot = await collection.get()
  return snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
}

const getOne = async ({ queryKey }) => {
  const { id } = queryKey[1]
  const snapshot = await collection.doc(id).get()
  return snapshot.data()
}

const create = async (data) => {
  return await collection.add(data)
}

const update = async (id, values) => {
  return await collection.doc(id).update(values)
}

const remove = async (id) => {
  return await collection.doc(id).delete()
}

const AuthorService = {
  getAll,
  getOne,
  create,
  update,
  remove,
}

export default AuthorService
