import firebase from 'firebase/app';
import 'firebase/database';
import { format } from 'fecha';
import timestand from 'time-stamp';
import { v4 as uuidv4 } from 'uuid';
import { firebaseConfig } from "./firebasedb";
let app, db;
try {
    app = firebase.initializeApp(firebaseConfig);
    db = app.database().ref().child('about');
} catch (er) {
    console.log(er)
}
export default db;


export const insertFirebase = (post) => {
    let idPost = uuidv4();
    db.set({
        id: `${idPost}`,
        titulo: `${post.titulo}`,
        fecha: format(new Date(timestand.utc()), "MMMM Do, YYYY"),
        contenido: `${post.contenido}`,
        imagenUrl: `${post.imagenUrl}`,
    });
}

export const getPostFire = () => {
    let post;
    db.on('value', function (snapshot) {
        post = {
            id: snapshot.val().id,
            titulo: snapshot.val().titulo,
            fecha: snapshot.val().fecha,
            contenido: snapshot.val().contenido,
            imagenUrl: snapshot.val().imagenUrl,
        }
        console.log('en get ', snapshot.val())
        return post;
    });
    return { fail: 'Hubo un error!' }
}
