import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAf8NkAtEoZhgVF0aBgnZVbezJbj1Z-W4Y',
  authDomain: 'faculty-website-2.firebaseapp.com',
  projectId: 'faculty-website-2',
  storageBucket: 'faculty-website-2.appspot.com',
  messagingSenderId: '170786774656',
  appId: '1:170786774656:web:2f5d56494743c47d47d065',
  measurementId: 'G-XQ9GHR8234',
}
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
