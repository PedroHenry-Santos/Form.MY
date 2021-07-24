import { Dispatch, FocusEvent } from 'react';

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
  ) => void,
  setHaveCep: Dispatch<
    React.SetStateAction<{
      publicPlace: boolean;
      district: boolean;
      city: boolean;
      state: boolean;
    }>
  >
) => {
  const { value } = event.target;
  const cep = value?.replace(/[^0-9]/g, '');

  if (cep?.length !== 8) {
    setFieldValue('district', '');
    setFieldValue('city', '');
    setFieldValue('publicPlace', '');
    setFieldValue('state', '');
    setHaveCep({
      district: false,
      city: false,
      publicPlace: false,
      state: false
    });
    return;
  }

  Cep(`${cep}`)
    .catch(() => {
      setFieldError('cep', 'O CEP inserido é inválido');
      setFieldValue('district', '');
      setFieldValue('city', '');
      setFieldValue('publicPlace', '');
      setFieldValue('state', '');
      setHaveCep({
        district: false,
        city: false,
        publicPlace: false,
        state: false
      });
      return;
    })
    .then((data: any) => {
      if (data) {
        setFieldError('cep', '');
        setFieldValue('district', data.neighborhood);
        setFieldValue('city', data.city);
        setFieldValue('publicPlace', data.street);
        setFieldValue('state', data.state);
        setHaveCep({
          district: data.neighborhood ? true : false,
          city: data.city ? true : false,
          publicPlace: data.street ? true : false,
          state: data.state ? true : false
        });
      }
      return;
    });
};
