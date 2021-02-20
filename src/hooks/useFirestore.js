import { useState, useEffect } from "react";

import { firestore } from "../firebase";

export const useFirestore = collectionString => {
  const [response, setResponse] = useState(null);
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
        setResponse(collection);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return [response, loading, error];
};
