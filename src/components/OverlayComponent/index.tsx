import React, { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonProps
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

type ModalComponentProps = {
  text: string;
  title: string;
  bg: string;
  id?: string;
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  handleFunction: (event: any) => void;
};

const MotionButton = motion<ButtonProps>(Button);

export const OverlayComponent = ({
  text,
  title,
  bg,
  id,
  isOpen,
  onClose,
  isLoading,
  handleFunction
}: ModalComponentProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader fontSize="2xl">{title}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody fontSize="xl">{text}</AlertDialogBody>
        <AlertDialogFooter>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            fontSize="xl"
            h={10}
            w={28}
            ref={cancelRef}
            onClick={onClose}
          >
            Não
          </MotionButton>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            fontSize="xl"
            h={10}
            w={28}
            bg={`${bg}.600`}
            _hover={{ background: `${bg}.500` }}
            color="white"
            ml={3}
            isLoading={isLoading}
            onClick={event => {
              !id ? handleFunction(event) : handleFunction(id);
              onClose();
            }}
          >
            Sim
          </MotionButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
