const login = () => {
    auth.signInWithRedirect(googleAuth).catch((error) => alert(error.message));
}

auth.onAuthStateChanged((authUser) => {
    if (authUser) {
        db.collection("users").where("email", "==", authUser.email)
        .get()
        .then((querySnapshot) => {
            if ( querySnapshot.docs.length === 0 ) {
                db.collection('users').add({
                    email: authUser.email,
                    displayName: authUser.displayName,
                    photoURL: authUser.photoURL,
                });
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
  })
