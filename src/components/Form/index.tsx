import React, { useState } from 'react';

import { Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { useFormik } from 'formik';

import { useConnection } from '../../hooks/useConnection';
import { useGlobalProcesses } from '../../hooks/useGlobalProcesses';
import { database } from '../../services/firebase';
import { validationSchema } from '../../utils/validationSchema';
import { ButtonComponent } from '../ButtonComponent';
import { InputComponent } from '../InputComponent';
import { OverlayComponent } from '../OverlayComponent';

export const FormComponent = () => {
  const Cleaning = useDisclosure();
  const Record = useDisclosure();
  const {
    setIsSubmitFail,
    setIsSubmitSuccess,
    setIsSubmitOfflineSuccess,
    setWasSubmitMigrated,
    setWasNotSubmitMigrated
  } = useGlobalProcesses();
  const { status } = useConnection();

  const [haveCep, setHaveCep] = useState({
    publicPlace: false,
    district: false,
    city: false,
    state: false
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
      const clientRef = database.collection('clients');

      if (status) {
        clientRef
          .add({
            name: values.name.toUpperCase(),
            email: values.email.toUpperCase(),
            document: values.document.toUpperCase(),
            phone: values.fone.toUpperCase(),
            cep: values.cep.toUpperCase(),
            street: values.publicPlace.toUpperCase(),
            number: values.number.toUpperCase(),
            neighborhood: values.district.toUpperCase(),
            city: values.city.toUpperCase(),
            state: values.state.toUpperCase()
          })
          .catch(() => {
            setIsSubmitFail(true);
            actions.setSubmitting(false);
          })
          .then(() => {
            setIsSubmitSuccess(true);
            formik.handleReset(values);
            actions.setSubmitting(false);
            setHaveCep({
              publicPlace: false,
              district: false,
              city: false,
              state: false
            });
          });
      } else {
        clientRef
          .add({
            name: values.name.toUpperCase(),
            email: values.email.toUpperCase(),
            document: values.document.toUpperCase(),
            phone: values.fone.toUpperCase(),
            cep: values.cep.toUpperCase(),
            street: values.publicPlace.toUpperCase(),
            number: values.number.toUpperCase(),
            neighborhood: values.district.toUpperCase(),
            city: values.city.toUpperCase(),
            state: values.state.toUpperCase()
          })
          .catch(() => {
            setWasNotSubmitMigrated(true);
          })
          .then(() => {
            setWasSubmitMigrated(true);
          });

        setIsSubmitOfflineSuccess(true);
        formik.handleReset(values);
        actions.setSubmitting(false);
        setHaveCep({
          publicPlace: false,
          district: false,
          city: false,
          state: false
        });
      }
    }
  });

  return (
    <form autoComplete="off">
      <Grid templateColumns={{ md: 'repeat(5, 1fr)' }} gap={2} mt={3}>
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
            isRequired={true}
            value={formik.values.cep}
            onChange={formik.handleChange}
            isValid={formik.errors.cep ? true : false}
            message={formik.errors.cep}
            setFieldValue={formik.setFieldValue}
            setFieldError={formik.setFieldError}
            setHaveCep={setHaveCep}
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
            isDisabled={haveCep?.publicPlace}
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
            isDisabled={haveCep?.district}
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
            isDisabled={haveCep?.city}
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
            isDisabled={haveCep?.state}
          />
        </GridItem>
      </Grid>
      <Grid templateColumns={{ md: 'repeat(2, 1fr)' }}>
        <ButtonComponent
          bg="green"
          type="button"
          onClick={Record.onOpen}
          isLoading={formik.isSubmitting}
        >
          Registrar
        </ButtonComponent>
        <ButtonComponent
          bg="yellow"
          type="button"
          onClick={Cleaning.onOpen}
          isDisabled={!formik.dirty}
        >
          Limpar
        </ButtonComponent>
      </Grid>
      <OverlayComponent
        title="Limpar campos?"
        text="Tem certeza de que deseja descartar todas as suas alterações?"
        onClose={Cleaning.onClose}
        isOpen={Cleaning.isOpen}
        bg="red"
        handleFunction={formik.handleReset}
      />
      <OverlayComponent
        title="Registrar cliente?"
        text="Tem certeza de que deseja registrar as informações do cliente?"
        onClose={Record.onClose}
        isOpen={Record.isOpen}
        bg="green"
        handleFunction={formik.handleSubmit}
      />
    </form>
  );
};
