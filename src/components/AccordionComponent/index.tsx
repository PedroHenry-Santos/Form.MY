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
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';

type AccordionComponentProps = {
  data: {
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

  return (
    <AccordionItem _hover={{ background: 'gray.100' }}>
      <AccordionButton
        p={0}
        bg="gray.50"
        _focus={{ border: '2px solid #4FD1C5' }}
      >
        <Table variant="unstyled" fontWeight="bold">
          <Thead>
            <Tr>
              <Th
                w="50%"
                fontWeight="normal"
                fontFamily="Archivo"
                fontSize="md"
              >
                {name}
              </Th>
              <Th fontWeight="normal" fontFamily="Archivo" fontSize="md">
                {document}
              </Th>
              <Th d="flex" justifyContent="flex-end" w="-moz-fit-content">
                <AccordionIcon />
              </Th>
            </Tr>
          </Thead>
        </Table>
      </AccordionButton>

      <AccordionPanel pb={4} px={6} bg="green.50">
        <Grid templateRows={{ md: 'repeat(5, 1fr)' }}>
          <GridItem rowSpan={1}>
            <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  E-mail:
                </Td>
                <Td fontSize="md">{email}</Td>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  Telefone:
                </Td>
                <Td fontSize="md">{fone}</Td>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem rowSpan={1}>
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }}>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  CEP:
                </Td>
                <Td fontSize="md">{cep}</Td>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  Logradouro:
                </Td>
                <Td fontSize="md">{publicPlace}</Td>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  Número:
                </Td>
                <Td fontSize="md">{number}</Td>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem rowSpan={1}>
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }}>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  Bairro:
                </Td>
                <Td fontSize="md">{district}</Td>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  Cidade:
                </Td>
                <Td fontSize="md">{city}</Td>
              </GridItem>
              <GridItem colSpan={1} py={2}>
                <Td fontWeight="semibold" fontSize="md" pr={2}>
                  Estado:
                </Td>
                <Td fontSize="md">{state}</Td>
              </GridItem>
            </Grid>
          </GridItem>
          <GridItem
            rowSpan={2}
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              bg="red.600"
              color="white"
              w="full"
              maxW="sm"
              h={12}
              _hover={{ background: 'red.500' }}
            >
              Apagar
            </Button>
          </GridItem>
        </Grid>
      </AccordionPanel>
    </AccordionItem>
  );
};
