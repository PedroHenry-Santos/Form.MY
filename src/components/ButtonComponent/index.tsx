import React from 'react';

import { Button, ButtonProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type ButtonComponentProps = {
  bg: string;
  fontSize?: string;
  isLoading?: boolean;
  h?: number;
  onClick?: (e: any) => void;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  bg,
  fontSize = 'xl',
  isLoading = false,
  h = 12,
  type = 'button',
  onClick,
  isDisabled = false
}) => {
  const MotionButton = motion<ButtonProps>(Button);

  return (
    <MotionButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      mt={{ base: 5, md: 10 }}
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
      disabled={isDisabled}
    >
      {children}
    </MotionButton>
  );
};
