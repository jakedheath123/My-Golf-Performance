export const collectIdsAndDocs = doc => {
  return { docId: doc.id, ...doc.data() };
};
