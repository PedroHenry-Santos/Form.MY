import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';

import { ButtonComponent } from '../ButtonComponent';
import { InputComponent } from '../InputComponent';

export const FormComponent = () => {
  return (
    <form>
      <Grid templateColumns={{ md: 'repeat(5, 1fr)' }} gap={3}>
        <GridItem colSpan={{ md: 5 }}>
          <InputComponent id="name" name="Nome" isRequired={true} />
        </GridItem>
        <GridItem colSpan={{ md: 3 }}>
          <InputComponent id="email" name="E-mail" isRequired={true} />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent id="document" name="CPF/CNPJ" isRequired={true} />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent id="fone" name="Telefone" isRequired={true} />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent id="cep" name="CEP" isRequired={false} />
        </GridItem>
        <GridItem colSpan={{ md: 4 }}>
          <InputComponent
            id="publicPlace"
            name="Logradouro"
            isRequired={false}
          />
        </GridItem>
        <GridItem colSpan={{ md: 1 }}>
          <InputComponent id="number" name="Número" isRequired={false} />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent id="district" name="Bairro" isRequired={false} />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent id="city" name="Cidade " isRequired={true} />
        </GridItem>
        <GridItem colSpan={{ md: 1 }}>
          <InputComponent id="state" name="Estado" isRequired={true} />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <ButtonComponent bg="green" type="submit">
          Registrar
        </ButtonComponent>
        <ButtonComponent bg="yellow" type="reset">
          Limpar
        </ButtonComponent>
      </Grid>
    </form>
  );
};
