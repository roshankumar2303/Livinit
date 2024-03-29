const headers: Headers = new Headers({
    "Content-Type": "application/json",
});

export interface FetchParamsInterface {
    endpoint: string;
    method: string;
    headers: Headers;
}

export const authFetchParams: { [key: string]: FetchParamsInterface } = {
    get: {
        endpoint: "/auth/get",
        method: "POST",
        headers: headers,
    },
    login: {
        endpoint: "/auth/login",
        method: "POST",
        headers: headers,
    },
    validate: {
        endpoint: "/auth/validate",
        method: "GET",
        headers: headers,
    },
    logout: {
        endpoint: "/auth/logout",
        method: "GET",
        headers: headers,
    },
    signup: {
        endpoint: "/auth/signup",
        method: "POST",
        headers: headers,
    },
};

export const userFetchParams: { [key: string]: FetchParamsInterface } = {
    get: {
        endpoint: "/user/get",
        method: "POST",
        headers: headers,
    },
    update: {
        endpoint: "/user/update",
        method: "POST",
        headers: headers,
    },
    delete: {
        endpoint: "/user/delete",
        method: "DELETE",
        headers: headers,
    },
};
