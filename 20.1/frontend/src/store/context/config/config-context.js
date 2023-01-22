import { createContext } from 'react';

export const defaultCreateContextValue = {
    apiUrl: 'http://localhost:8080/'

};

const ConfigContext = createContext(defaultCreateContextValue);

export default ConfigContext;