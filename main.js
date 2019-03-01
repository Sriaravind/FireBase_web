var mainApp = {};

(function () {
    var firebase = app_fireBase;
    var uid = null;
    function logOut() {
        firebase.auth().signOut();
    }
    firebase.auth().onIdTokenChanged(function (user) {
        if (user) {
            uid = user.uid;
        }
        else {
            uid = null;
            window.location.replace("login.html");
        }
    });
    
    mainApp.logOut = logOut;
})()
