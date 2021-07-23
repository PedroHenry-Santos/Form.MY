import React, { useEffect, useRef } from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';
import Inputmask from 'inputmask';

type InputComponentProps = {
  id: string;
  name: string;
  isRequired?: boolean;
  isValid?: boolean;
  value: string;
  message?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
};

export const InputComponent: React.FC<InputComponentProps> = ({
  id,
  name,
  isRequired = false,
  isValid,
  value,
  message,
  onChange
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (id === 'document') {
      Inputmask({
        mask: ['999.999.999-99', '99.999.999/9999-99'],
        keepStatic: true
      }).mask(ref.current);
    } else if (id === 'fone') {
      Inputmask({
        mask: ['(99) 9999-9999', '(99) 9 9999-9999'],
        keepStatic: true
      }).mask(ref.current);
    } else if (id === 'cep') {
      Inputmask({
        mask: ['99999-999'],
        keepStatic: true
      }).mask(ref.current);
    }
  }, [id]);

  return (
    <FormControl isInvalid={isValid} isRequired={isRequired}>
      <FormLabel htmlFor={id} color="gray.700" fontSize="md" mb="-0.2">
        {name}
      </FormLabel>
      <Input
        ref={ref}
        id={id}
        name={id}
        h={12}
        focusBorderColor="green.400"
        fontSize="xl"
        value={value}
        onChange={onChange}
        color="gray.800"
        bg="gray.100"
      />
      <FormErrorMessage>{message}</FormErrorMessage>
    </FormControl>
  );
};
