import React from 'react';

import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';

type ModalComponentProps = {
  isOpen: boolean;
  onClose: () => void;
  isLoading?: boolean;
  handleReset: (event: any) => void;
};

export const ModalComponent = ({
  isOpen,
  onClose,
  isLoading,
  handleReset
}: ModalComponentProps) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Você deseja limpar os campos?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
          <Button
            bg="yellow.600"
            color="white"
            letterSpacing="2px"
            _hover={{ background: 'yellow.500' }}
            isLoading={isLoading}
            onClick={event => {
              handleReset(event);
              onClose();
            }}
            mr={3}
            type="submit"
          >
            Limpar
          </Button>
          <Button
            onClick={onClose}
            bg="blue.600"
            color="white"
            letterSpacing="2px"
            _hover={{ background: 'blue.500' }}
            mr={3}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
