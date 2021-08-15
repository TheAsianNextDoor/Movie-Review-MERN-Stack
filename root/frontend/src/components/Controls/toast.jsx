import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useCallback } from 'react';

export const Toast = ({
    message,
    severity,
    open,
    setOpen,
}) => {
    const handleClose = useCallback(
        () => setOpen(false),
        [setOpen],
    );

    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};
