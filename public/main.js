
// const rooms = document.getElementById('rooms');

// const renderRoom = (doc) => {
//     let p = document.createElement('p');
//     p.innerHTML = doc.data().name;
//     rooms.appendChild(p);
// }

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAsG7-rm1Tv4cJuDWRrpuSPoLN6Z-HgCsY",
//     authDomain: "chat-app-6bb95.firebaseapp.com",
//     databaseURL: "https://chat-app-6bb95-default-rtdb.firebaseio.com",
//     projectId: "chat-app-6bb95",
//     storageBucket: "chat-app-6bb95.appspot.com",
//     messagingSenderId: "635307177541",
//     appId: "1:635307177541:web:fc5956b3b778e172d2152c",
//     measurementId: "G-8N2M1KZCBF"
// };

// firebase.initializeApp(firebaseConfig);

// // Get a reference to the database service
// const db = firebase.firestore();
// db.settings({timestampsInSnapshots: true});
// console.log(db);
// console.log('ok')

// db.collection('rooms').on.then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderRoom(doc);
//     });
// })

// db.collection('rooms').onSnapshot((snapshot) => {
//     rooms.innerHTML ='';
//     snapshot.docs.forEach(doc => {
//         renderRoom(doc);
//     })
// }
// );

// const create = () => {
//     var name = prompt('Enter a room name');
//     db.collection('rooms').add({
//         name: name,
//     })
// }

// const toggleShow = () => {
//     document.getElementById('chat').classList.add('show');
//     document.getElementById('sidebar').classList.add('hide')
//     console.log('ok')
// }

var root = document.querySelector( '.root' );

auth.onAuthStateChanged ((authUser) => {
    console.log( "auth: ", authUser)
    if ( authUser ) {
    
        const xhr__app = new XMLHttpRequest();
        xhr__app.onload = function () {
            if (this.status === 200 ) {
                root.innerHTML = xhr__app.responseText;
            } else {
                console.log("Did not works");
            }
        }
    
        xhr__app.open('get', '/src/view/App.html' );
        xhr__app.send();
    }
    
    else {
        console.log('ok')
        const xhr__login = new XMLHttpRequest();
        xhr__login.onload = function () {
            if (this.status === 200 ) {
                root.innerHTML = xhr__login.responseText;
            } else {
                console.log("Did not works");
            }
        }
    
        xhr__login.open('get', '/src/view/Login.html' );
        xhr__login.send();
    }
})


