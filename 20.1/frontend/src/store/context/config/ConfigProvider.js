import ConfigContext, { defaultCreateContextValue } from './config-context';

const ConfigProvider = (props) => {

    return (
        <ConfigContext.Provider value={defaultCreateContextValue}>
            {props.children}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;
