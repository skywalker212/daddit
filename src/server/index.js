import express from 'express';
import utils from "./helpers/utils.js";
import path from "path";
import dotenv from "dotenv";
import firebase from 'firebase';
import keys from './config/keys';
import bodyParser from 'body-parser';
import db from './db/mongoose';
import Post from './models/post';

var config = {
    apiKey: keys.firebase,
    authDomain: "daddit-auth.firebaseapp.com",
    databaseURL: "https://daddit-auth.firebaseio.com",
    storageBucket: "daddit-auth.appspot.com",
};
firebase.initializeApp(config);

const port = process.env.PORT || 3000;

global.path = path;
global.dotenv = dotenv;

utils.loadENV();
const app = express();

app.use(express.static(path.resolve(process.cwd(), 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/api', (req, res) => {
    res.send('Express to the rescue!');
});

app.get('/api/name', (req, res) => {
    res.json({
        name: "this is daddit biatch"
    });
});

app.post('/api/signup', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const re_password = req.body.re_password;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        res.json({
            status:'error'
        });
    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            res.json({
                status:'success',
                email: user.email,
                uid: user.uid
            });
        }
      });
});

app.post('/api/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        res.json({
            status:'error'
        });
    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            res.json({
                status:'success',
                email: user.email,
                uid: user.uid
            });
        }
      });
});

app.listen(port, () => {
    utils.log(`Server has started and is listening on port ${port}!`)
});