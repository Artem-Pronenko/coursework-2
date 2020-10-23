import * as firebase from "firebase";

interface IFirebaseConfig {
  apiKey: string
  authDomain: string
  databaseURL: string
  projectId: string
  storageBucket: string
  messagingSenderId: string
  appId: string
}

interface IAddedSights {
  name: object
  info: string
  rating: number
  feedback?: object
}

const firebaseConfig: IFirebaseConfig = {
  apiKey: "AIzaSyAoboeJztISbwTRDIk68wLT7KH325h_2-I",
  authDomain: "yana-coursework.firebaseapp.com",
  databaseURL: "https://yana-coursework.firebaseio.com",
  projectId: "yana-coursework",
  storageBucket: "yana-coursework.appspot.com",
  messagingSenderId: "1074245141454",
  appId: "1:1074245141454:web:95515415601ba28827219f"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const objAdd: IAddedSights = {
  name: ['dost 2', 'dost'],
  info: 'this landmark reflects the city very well',
  rating: 3,
  feedback: {
    'Артем Кононенко': 'Какой-то отзыв 1',
    'Головня Яна': 'Какой-то отзыв отзыв отзыв',
  }
}

function addSights(objAdd): void {
  db.collection('sights').add(objAdd)
    .then(console.log);
}

export function getSights(sightsName: string): void {
  const dataSights = []
  db.collection('sights')
    .get()
    .then(res => {
      res.forEach(doc => {
        const data = doc.data();
        for (let i = 0; i < data.name.length; i++) {
          if (data.name[i].toLowerCase() === sightsName) {
            dataSights.push(data);
          }
        }
      })
    })
    .then(() => {
      localStorage.setItem('data', JSON.stringify(dataSights));
      location.href = 'sights.html';
    })


}

//document.body.addEventListener('click', addSights.bind(null, objAdd));
