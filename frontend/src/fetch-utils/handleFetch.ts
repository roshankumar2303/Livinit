import { FetchParamsInterface } from "./fetchParams";

const handleFetch = async (fetchParams: FetchParamsInterface, body?: any) => {
    try {
        const response = await fetch(fetchParams.endpoint, {
            method: fetchParams.method,
            headers: fetchParams.headers,
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default handleFetch;
