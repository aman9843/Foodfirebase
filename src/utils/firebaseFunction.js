
import { doc, setDoc, getDocs, query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { fs } from "../firebase.config";



// To store User Data

export const saveuserdata = async (data) => {
     fs.collection('userData').add({

        data

     })
    
}

// get Data 
export const getFoodItems = async () => {
    const snapshot = await fs.collection('foodItems').get(
        orderBy("id", "desc")
    )
    return snapshot.docs.map(doc => doc.data());

}

// get all data 

// export const getFoodItems = async () => {
//     const q = query(collection(fs,'foodItems'), orderBy('id','desc'))
//     onSnapshot(q,(querySnapshot) => {
//         setDoc(querySnapshot.docs.map(doc => doc.data()))
        
//     })
// }







//  
// export  const saveItem = async (data) => {
//     await setDoc(doc(firestore, "foodItems", `${Date.now}`), data, {
//         capital: true,
//         merge:true,
//     });
// };






// // To get Food Items

// export const getFoodItems = async () => {
//     const items = await getDocs(

//         query(collection(fs, "foodItems"), orderBy("id", "description"))

//     );

//     return items.docs.map((doc) =>  doc.data());
    
// };




