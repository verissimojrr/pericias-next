import {app, analytics } from './firebase' 
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

//console.log( auth )

const signIn = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const email = result.user.auth.currentUser.auth.currentUser.email
    const nomeUsuario = result.user.auth.currentUser.auth.currentUser.displayName
    return nomeUsuario, email
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const logOut = () => {
    signOut(auth).then(() => {
        console.log('Saiu')
      }).catch((error) => {
        console.log('Deu ruim')
      })
}


export default function Autenticacao(props) {

    console.log(props)
   
    return (
        <div>
            <button onClick={signIn}>Entrar</button>
            <span>Bem vindo, {props.nomeUsuario}  email: {props.email} </span>
            <button onClick={logOut}>Sair</button>
        </div>
    )
    
} 