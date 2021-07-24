import React, { useRef } from 'react';

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react';

type ModalComponentProps = {
  text: string;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  handleReset: (event: any) => void;
};

export const OverlayComponent = ({
  text,
  title,
  isOpen,
  onClose,
  isLoading,
  handleReset
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
          <Button fontSize="xl" h={10} w={28} ref={cancelRef} onClick={onClose}>
            Não
          </Button>
          <Button
            fontSize="xl"
            h={10}
            w={28}
            bg="red.600"
            _hover={{ background: 'red.500' }}
            color="white"
            ml={3}
            isLoading={isLoading}
            onClick={event => {
              handleReset(event);
              onClose();
            }}
          >
            Sim
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
