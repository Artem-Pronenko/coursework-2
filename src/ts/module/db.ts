import * as firebase from 'firebase';
import {IAddedSights, IFirebaseConfig} from './interfaces';

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
  name: ['dost 1', 'dost'],
  info: 'this landmark reflects the city very well this landmark reflects the city very well this landmark reflects the city very well',
  rating: 4,
  feedback: [
    {
      name: 'Yana',
      text: `Lorem nobis?`
    },
    {
      name: 'Yana',
      text: `Lorem Facilis, nobis?`
    }
  ],
  title: 'Достопримечательность 99',
  street: 'Вулиця Соборна',

}

function addSights(objAdd: IAddedSights): void {
  db.collection('sights').add(objAdd)
    .then(console.log)
    .catch(console.error);
}

const fixName = (name: string): string => {
  return name.toLowerCase().split(' ').filter(i => i).join(' ');
};

export function getSights(name: string, street?: string): void {
  const dataSights = [];
  db.collection('sights')
    .get()
    .then(res => {
      res.forEach((doc): void => {
        const data = doc.data();
        if (!street) {
          for (let i = 0; i < data.name.length; i++) {
            if (data.name[i].toLowerCase() === fixName(name)) {
              dataSights.push(data);
            }
          }
        } else {
          if (data.street.toLowerCase() === fixName(name)) {
            dataSights.push(data);
          }
        }
      })
    })
    .then(() => {
      localStorage.setItem('data', JSON.stringify(dataSights));
      location.href = 'sights.html';
    })
    .catch(err => {
      console.log(err)
    })

}

//document.body.addEventListener('click', addSights.bind(null, objAdd));
