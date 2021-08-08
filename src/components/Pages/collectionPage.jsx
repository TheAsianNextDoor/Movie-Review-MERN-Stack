import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete.js';
import axios from 'axios';
import {
    useEffect,
    useState,
} from 'react';

import {
    columnsConfig,
    constructRows,
} from '../../utils/tableUtils.js';
import { Toast } from '../Controls/toast.jsx';

export const CollectionPage = () => {
    const [
        selectedItems,
        setSelectedItems,
    ] = useState([]);
    const [
        rows,
        setRows,
    ] = useState([]);
    const [
        successToastOpen,
        setSuccessToastOpen,
    ] = useState(false);
    const [
        failureToastOpen,
        setFailureToastOpen,
    ] = useState(false);

    useEffect(
        () => {
            (async () => {
                setRows([]);
                const { data } = await axios.get('/movie/read/all');
                setRows(constructRows(data));
            })();
        },
        [],
    );

    const handleSelectionModelChange = (items) => setSelectedItems(items);

    const handleDelete = async () => {
        // commented to show error toast
        // would uncomment to prevent error case

        // if (selectedItems.length === 0) {
        //     return;
        // }

        try {
            await axios({
                url: '/movie/delete',
                method: 'delete',
                data: { selectedItems },
            });
            const { data } = await axios.get('/movie/read/all');
            setRows(constructRows(data));
            setSuccessToastOpen(true);
        } catch (e) {
            setFailureToastOpen(true);
        }
    };
    const handleCellCommit = async ({
        id,
        value,
    }) => {
        await axios.put(
            '/movie/updateComment',
            {
                title: id,
                comment: value,
            },
        );
    };

    return (
        <div
            style={{
                paddingTop: '20px',
                margin: 'auto',
                height: '90%',
                width: '90%',
            }}
        >
            <div
                style={{
                    height: '370px',
                    width: '100%',
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columnsConfig}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    checkboxSelection
                    onCellEditCommit={handleCellCommit}
                    onSelectionModelChange={handleSelectionModelChange}
                />
            </div>
            <Button
                variant="contained"
                startIcon={<DeleteIcon />}
                color="primary"
                onClick={handleDelete}
            >
                Delete

            </Button>
            <Toast
                message="Movies deleted successfully"
                severity="success"
                open={successToastOpen}
                setOpen={setSuccessToastOpen}
            />
            <Toast
                message="Movies not deleted"
                severity="error"
                open={failureToastOpen}
                setOpen={setFailureToastOpen}
            />
        </div>
    );
};
