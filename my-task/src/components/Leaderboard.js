import React, { useState } from 'react';
import './Leaderboard.css'
import Trelement from'./TrElement';
import Tdelement from './TdElement';
import InputForm from './InputForm'



const  Leaderboard = ({columns, header, ...props}) => {
    const [tableColumns, setTableColumns] = useState(columns)

    const handleDeleteCol = (id) => {
        setTableColumns(tableColumns.filter(column => column.id !== id))
    }
    const tableHeader = header.map((headerItem) => (<Tdelement info={headerItem} className={'table-header'}/>))
    const createTable = tableColumns.map((tableRow) => {
    const  { firstName, lastName, score, id } = tableRow;
        return (
            <Trelement key={id} onClick={()=> handleDeleteCol(id)}>
                <Tdelement info={`${firstName}, ${lastName}`} />
                <Tdelement info={score} />
                <Tdelement info={'DELETE'} className={'delete-button'} />
            </Trelement>
        );
    })
    return (
        <div className='wrapper'>
            <table>
                <thead>
                    <Trelement>
                        {tableHeader}
                    </Trelement>
                </thead>
                    <tbody>
                        {createTable}
                    </tbody>
            </table>
              <InputForm setTableColumns={setTableColumns} tableColumns={tableColumns}/>
        </div>
    )
}

export default Leaderboard;
