import { Table } from '../Controls/table.jsx';

export const CollectionPage = () => {
    console.log('Collection Page');

    return (
        <div
            style={{
                paddingTop: '20px',
                margin: 'auto',
                height: '90%',
                width: '90%',
            }}
        >
            <Table />
        </div>
    );
};
