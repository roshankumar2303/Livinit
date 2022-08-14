const headers: Headers = new Headers({
    "Content-Type": "application/json",
});

export interface FetchParams {
    endpoint: string;
    method: string;
    headers: Headers;
}

export const authFetchParams: { [key: string]: FetchParams } = {
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

export const userFetchParams: { [key: string]: FetchParams } = {
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
