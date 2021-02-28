import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { firestore } from "../firebase";

export const useFirestore = (collectionString, actionType) => {
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setResponse(null);
    setLoading(true);
    setError(null);

    firestore
      .collection(collectionString)
      .get()
      .then(snapshot => {
        const collection = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        dispatch({ type: "SET_GOLF_COURSE_LIST", payload: collection });
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { loading, error };
};
