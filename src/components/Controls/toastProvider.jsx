import React, { useState } from 'react';

import { Toast } from './toast.jsx';

export const ToastProvider = ({ children }) => {
    const [
        successToastOpen,
        setSuccessToastOpen,
    ] = useState(false);
    const [
        failureToastOpen,
        setFailureToastOpen,
    ] = useState(false);
    const [
        successMessage,
        setSuccessToastMessage,
    ] = useState('Success');
    const [
        failureMessage,
        setFailureToastMessage,
    ] = useState('Failure');

    const props = {
        setSuccessToastOpen,
        setFailureToastOpen,
        setSuccessToastMessage,
        setFailureToastMessage,
    };

    const updateChildrenWithProps = React.Children.map(
        children,
        (child) => React.cloneElement(
            child,
            props,
        ),
    );

    return (
        <>
            <Toast
                message={successMessage}
                severity="success"
                open={successToastOpen}
                setOpen={setSuccessToastOpen}
            />
            <Toast
                message={failureMessage}
                severity="error"
                open={failureToastOpen}
                setOpen={setFailureToastOpen}
            />
            {updateChildrenWithProps}
        </>
    );
};
