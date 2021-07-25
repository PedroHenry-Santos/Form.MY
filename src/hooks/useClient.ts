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

type FirebaseClients = {
  name: string;
  email: string;
  document: string;
  phone: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
};

export const useClient = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    const clientRef = database.collection('clients');

    clientRef.onSnapshot(snapshot => {
      const data: Client[] = [];

      snapshot.forEach(doc => {
        const client = doc.data() as FirebaseClients;

        data.push({
          id: doc.id,
          name: client.name,
          email: client.email,
          document: client.document,
          fone: client.phone,
          cep: client.cep,
          publicPlace: client.street,
          number: client.number,
          district: client.neighborhood,
          city: client.city,
          state: client.state
        });
      });
      setClients(data);
    });
  }, []);

  return { clients };
};
