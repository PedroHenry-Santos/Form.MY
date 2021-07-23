import React from 'react';

import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { FormComponent } from '../components/Form';
import { TableComponents } from '../components/TableComponents';

const PageComponent: React.FC<NextPage> = () => {
  return (
    <Box
      py={20}
      px={10}
      d="flex"
      bg="green.50"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box maxW="container.lg">
        <FormComponent />
        <TableComponents mt={10} />
      </Box>
    </Box>
  );
};

export default PageComponent;
