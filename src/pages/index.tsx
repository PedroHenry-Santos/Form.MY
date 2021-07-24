import React from 'react';

import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { FormComponent } from '../components/Form';
import { TableComponents } from '../components/TableComponents';

const PageComponent: React.FC<NextPage> = () => {
  return (
    <Box maxW="container.lg">
      <FormComponent />
      <TableComponents mt={10} />
    </Box>
  );
};

export default PageComponent;
