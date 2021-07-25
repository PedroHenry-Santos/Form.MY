import React from 'react';

import { Accordion, Table, Th, Thead, Tr } from '@chakra-ui/react';

import { useClient } from '../../hooks/useClient';
import { AccordionComponent } from '../AccordionComponent';

type TableComponentsProps = {
  mt: number;
};

export const TableComponents = ({ mt }: TableComponentsProps) => {
  const { clients } = useClient();

  return (
    <>
      <Table variant="unstyled" mt={mt}>
        <Thead>
          <Tr color="gray.600">
            <Th fontSize="md" w="50%" fontWeight="bold">
              Nome
            </Th>
            <Th fontSize="md" w="50%" fontWeight="bold">
              CPF/CNPJ
            </Th>
          </Tr>
        </Thead>
      </Table>

      <Accordion allowMultiple w="full">
        {clients.map(client => {
          return <AccordionComponent key={client.id} data={client} />;
        })}
      </Accordion>
    </>
  );
};
