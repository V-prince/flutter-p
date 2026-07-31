import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "../config/firebase"


export const fetchExperience = async () => {
  const q = query(
    collection(db, "experience"),
    orderBy("createdAt", "desc")
  );

  const querySnap = await getDocs(q)
  const data = querySnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  return data;
}


export const fetchExpertise = async () => {
  const querySnap = await getDocs(collection(db, "skills"))
  const data = querySnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))

  return data;
}