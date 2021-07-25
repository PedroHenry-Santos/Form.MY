import React from 'react';

import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box
} from '@chakra-ui/react';

import { useConnection } from '../../hooks/useConnection';
import { useGlobalProcesses } from '../../hooks/useGlobalProcesses';
import { AlertComponent } from '../AlertComponent';

export const GlobalAlertsComponents = () => {
  const {
    isSubmitSuccess,
    setIsSubmitSuccess,
    isSubmitFail,
    setIsSubmitFail,
    isSubmitOfflineSuccess,
    setIsSubmitOfflineSuccess,
    isDeleteSuccess,
    setIsDeleteSuccess,
    isDeleteFail,
    setIsDeleteFail,
    isDeleteOfflineSuccess,
    setIsDeleteOfflineSuccess,
    wasSubmitMigrated,
    setWasSubmitMigrated,
    wasNotSubmitMigrated,
    setWasNotSubmitMigrated,
    wasDeleteMigrated,
    setWasDeleteMigrated,
    wasNotDeleteMigrated,
    setWasNotDeleteMigrated
  } = useGlobalProcesses();
  const { status } = useConnection();

  return (
    <>
      {!status && (
        <Alert status="warning" mb={1}>
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Atenção!</AlertTitle>
            <AlertDescription display="block">
              Sua conexão com a “internet” foi interrompida. Atualmente todas as
              operações estão ocorrendo de maneira local, ou seja, não estão
              sendo salvos no banco de dado. Reconecte sua “internet” para que
              as alterações sejam migradas.
            </AlertDescription>
          </Box>
        </Alert>
      )}
      {isSubmitSuccess && (
        <AlertComponent
          actions={setIsSubmitSuccess}
          text="Cliente cadastrado com sucesso. A força está com você!"
          status="success"
        />
      )}
      {isSubmitFail && (
        <AlertComponent
          actions={setIsSubmitFail}
          text="Houve um erro ao cadastrar o cliente. A força te abandonou temporariamente!"
          status="error"
        />
      )}
      {isSubmitOfflineSuccess && (
        <AlertComponent
          actions={setIsSubmitOfflineSuccess}
          text="Cliente cadastrado localmente com sucesso. A força ainda está com você!"
          status="success"
        />
      )}
      {isDeleteSuccess && (
        <AlertComponent
          actions={setIsDeleteSuccess}
          text="Cliente foi excluído com sucesso. A força está com você!"
          status="success"
        />
      )}
      {isDeleteFail && (
        <AlertComponent
          actions={setIsDeleteFail}
          text="Houve um erro ao excluir o cliente. A força te abandonou temporariamente!"
          status="error"
        />
      )}
      {isDeleteOfflineSuccess && (
        <AlertComponent
          actions={setIsDeleteOfflineSuccess}
          text="Cliente excluído localmente com sucesso. A força ainda está com você!"
          status="success"
        />
      )}
      {wasSubmitMigrated && (
        <AlertComponent
          actions={setWasSubmitMigrated}
          text="O(s) cliente(s) criados(s) localmente foram migrados para o banco de dados. A força está com você!"
          status="success"
        />
      )}
      {wasNotSubmitMigrated && (
        <AlertComponent
          actions={setWasNotSubmitMigrated}
          text="Houve um erro migrar o(s) cliente(s) criado(s) localmente. A força te abandonou temporariamente!"
          status="error"
        />
      )}
      {wasDeleteMigrated && (
        <AlertComponent
          actions={setWasDeleteMigrated}
          text="O(s) cliente(s) excluído(s) localmente foram migrados para o banco de dados. A força está com você!"
          status="success"
        />
      )}
      {wasNotDeleteMigrated && (
        <AlertComponent
          actions={setWasNotDeleteMigrated}
          text="Houve um erro migrar o(s) cliente(s) criado(s) localmente. A força te abandonou temporariamente!"
          status="error"
        />
      )}
    </>
  );
};
