import React from 'react';

import { Button } from '@chakra-ui/react';

type ButtonComponentProps = {
  bg: string;
  fontSize?: string;
  isLoading?: boolean;
  h?: number;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  bg,
  fontSize = 'xl',
  isLoading = false,
  h = 12,
  type = 'button',
  onClick
}) => {
  return (
    <Button
      mt={10}
      isLoading={isLoading /*props.isSubmitting*/}
      type={`${type}`}
      bg={`${bg}.600`}
      color="white"
      letterSpacing="2px"
      fontSize={`${fontSize}`}
      h={h}
      _hover={{ background: `${bg}.500` }}
      maxW="sm"
      w="full"
      justifySelf="center"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
