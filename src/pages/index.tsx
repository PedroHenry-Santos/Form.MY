import React from 'react';

import {
  Box,
  Button,
  Collapse,
  Heading,
  useDisclosure
} from '@chakra-ui/react';
import { NextPage } from 'next';

import { FormComponent } from '../components/Form';
import { GlobalAlertsComponents } from '../components/GlobalAlertsComponents';
import { Icon } from '../components/Icon';
import { TableComponents } from '../components/TableComponents';

const PageComponent: React.FC<NextPage> = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box maxW="container.lg" w="full">
      <Box maxW="3xs" my={4} mx="auto">
        <Icon first="green.800" second="yellow.400" third="green.600" />
      </Box>

      <Box maxW="container.lg" bg="white" px={4} py={6} borderRadius="md">
        <Button variant="outline" colorScheme="green" onClick={onToggle} mb={2}>
          Inserir clientes
        </Button>
        <GlobalAlertsComponents />
        <Collapse in={isOpen} animateOpacity>
          <FormComponent />
        </Collapse>
      </Box>
      <Box
        mt={2}
        maxW="container.lg"
        bg="white"
        px={4}
        py={6}
        borderRadius="md"
      >
        <Heading fontSize="xl" color="green.900" pl={6}>
          Clientes cadastrados
        </Heading>
        <TableComponents mt={6} />
      </Box>
    </Box>
  );
};

export default PageComponent;
