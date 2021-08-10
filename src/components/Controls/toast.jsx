import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

export const Toast = ({
    message,
    severity,
    open,
    setOpen,
}) => {
    const handleClose = () => setOpen(false);

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
