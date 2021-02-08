
document.getElementById('root').addEventListener("DOMSubtreeModified", async () => {

    const sidebar = await document.querySelector('.sidebar');
    if ( !sidebar ) return;
    if ( sidebar.innerHTML.length > 0 ) return;

    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (this.status === 200 ) {
            sidebar.innerHTML = xhr.responseText;
        } else {
            console.log("Did not works");
        }
    }

    xhr.open('get', '/src/view/Sidebar.html' );
    xhr.send();

});

document.getElementById('root').addEventListener("DOMSubtreeModified", async () => {

    const sidebar = await document.querySelector('.sidebar');
    if ( !sidebar ) return;
    const profilePic = document.getElementById('profilePic');
    if ( profilePic.src === auth.currentUser.photoURL ) return;
    document.getElementById('profilePic').src = auth.currentUser.photoURL;

});

db.collection('users').onSnapshot((snapshot) => {
    
    // snapshot.docs.forEach(doc => {
    //     const roomList = document.querySelector('.sidebar__roomlist');
    //     console.log(roomList);
    //     //container.insertAdjacentHTML('beforeend', xhr.responseText);
    //     roomList.insertAdjacentHTML('beforeend', `
    //         <div class="sidebar__room">
    //             <div class="sidebar__room--avatar">
    //                 <img 
    //                     src = '${doc.data().photoURL}' 
    //                     alt="https://image.similarpng.com/very-thumbnail/2020/05/WhatsApp-icon-PNG.png" 
    //                     class="avatar"
    //                 >
    //             </div>

    //             <div class="sidebar__room--info">
    //                 <p>${doc.data().displayName}</p>
    //                 <span>Last message</span>
    //             </div>
    //         </div>
    //     `);
    // })
}
);

const logout = () => {
    auth.signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}