import { useContext } from 'react';

import { GlobalProcessesContext } from '../contexts/globalProcessContext';

export const useGlobalProcesses = () => {
  const value = useContext(GlobalProcessesContext);

  return value;
};
