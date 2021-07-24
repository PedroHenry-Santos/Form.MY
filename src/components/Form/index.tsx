import React from 'react';

import { Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { database } from '../../services/firebase';
import { verifyDocument } from '../../utils/validation';
import { ButtonComponent } from '../ButtonComponent';
import { InputComponent } from '../InputComponent';
import { ModalComponent } from '../ModalComponent';

export const FormComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validationSchema = Yup.object({
    name: Yup.string().required('Campo nome é requerido'),
    email: Yup.string()
      .email('Esse não é um e-mail valido')
      .required('Campo e-mail é requerido'),
    document: Yup.string()
      .required('Campo  é requerido')
      .test('Tamanho', 'É esperado no mínimo 11 dígitos', value => {
        if (!value || value.replace(/[^0-9]/g, '').length < 11) return false;
        else return true;
      })
      .test('CPF/CNPJ', 'O CPF/CNPJ é invalido', value =>
        verifyDocument(value)
      ),
    fone: Yup.string()
      .required('Campo telefone é requerido')
      .test('Tamanho', 'É esperado no mínimo 10 dígitos', value => {
        if (!value || value.replace(/[^0-9]/g, '').length < 10) return false;
        else return true;
      }),
    cep: Yup.string().test('Tamanho', 'É esperado 8 dígitos', value => {
      if (!value || value.replace(/[^0-9]/g, '').length < 8) return false;
      else return true;
    }),
    publicPlace: Yup.string(),
    number: Yup.string(),
    district: Yup.string(),
    city: Yup.string().required('Campo cidade é requerido'),
    state: Yup.string().required('Campo estado é requerido')
  });

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
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
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const clientRef = database.ref(
        'clients/' + values.name.replace(/ /g, '_').toLowerCase()
      );

      clientRef
        .set({
          name: values.name.toUpperCase(),
          email: values.email.toUpperCase(),
          document: values.document.toUpperCase(),
          fone: values.fone.toUpperCase(),
          cep: values.cep.toUpperCase(),
          publicPlace: values.publicPlace.toUpperCase(),
          number: values.number.toUpperCase(),
          district: values.district.toUpperCase(),
          city: values.city.toUpperCase(),
          state: values.state.toUpperCase()
        })
        .then(() => {
          formik.handleReset(values);
          actions.setSubmitting(false);
        });
    }
  });

  return (
    <form
      onSubmit={event => {
        formik.handleSubmit(event);
      }}
      autoComplete="off"
    >
      <Grid templateColumns={{ md: 'repeat(5, 1fr)' }} gap={3}>
        <GridItem colSpan={{ md: 5 }}>
          <InputComponent
            id="name"
            name="Nome"
            isRequired={true}
            value={formik.values.name}
            onChange={formik.handleChange}
            isValid={formik.errors.name ? true : false}
            message={formik.errors.name}
          />
        </GridItem>
        <GridItem colSpan={{ md: 3 }}>
          <InputComponent
            id="email"
            name="E-mail"
            isRequired={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            isValid={formik.errors.email ? true : false}
            message={formik.errors.email}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="document"
            name="CPF/CNPJ"
            isRequired={true}
            value={formik.values.document}
            onChange={formik.handleChange}
            isValid={formik.errors.document ? true : false}
            message={formik.errors.document}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="fone"
            name="Telefone"
            isRequired={true}
            value={formik.values.fone}
            onChange={formik.handleChange}
            isValid={formik.errors.fone ? true : false}
            message={formik.errors.fone}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="cep"
            name="CEP"
            value={formik.values.cep}
            onChange={formik.handleChange}
            isValid={formik.errors.cep ? true : false}
            message={formik.errors.cep}
            setFieldValue={formik.setFieldValue}
            setFieldError={formik.setFieldError}
          />
        </GridItem>
        <GridItem colSpan={{ md: 4 }}>
          <InputComponent
            id="publicPlace"
            name="Logradouro"
            value={formik.values.publicPlace}
            onChange={formik.handleChange}
            isValid={formik.errors.publicPlace ? true : false}
            message={formik.errors.publicPlace}
            isDisabled={
              formik.values.cep && formik.values.publicPlace ? true : false
            }
          />
        </GridItem>
        <GridItem colSpan={{ md: 1 }}>
          <InputComponent
            id="number"
            name="Número"
            value={formik.values.number}
            onChange={formik.handleChange}
            isValid={formik.errors.number ? true : false}
            message={formik.errors.number}
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="district"
            name="Bairro"
            value={formik.values.district}
            onChange={formik.handleChange}
            isValid={formik.errors.district ? true : false}
            message={formik.errors.district}
            isDisabled={
              formik.values.cep && formik.values.district ? true : false
            }
          />
        </GridItem>
        <GridItem colSpan={{ md: 2 }}>
          <InputComponent
            id="city"
            name="Cidade "
            isRequired={true}
            value={formik.values.city}
            onChange={formik.handleChange}
            isValid={formik.errors.city ? true : false}
            message={formik.errors.city}
            isDisabled={formik.values.cep && formik.values.city ? true : false}
          />
        </GridItem>
        <GridItem colSpan={{ md: 1 }}>
          <InputComponent
            id="state"
            name="Estado"
            isRequired={true}
            value={formik.values.state}
            onChange={formik.handleChange}
            isValid={formik.errors.state ? true : false}
            message={formik.errors.state}
            isDisabled={formik.values.cep && formik.values.state ? true : false}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={3}>
        <ButtonComponent
          bg="green"
          type="submit"
          isLoading={formik.isSubmitting}
        >
          Registrar
        </ButtonComponent>
        <ButtonComponent bg="yellow" type="reset" onClick={onOpen}>
          Limpar
        </ButtonComponent>
        <ModalComponent
          onClose={onClose}
          isOpen={isOpen}
          handleReset={formik.handleReset}
        />
      </Grid>
    </form>
  );
};
