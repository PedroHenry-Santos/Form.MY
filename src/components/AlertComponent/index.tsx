import React, { Dispatch } from 'react';

import { Alert, AlertIcon, CloseButton } from '@chakra-ui/react';

type AlertComponentProps = {
  status: 'error' | 'success' | 'warning' | 'info';
  text: string;
  actions: Dispatch<React.SetStateAction<boolean>>;
};

export const AlertComponent = ({
  status,
  text,
  actions
}: AlertComponentProps) => {
  return (
    <Alert status={`${status}`} borderRadius="md" mb={4}>
      <AlertIcon />
      {text}
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={() => actions(false)}
      />
    </Alert>
  );
};
