import { useCallback, useState } from "react";

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url || 'https://react-udemy-http-9e3b2-default-rtdb.europe-west1.firebasedatabase.app//tasks.json',
                {
                    method: requestConfig.method || 'GET',
                    headers: requestConfig.headers || {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    },[]);

    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;