import { FetchParams } from "./fetchParams";

const handleFetch = async (fetchParams: FetchParams, body: any) => {
    try {
        const response = await fetch(fetchParams.endpoint, {
            method: fetchParams.method,
            headers: fetchParams.headers,
            body: body,
        });
        return response;
    } catch (error) {
        console.error(error);
        return {
            error: error,
            status: 400,
            message: {
                type: "ERROR",
                body: "Error in sending HTTP request",
            },
        };
    }
};

export default handleFetch;
