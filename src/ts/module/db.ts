import * as firebase from 'firebase';
import {IAddedSights} from './interfaces';
import {sightsName} from './type';

const firebaseConfig = {
  apiKey: 'AIzaSyBzN_61nfYEPDGkua2csZZDBCKxvgqh16w',
  authDomain: 'yana--coursework.firebaseapp.com',
  databaseURL: 'https://yana--coursework.firebaseio.com',
  projectId: 'yana--coursework',
  storageBucket: 'yana--coursework.appspot.com',
  messagingSenderId: '335551385562',
  appId: '1:335551385562:web:730e45363215ea92f17ae3'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const objAdd: IAddedSights = {
  title: 'Бункер Ворошилова',
  name: ['dost', 'Бункер Ворошилова', 'Бункер', 'Ворошилова'],
  info: `Створювали бункер протягом 1931-1937 років. Виточували його для прикриття напрямку на Вінницю, а всім казали, що то буде військовий санаторій (але зараз майже так і є).
Прямо у гранітній скелі було прорубано 28 підземних приміщень: від лазні до дизель-генераторної з системою вентиляції (яка до сих пір збереглась).`,
  rating: 5,
  imgArr: [
    'https://lh3.googleusercontent.com/proxy/53Fn3XVGD1yrDJvGLMgiGgo1q_ir0YyRragYKW274AKQxY25Fh-mQWO7MlbVaMJTl0ZkXSAkkyz_UhHPBAonMnejpjaxoKmaCQkNjlw1IF08Mbf-2nfVnzCEAU2B4bzCbShtPghkUTO_HBlMC5ZJaA99nmwcfKrgcrmFEOfL_KeCV9sXZlfxD7lIw7VK',
    'https://ua.igotoworld.com/frontend/webcontent/websites/1/images/gallery/28844_800x600_807__400x600_voroshilov_03.jpg'
  ],
  feedback: [],
  street: 'вулиця Князів Коріатовичів',

};

function addSights(objAdd: IAddedSights): void {
  db.collection('sights').add(objAdd)
    .then(() => {
      console.log('added')
    })
    .catch(console.error);
}


export function setSights(userName: string, comments: string, oldComments: Array<object>, id: string): Promise<void> {
  return db.collection('sights').doc(id).set({
    feedback: [
      ...oldComments,
      {
        name: userName,
        text: comments
      }
    ]
  }, {merge: true})
    .catch((error) => {
      console.error(error)
    })
}

const fixName = (name: string): string => {
  return name.toLowerCase().split(' ').filter(i => i).join(' ');
};

export function getSights(name: sightsName, streetBoolean?: boolean) {
  const dataSights = [];
  return db.collection('sights')
    .get()
    .then(res => {
      res.forEach((doc): void => {
        const data = doc.data();
        if (!streetBoolean) {
          for (let i = 0; i < data.name.length; i++) {
            if (data.name[i].toLowerCase() === fixName(name)) {
              dataSights.push({data: data, id: doc.id});
            }
          }
        } else {
          if (data.street.toLowerCase() === fixName(name)) {
            dataSights.push({data: data, id: doc.id});
          }
        }
      })
    })
    .then(() => {
      localStorage.setItem('data', JSON.stringify(dataSights));
      return dataSights
    })
    .catch(err => {
      console.error(err)
    })

}

//document.body.addEventListener('click', addSights.bind(null, objAdd));
