
import { initializeApp } from 'firebase/app';
import 'firebase/database'
import { getDatabase, ref, child, get,update,push } from "firebase/database";// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDifSOytgwvN8Whe4SM7yc5p5VfW8YSBw4",
  authDomain: "smarter-foodies.firebaseapp.com",
  databaseURL: "https://smarter-foodies-default-rtdb.firebaseio.com",
  projectId: "smarter-foodies",
  storageBucket: "smarter-foodies.appspot.com",
  messagingSenderId: "375458593948",
  appId: "1:375458593948:web:5cde06bbafacebe20b4159",
  measurementId: "G-LFX6DLX7R3"
}


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const db = fb.getDatabase(app);
const db = getDatabase(app);


export async function addRecipe(uid, recipeName) {
  
  const dbRef = ref(db);
  const currentRecipes = null;
  console.log(uid,recipeName)
  await get(child(dbRef, `users/${uid}/myRecipes`)).then((snapshot) => {
    if (snapshot.exists()) {
        let currentRecipes = snapshot.val();
        console.log(currentRecipes);
        if(currentRecipes && currentRecipes.includes(recipeName)) {
          console.log(`Recipe ${recipeName} already exists in user's list of recipes`);
          return;
        }else{
          currentRecipes.push(recipeName)
          console.log(currentRecipes)
          const updates = {};
          updates['/myRecipes'] = currentRecipes;
          const refpush = ref(db,'users/' + uid)
          update(refpush,updates );
        }
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

}






