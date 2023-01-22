import { initializeApp } from 'firebase/app';
import {getDatabase, update} from 'firebase/database';

// Your web app's Firebase configuration
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
const db = getDatabase(app);

export async function addRecipe(uid, recipeName) {
  
  // Get the user's current list of recipes
  const userRef = child(ref(db), `users/${uid}/myRecipes`);
  let currentRecipes = userRef.once('value').then(snapshot => snapshot.val());
  
  // Check if recipe name already exists in the list
  if(currentRecipes && currentRecipes.includes(recipeName)) {
    console.log(`Recipe ${recipeName} already exists in user's list of recipes`);
    return;
  }
  
  // Add the new recipe name to the user's list of recipes
  const updates = {};
  updates[`/users/${uid}/myRecipes/${recipeName}`] = true;
  
  return update(ref(db), updates);
}

export async function AddRecipeToUser(uid,recipeTitle) {
  // const usersRef = fb.doc (db, 'Users');  
  
  // const newUserRef = await getDocs(usersRef);  
  // const newUser = {  
  //   ID: ID,
  //   Email: Email,
  //   isUser: isUser,
  //   LettersNum: LettersNum
  // };

  // await fb.setDoc(fb.doc(db, "Users", ID), newUser);
  // // await newUserRef.set(newUser); 
  const ref = db.ref("users").child(uid).child("myRecipes");
  console.log(get(ref))
  return "done";
}


