import React from 'react'


export const TableHead = () => {
    let styleHead = {
        padding: "0",
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "10px",
        fontSize: "15px"
    }

    return (
        <thead>
            <tr>
                <th style={styleHead}>ID</th>
                <th style={styleHead}>Nombre </th>
                <th style={styleHead}>Email</th>
                <th style={styleHead}>Ingreso</th>
                <th style={styleHead}>Entrega</th>
                <th style={styleHead}>Telefono</th>
                <th style={{
                    padding: "0",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    fontSize: "15px"
                }}>Equipo</th>
                <th style={{
                    padding: "0",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    fontSize: "15px"
                }}>Problema</th>
                <th style={{
                    padding: "0",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                    fontSize: "15px"
                }}>Estado</th>
            </tr>
        </thead>
    )


}