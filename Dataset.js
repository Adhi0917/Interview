import { useEffect } from 'react';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import React from "react";

export default function Dataset(){
    const [data, setData] = useState([]);
    const [columnsDef, setColumnsDef] = useState([]);


    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data=> {
            setData(data);

            setColumnsDef(Object.keys(data[0].map(key =>({
                headerName: key, field : key
            }))));
        });
    },[]);

    return(
        <div className="ag-theme-alpine" style={{height: '500px', width: '600px'}}>
            <AgGridReact columnDefs={columnsDef} rowData={data} />
        </div>
    );
}
