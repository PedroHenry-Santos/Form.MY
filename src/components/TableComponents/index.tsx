import React from 'react';

import { Accordion, Table, Th, Thead, Tr } from '@chakra-ui/react';

import { AccordionComponent } from '../AccordionComponent';

type TableComponentsProps = {
  mt: number;
};

export const TableComponents = ({ mt }: TableComponentsProps) => {
  const data = [
    {
      name: 'Pedro Henrique Viana dos Santos',
      email: 'pedrohenry.viana@gmail.com',
      document: '065.601.33-81',
      fone: '(64) 9 9663-4177',
      cep: '38010-000',
      publicPlace: 'Leopoldina de Oliveira',
      number: '4050',
      district: 'Centro',
      city: 'Uberaba',
      state: 'MG'
    },
    {
      name: 'Arthur Lopes de Morais',
      email: 'arthurdoflamento@gmail.com',
      document: '123.456.789-89',
      fone: '(64) 9 9145-5245',
      cep: '75890-000',
      publicPlace: 'Alameda Silva',
      number: '45',
      district: 'Santa Lucia',
      city: 'Itumbiara',
      state: 'GO'
    },
    {
      name: 'Arthur Lopes de Morais',
      email: 'arthurdoflamento@gmail.com',
      document: '123.456.789-89',
      fone: '(64) 9 9145-5245',
      cep: '75890-000',
      publicPlace: 'Alameda Silva',
      number: '45',
      district: 'Santa Lucia',
      city: 'Itumbiara',
      state: 'GO'
    },
    {
      name: 'Arthur Lopes de Morais',
      email: 'arthurdoflamento@gmail.com',
      document: '123.456.789-89',
      fone: '(64) 9 9145-5245',
      cep: '75890-000',
      publicPlace: 'Alameda Silva',
      number: '45',
      district: 'Santa Lucia',
      city: 'Itumbiara',
      state: 'GO'
    }
  ];

  return (
    <>
      <Table variant="unstyled" mt={mt}>
        <Thead>
          <Tr bg="green.600" color="white">
            <Th fontSize="md" w="50%" fontWeight="bold">
              Nome
            </Th>
            <Th fontSize="md" w="50%" fontWeight="bold">
              CPF/CNPJ
            </Th>
          </Tr>
        </Thead>
      </Table>

      <Accordion allowToggle w="full">
        {data.map(client => (
          <AccordionComponent key={client.name} data={client} />
        ))}
      </Accordion>
    </>
  );
};
