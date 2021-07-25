import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';

type GlobalProcessesContextProps = {
  isSubmitSuccess: boolean;
  isSubmitFail: boolean;
  isSubmitOfflineSuccess: boolean;
  isDeleteSuccess: boolean;
  isDeleteFail: boolean;
  isDeleteOfflineSuccess: boolean;
  wasSubmitMigrated: boolean;
  wasNotSubmitMigrated: boolean;
  wasDeleteMigrated: boolean;
  wasNotDeleteMigrated: boolean;
  setIsSubmitSuccess: Dispatch<SetStateAction<boolean>>;
  setIsSubmitFail: Dispatch<SetStateAction<boolean>>;
  setIsSubmitOfflineSuccess: Dispatch<SetStateAction<boolean>>;
  setIsDeleteSuccess: Dispatch<SetStateAction<boolean>>;
  setIsDeleteFail: Dispatch<SetStateAction<boolean>>;
  setIsDeleteOfflineSuccess: Dispatch<SetStateAction<boolean>>;
  setWasSubmitMigrated: Dispatch<SetStateAction<boolean>>;
  setWasNotSubmitMigrated: Dispatch<SetStateAction<boolean>>;
  setWasDeleteMigrated: Dispatch<SetStateAction<boolean>>;
  setWasNotDeleteMigrated: Dispatch<SetStateAction<boolean>>;
};

type GlobalProcessesContextProviderProps = {
  children: ReactNode;
};

export const GlobalProcessesContext = createContext(
  {} as GlobalProcessesContextProps
);

export const GlobalProcessesContextProvider = ({
  children
}: GlobalProcessesContextProviderProps) => {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [isSubmitFail, setIsSubmitFail] = useState(false);
  const [isSubmitOfflineSuccess, setIsSubmitOfflineSuccess] = useState(false);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const [isDeleteFail, setIsDeleteFail] = useState(false);
  const [isDeleteOfflineSuccess, setIsDeleteOfflineSuccess] = useState(false);
  const [wasSubmitMigrated, setWasSubmitMigrated] = useState(false);
  const [wasNotSubmitMigrated, setWasNotSubmitMigrated] = useState(false);
  const [wasDeleteMigrated, setWasDeleteMigrated] = useState(false);
  const [wasNotDeleteMigrated, setWasNotDeleteMigrated] = useState(false);

  return (
    <GlobalProcessesContext.Provider
      value={{
        isSubmitSuccess,
        isSubmitFail,
        isSubmitOfflineSuccess,
        isDeleteSuccess,
        isDeleteFail,
        isDeleteOfflineSuccess,
        wasSubmitMigrated,
        wasNotSubmitMigrated,
        wasNotDeleteMigrated,
        wasDeleteMigrated,
        setIsSubmitSuccess,
        setIsSubmitFail,
        setIsSubmitOfflineSuccess,
        setIsDeleteSuccess,
        setIsDeleteFail,
        setIsDeleteOfflineSuccess,
        setWasSubmitMigrated,
        setWasNotSubmitMigrated,
        setWasDeleteMigrated,
        setWasNotDeleteMigrated
      }}
    >
      {children}
    </GlobalProcessesContext.Provider>
  );
};
