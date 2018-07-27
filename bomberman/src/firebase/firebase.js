var config = {
  apiKey: "AIzaSyCzH1M3w2rvpbO6DFxaeGkpqPFlOEsVxCM",
  authDomain: "bomberman-882e4.firebaseapp.com",
  databaseURL: "https://bomberman-882e4.firebaseio.com",

}
firebase.initializeApp(config);

var db = firebase.database();

export default db
