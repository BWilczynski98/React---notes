import React, { useState, useCallback } from 'react';

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const enquire = useCallback(async (queryOptions, applyData) => {

        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(queryOptions.url, {
                method: queryOptions.method ? queryOptions.method : 'GET',
                headers: queryOptions.headers ? queryOptions.headers : {},
                body: queryOptions.body ? JSON.stringify(queryOptions.body) : null,
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data)
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading,
        error,
        enquire
    }
};

export default useHttp;