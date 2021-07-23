import { FocusEvent } from 'react';

import Cep from 'cep-promise';

export const onBlurCep = (
  event: FocusEvent<HTMLInputElement>,
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void,
  setFieldError: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void
) => {
  const { value } = event.target;
  const cep = value?.replace(/[^0-9]/g, '');

  if (cep?.length !== 8) {
    setFieldValue('district', '');
    setFieldValue('city', '');
    setFieldValue('publicPlace', '');
    setFieldValue('state', '');
    return;
  }

  Cep(`${cep}`)
    .catch(() => {
      setFieldError('cep', 'O CEP inserido é inválido');
      setFieldValue('district', '');
      setFieldValue('city', '');
      setFieldValue('publicPlace', '');
      setFieldValue('state', '');
      return;
    })
    .then((data: any) => {
      if (data) {
        setFieldError('cep', '');
        setFieldValue('district', data.neighborhood);
        setFieldValue('city', data.city);
        setFieldValue('publicPlace', data.street);
        setFieldValue('state', data.state);
      }
      return;
    });
};
