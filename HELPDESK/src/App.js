import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './containers/Menu';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBOWonl2O2n7HYswyg1NhQLebL4PUGXfxE",
  authDomain: "polidinamics-b0e3d.firebaseapp.com",
  databaseURL: "https://polidinamics-b0e3d.firebaseio.com",
  projectId: "polidinamics-b0e3d",
  storageBucket: "polidinamics-b0e3d.appspot.com",
  messagingSenderId: "155478059885",
  appId: "1:155478059885:web:a5c4fc4a217fc1832e4864",
  measurementId: "G-WXYWESMZRH"
};

firebase.initializeApp(config);

function App() {
  return (
    <Menu />
  );
}

export default App;
