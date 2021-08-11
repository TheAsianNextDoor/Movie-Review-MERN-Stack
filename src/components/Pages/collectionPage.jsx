import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import DeleteIcon from '@material-ui/icons/Delete.js';
import {
    useEffect,
    useState,
} from 'react';

import {
    deleteRequestAndVerifyOk,
    getRequestAndReturnData,
    putRequestAndVerifyOk,
} from '../../utils/apiRequestUtils.js';
import {
    columnsConfig,
    constructRows,
} from '../../utils/tableUtils.js';
import { useToast } from '../Controls/toastProvider.jsx';

export const CollectionPage = () => {
    const [
        selectedItems,
        setSelectedItems,
    ] = useState([]);
    const [
        rows,
        setRows,
    ] = useState([]);

    const {
        updateSuccessToast,
        updateFailureToast,
    } = useToast();

    useEffect(
        () => {
            (async () => {
                setRows([]);
                const data = await getRequestAndReturnData('/movie/read/all');
                setRows(constructRows(data));
            })();
        },
        [],
    );

    const handleSelectionModelChange = (items) => setSelectedItems(items);

    const handleDelete = async () => {
        // only commented to show error toast
        // would uncomment to prevent error case
        // if (selectedItems.length === 0) {
        //     return;
        // }

        try {
            await deleteRequestAndVerifyOk(
                '/movie/delete',
                { data: { selectedItems } },
            );
            const data = await getRequestAndReturnData('/movie/read/all');
            setRows(constructRows(data));
            updateSuccessToast('Movie(s) deleted successfully');
        } catch (e) {
            updateFailureToast('Movie(s) delete failure');
        }
    };

    const handleCellCommit = async ({
        id,
        value,
    }) => {
        try {
            await putRequestAndVerifyOk(
                '/movie/updateComment',
                {
                    title: id,
                    comment: value,
                },
            );
            updateSuccessToast('Comment added successfully');
        } catch (e) {
            updateFailureToast('Comment failure');
        }
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
        </div>
    );
};
