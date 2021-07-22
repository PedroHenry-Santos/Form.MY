import React from 'react';

import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';

const PageComponent: React.FC<NextPage> = () => {
  return (
    <>
      <Heading color="blue.300" fontSize="9xl">
        Olá mundo
      </Heading>
    </>
  );
};

export default PageComponent;
