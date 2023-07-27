import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    return (
        <div className="error-page">
            <h1>oops!!</h1>
            <h2>Page not found</h2>
            <h2>{err.status + ":" + err.statusText}</h2>
        </div>
    );
};

export default Error;