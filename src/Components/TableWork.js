import React from 'react';
import { Table } from 'reactstrap';
import { AddWorkToTable } from './AddWorkToTable.js';
//import { SpinLoader } from './SpinLoader.js';
//import { TableBody } from './TableBody.js'

import { TableHead } from './TableHead.js'

export const TableWork = ({ works=[], etapa }) => {
    return (
        <Table hover responsive >
            <TableHead />
            {/*<tbody className='tbody'>{works.map(datos => (<TableBody key={datos.id} props={datos} />))}</tbody> */}
            <AddWorkToTable state={etapa}/>
        </Table>
    );
}