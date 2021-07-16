import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.VITE_API_FIREBASE_API_KEY,
  authDomain: process.env.VITE_API_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_API_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_API_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_API_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_API_FIREBASE_APP_ID,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = app.auth()
export default app
