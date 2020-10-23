export interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

export interface IAddedSights {
  name: object
  info: string
  rating: number
  title: string
  feedback?: object
  street: string
}
