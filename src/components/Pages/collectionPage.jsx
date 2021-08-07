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

export const CollectionPage = () => {
    const [
        selectedItems,
        setSelectedItems,
    ] = useState([]);
    const [
        rows,
        setRows,
    ] = useState([]);

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

    const handleSelectionModelChange = (items) => {
        setSelectedItems(items);
    };

    const handleDelete = async () => {
        await axios.delete(`/movie/delete/${selectedItems[0]}`);
        const { data } = await axios.get('/movie/read/all');
        setRows(constructRows(data));
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
                    height: '100%',
                    width: '100%',
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columnsConfig}
                    pageSize={10}
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
