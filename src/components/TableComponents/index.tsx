import React from 'react';

import { Accordion, Table, Th, Thead, Tr } from '@chakra-ui/react';
import { useClient } from 'src/hooks/useClient';

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
        {clients.map(client => (
          <AccordionComponent key={client.id} data={client} />
        ))}
      </Accordion>
    </>
  );
};
