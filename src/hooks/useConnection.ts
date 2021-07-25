import { useState, useEffect } from 'react';

import { database } from '../services/firebase';

export const useConnection = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const clientRef = database.collection('clients');

    clientRef.onSnapshot({ includeMetadataChanges: true }, snapshot => {
      setStatus(snapshot.metadata.fromCache ? false : true);
    });
  }, []);

  return { status };
};
