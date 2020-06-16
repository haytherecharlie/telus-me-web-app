import { pathOr } from 'ramda'
import firebase from 'firebase/app'
import serviceAccount from 'config/service-account.json'

firebase.initializeApp({
  apiKey: serviceAccount.apiKey,
  authDomain: serviceAccount.authDomain,
  databaseURL: serviceAccount.databaseURL,
  projectId: serviceAccount.projectId,
  storageBucket: serviceAccount.storageBucket,
  messagingSenderId: serviceAccount.messagingSenderId,
  appId: serviceAccount.appId,
  measurementId: serviceAccount.measurementId
})

export const auth = pathOr(undefined, ['auth'], firebase)
export const db = pathOr(undefined, ['firestore'], firebase)
export const ts = pathOr(undefined, ['firestore', 'Timestamp'], firebase)
export const ga = pathOr(undefined, ['analytics'], firebase)
