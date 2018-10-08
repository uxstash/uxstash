import firebase from 'firebase/app';
import 'firebase/auth';
import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);

const Auth = firebase.auth();
const provider = new firebase.auth.GithubAuthProvider();

export { Auth, provider };