import * as Yup from 'yup';

import { verifyDocument } from './verifyDocument';

export const validationSchema = Yup.object({
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
    .test('CPF/CNPJ', 'O CPF/CNPJ é invalido', value => verifyDocument(value)),
  fone: Yup.string()
    .required('Campo telefone é requerido')
    .test('Tamanho', 'É esperado no mínimo 10 dígitos', value => {
      if (!value || value.replace(/[^0-9]/g, '').length < 10) return false;
      else return true;
    }),
  cep: Yup.string()
    .required('Campo CEP é requerido')
    .test('Tamanho', 'É esperado 8 dígitos', value => {
      if (!value || value.replace(/[^0-9]/g, '').length < 8) return false;
      else return true;
    }),
  publicPlace: Yup.string(),
  number: Yup.string(),
  district: Yup.string(),
  city: Yup.string().required('Campo cidade é requerido'),
  state: Yup.string().required('Campo estado é requerido')
});
