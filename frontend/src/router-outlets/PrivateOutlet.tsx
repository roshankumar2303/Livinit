import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { authFetchParams } from "../fetch-utils/fetchParams";
import handleFetch from "../fetch-utils/handleFetch";

const PrivateOutlet = () => {
    const [isValidSession, setSessionValidity] = useState(false);

    useEffect(() => {
        const checkSessionValidity = async () => {
            const response = await handleFetch(authFetchParams["validate"]);
            setSessionValidity(response.data.isValidSession);
        };

        checkSessionValidity();
    }, []);

    return isValidSession ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateOutlet;
