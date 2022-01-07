import { initializeApp } from 'firebase/app'
import firebaseConfig from './Firebase.config'

const firebaseinitalizeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default firebaseinitalizeAuthentication;