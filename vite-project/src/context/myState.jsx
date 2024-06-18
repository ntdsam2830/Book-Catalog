/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

function MyState({ children }) {
  // Loading State
  const [loading, setLoading] = useState(false);

  // User State
  const [getAllBook, setGetAllBook] = useState([]);

  /**========================================================================
   *                          GET All Book Function
   *========================================================================**/

  const getAllBookFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "books"), orderBy("publish", "desc"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let bookArray = [];
        QuerySnapshot.forEach((doc) => {
          bookArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllBook(bookArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllBookFunction();
  }, []);
  return (
    <MyContext.Provider
      value={{
        loading,
        setLoading,
        getAllBook,
        getAllBookFunction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyState;
