import React, {
    createContext,
    useCallback,
    useContext,
    useState,
} from 'react';

import { Toast } from './toast.jsx';

export const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

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

    const updateSuccessToast = useCallback(
        (message) => {
            setSuccessToastOpen(true);
            setSuccessToastMessage(message);
        },
        [
            setSuccessToastOpen,
            setSuccessToastMessage,
        ],
    );

    const updateFailureToast = useCallback(
        (message) => {
            setFailureToastOpen(true);
            setFailureToastMessage(message);
        },
        [
            setFailureToastOpen,
            setFailureToastMessage,
        ],
    );

    const props = {
        updateSuccessToast,
        updateFailureToast,
    };

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
            <ToastContext.Provider value={props}>
                {children}
            </ToastContext.Provider>
        </>
    );
};
