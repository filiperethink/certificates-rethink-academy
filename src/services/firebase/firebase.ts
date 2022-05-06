import { collection, addDoc } from "firebase/firestore";
import FirebaseInstance from "./config";

const createCertificate = async (certificate: any) => {
  try {
    const docRef = await addDoc(
      collection(FirebaseInstance.db, "certificates"),
      {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      }
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
