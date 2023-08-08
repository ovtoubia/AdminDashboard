import React from 'react'
import "./datatableServices.scss"

import { DataGrid } from '@mui/x-data-grid';
import { serviceColumns, serviceRows } from '../../datatableServicesSource';
import {Link} from 'react-router-dom'

const DatatableServices = () => {
    const actionColumn =[{field:"action", headerName:"Action",width:180, renderCell:() =>
    {
        return(
            <div className='cellAction'>
                <div className='viewButton'>Details</div>
                <div className='deleteButton'>Delete</div>
            </div>
        )

    }}];
  return (
    <div className='datatableServices'>
        <div className='datatableServicesTitle'>Services
        <Link style={{textDecoration:"none"}} className='link'>
            Add New
            </Link>
        </div>
         <DataGrid
        rows={serviceRows}
        columns={serviceColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DatatableServices