import React from 'react';

import {
  Accordion,
  AccordionProps,
  Table,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { useClient } from '../../hooks/useClient';
import { AccordionComponent } from '../AccordionComponent';

type TableComponentsProps = {
  mt: number;
};

export const TableComponents = ({ mt }: TableComponentsProps) => {
  const { clients } = useClient();

  const MotionAccordion = motion<AccordionProps>(Accordion);

  const container = {
    hidden: {
      opacity: 0,
      transition: {
        staggerDirection: -1
      }
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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

      <MotionAccordion
        allowToggle
        w="full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {clients.map(client => {
          return <AccordionComponent key={client.id} data={client} />;
        })}
      </MotionAccordion>
    </>
  );
};
