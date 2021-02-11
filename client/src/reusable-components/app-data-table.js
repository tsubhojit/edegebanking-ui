import React, { PureComponent } from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {
    rows: {
        style: {
            minHeight: '40px', // override the row height
        }
    },
    headCells: {
        style: {
            minHeight: '40px',
            backgroundColor: '#dcdcdc',

        },
    },
    cells: {
        style: {
            minHeight: '40px',
            cursor: 'pointer'
        },
    },
};

const data = [
    { id: 1, title: 'Conan the Barbarian 1', year: '1982' }, 
    { id: 2, title: 'Conan the Barbarian 2', year: '1900' }, 
    { id: 3, title: 'Conan the Barbarian 3', year: '1977' }
];
const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
  },
  {
    name: 'Year',
    selector: 'year',
    sortable: true,
    right: true,
  },
];

class AppDataTable extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
    }

    selectRow = (event) => {
        // this.props.onSelectTBRow(event);
    }

    render() {
        return (
            <DataTable
                title={`Product`}
                columns={columns}
                data={data}
                customStyles={customStyles}
                onRowClicked={(event) => this.selectRow(event)}
            />
        );
    }
}

export default AppDataTable;