import { useCallback, useState } from "react";

export const useHttpClient = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method,
                body,
                headers
            });

            const responseData = await response.json();

            if (!response.ok) {
                setError(responseData.message || 'Something went wrong !');
            }

            setIsLoading(false);
            return responseData;
        } 
        catch (error) {
            setError(error.message || 'Something went wrong !');
            setIsLoading(false);
            throw error;
        }
    },[]);

    const clearError = () => {
        setError(null);
    };

    return {isLoading, error, sendRequest, clearError};
};