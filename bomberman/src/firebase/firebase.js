var firebase = require('firebase');
var config = {
  apiKey: "x",
  authDomain: "x",
  databaseURL: "x",
  // projectId: "x",
  storageBucket: "",
  // messagingSenderId: "x"
}
firebase.initializeApp(config)

var database = firebase.database()

module.exports = {
  database
}
