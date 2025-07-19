import { collection, addDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import db from "../../firebase";

const bookingsRef = collection(db, "bookings");

export const createBooking = async (data) => {
  try {
      const docRef = await addDoc(bookingsRef, data);
      console.log("Document written with ID: ", docRef.id);
      return docRef
  } catch (e) {
      console.error("Error creating document: ", e);
  }
}

// Get latest booking by email
export const getLatestBookingByEmail = async (email) => {
  const q = query(
    bookingsRef,
    where("email", "==", email),
    orderBy("timestamp", "desc"),
    limit(1)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};