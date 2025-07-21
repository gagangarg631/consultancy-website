import { collection, setDoc, doc, getDocs, query, where, orderBy, limit } from "firebase/firestore";
import db from "../../firebase";

const bookingsRef = collection(db, "bookings");

export const createBooking = async (data) => {
  try {
      const customId = `${data.name} | ${data.phone} | ${data.email} | ${data.date} at ${data.time}`;
      const docRef = doc(bookingsRef, customId);
      await setDoc(docRef, data);
      console.log("Document written with ID: ", customId);
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