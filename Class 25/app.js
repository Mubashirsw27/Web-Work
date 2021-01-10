function fbLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          
            var user = result.user;

        console.log("User====> ", user.displayName);
        })
        .catch((error) => {
         console.log("Error===>",error.message);
        });
}