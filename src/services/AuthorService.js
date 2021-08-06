import { db } from '../firebase'

const ref = db.collection('authors')

const getAll = async () => {
  const snapshot = await ref.get()
  return snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
}

const getOne = async ({ queryKey }) => {
  const { id } = queryKey[1]
  const snapshot = await ref.doc(id).get()
  return {
    id,
    values: snapshot.data(),
  }
}

const create = async (data) => {
  return await ref.add(data)
}

const update = async (id, value) => {
  return await ref.doc(id).update(value)
}

const remove = async (id) => {
  return await ref.doc(id).delete()
}

const AuthorService = {
  getAll,
  getOne,
  create,
  update,
  remove,
}

export default AuthorService
