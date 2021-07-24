import { useState, useEffect } from 'react';

import { database } from '../services/firebase';

interface Client {
  id: string;
  name: string;
  email: string;
  document: string;
  fone: string;
  cep: string;
  publicPlace: string;
  number: string;
  district: string;
  city: string;
  state: string;
}

type FirebaseClients = Record<
  string,
  {
    name: string;
    email: string;
    document: string;
    fone: string;
    cep: string;
    publicPlace: string;
    number: string;
    district: string;
    city: string;
    state: string;
  }
>;

export const useClient = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const clientRef = database.ref(`clients`);

    clientRef.on('value', Client => {
      const databaseClient = Client.val();

      const firebaseClient: FirebaseClients = databaseClient ?? {};

      const parsedClients = Object.entries(firebaseClient).map(
        ([key, value]) => {
          return {
            id: key,
            name: value.name,
            email: value.email,
            document: value.document,
            fone: value.fone,
            cep: value.cep,
            publicPlace: value.publicPlace,
            number: value.number,
            district: value.district,
            city: value.city,
            state: value.state
          };
        }
      );

      setClients(parsedClients);
    });

    return () => {
      clientRef.off('value');
    };
  }, []);

  return { clients };
};
