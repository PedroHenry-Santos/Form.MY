import React from 'react';

import { Grid, GridItem } from '@chakra-ui/react';
import { useFormik } from 'formik';

import { ButtonComponent } from '../ButtonComponent';
import { InputComponent } from '../InputComponent';

export const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      document: '',
      fone: '',
      cep: '',
      publicPlace: '',
      number: '',
      district: '',
      city: '',
      state: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid templateColumns={{ md: 'repeat(5, 1fr)' }} gap={3}>
        <GridItem colSpan={{ md: 5 }}>
          <InputComponent
            id="name"
            name="Nome"
            isRequired={true}
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 3 }}>
          <InputComponent
            id="email"
            name="E-mail"
            isRequired={true}
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="document"
            name="CPF/CNPJ"
            isRequired={true}
            value={formik.values.document}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="fone"
            name="Telefone"
            isRequired={true}
            value={formik.values.fone}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="cep"
            name="CEP"
            value={formik.values.cep}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 4 }}>
          <InputComponent
            id="publicPlace"
            name="Logradouro"
            value={formik.values.publicPlace}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 1 }}>
          <InputComponent
            id="number"
            name="Número"
            value={formik.values.number}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="district"
            name="Bairro"
            value={formik.values.district}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="city"
            name="Cidade "
            isRequired={true}
            value={formik.values.city}
            onChange={formik.handleChange}
          />
        </GridItem>
        <GridItem colSpan={{ md: 1 }}>
          <InputComponent
            id="state"
            name="Estado"
            isRequired={true}
            value={formik.values.state}
            onChange={formik.handleChange}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <ButtonComponent bg="green" type="submit">
          Registrar
        </ButtonComponent>
        <ButtonComponent bg="yellow" type="reset" onClick={formik.handleReset}>
          Limpar
        </ButtonComponent>
      </Grid>
    </form>
  );
};
