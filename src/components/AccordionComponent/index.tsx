import React from 'react';

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Grid,
  GridItem,
  Table,
  Tbody,
  Text,
  Th,
  Tr
} from '@chakra-ui/react';

import { database } from '../../services/firebase';

type AccordionComponentProps = {
  data: {
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
  };
};

export const AccordionComponent = ({ data }: AccordionComponentProps) => {
  const {
    id,
    name,
    email,
    document,
    fone,
    cep,
    publicPlace,
    number,
    district,
    city,
    state
  } = data;

  const handleClientDelete = async (clientId: string) => {
    await database.ref(`clients/${clientId}`).remove();
  };

  return (
    <AccordionItem _hover={{ background: 'gray.100' }}>
      <AccordionButton
        p={0}
        bg="gray.50"
        _focus={{ border: '2px solid #4FD1C5' }}
      >
        <Table variant="unstyled" fontWeight="bold">
          <Tbody>
            <Tr>
              <Th
                w="50%"
                fontWeight="normal"
                fontFamily="Archivo"
                fontSize="md"
                px={1}
              >
                {name}
              </Th>
              <Th fontWeight="normal" fontFamily="Archivo" fontSize="md" px={1}>
                {document}
              </Th>
              <Th
                d="flex"
                justifyContent="flex-end"
                w="-moz-fit-content"
                mx="auto"
              >
                <AccordionIcon />
              </Th>
            </Tr>
          </Tbody>
        </Table>
      </AccordionButton>

      <AccordionPanel pb={4} px={6} bg="green.50">
        <Grid templateRows={{ md: 'repeat(5, 1fr)' }}>
          <GridItem rowSpan={1}>
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  E-mail:
                </Text>
                <Text fontSize="md">{email}</Text>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  Telefone:
                </Text>
                <Text fontSize="md">{fone}</Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem rowSpan={1}>
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }}>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  CEP:
                </Text>
                <Text fontSize="md">{cep}</Text>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  Logradouro:
                </Text>
                <Text fontSize="md">{publicPlace}</Text>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  Número:
                </Text>
                <Text fontSize="md">{number}</Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem rowSpan={1}>
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }}>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  Bairro:
                </Text>
                <Text fontSize="md">{district}</Text>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  Cidade:
                </Text>
                <Text fontSize="md">{city}</Text>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Text fontWeight="semibold" fontSize="md">
                  Estado:
                </Text>
                <Text fontSize="md">{state}</Text>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            rowSpan={2}
            d="flex"
            justifyContent="center"
            alignItems="center"
            mt={5}
          >
            <Button
              bg="red.600"
              color="white"
              w="full"
              maxW="sm"
              h={12}
              _hover={{ background: 'red.500' }}
              onClick={() => handleClientDelete(id)}
            >
              Apagar
            </Button>
          </GridItem>
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};
