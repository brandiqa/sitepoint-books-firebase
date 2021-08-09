import { storage } from '../firebase'

const storageRef = storage.ref()

const getImageURL = async (filePath) => {
  const url = await storageRef.child(filePath).getDownloadURL()
  return url
}

const StorageService = {
  getImageURL,
}

export default StorageService
