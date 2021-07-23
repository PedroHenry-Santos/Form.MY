import React from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';

type InputComponentProps = {
  id: string;
  name: string;
  isRequired?: boolean;
  value: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
};

export const InputComponent: React.FC<InputComponentProps> = ({
  id,
  name,
  isRequired = false,
  value,
  onChange
}) => {
  return (
    <FormControl
      isInvalid={/*form.errors.name && form.touched.name*/ id ? true : false}
      isRequired={isRequired}
    >
      <FormLabel htmlFor={id} color="gray.700" fontSize="md" mb="-0.2">
        {name}
      </FormLabel>
      <Input
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
      <FormErrorMessage>{/*form.errors.name*/}</FormErrorMessage>
    </FormControl>
  );
};
