import React from 'react';

export default function EmpTable(props) {

    return (

        <table className="table">
            <thead>
                <tr>
                    <th scope="col" >
                        <button onClick={() => props.sortBy("id")}>
                            ID
                    </button>
                    </th>
                    <th scope="col">Picture</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>

            <tbody>
                {props.data.map(row => (

                    <tr>
                        <th scope="row" key={row.id}>{row.id}</th>
                        <td><img alt={row.first} className="img-fluid" src={row.thumbnail} /></td>
                        <td>{row.first}</td>
                        <td>{row.last}</td>
                        <td>{row.email}</td>
                    </tr>

                ))}
            </tbody>

        </table>




    )









}