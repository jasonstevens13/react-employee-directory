import React from "react";
// import API from "../utils/APImock.json";

function ResultList(props) {

    console.log(props.results);


    return (
        <tbody>
            {props.results.map(result => (

                <tr>
                    <th scope="row" key={result.value}>{result.value}</th>
                    <td><img alt={result.first} className="img-fluid" src={result.thumbnail} /></td>
                    <td>{result.first}</td>
                    <td>{result.last}</td>
                    <td>{result.email}</td>
                </tr>

            ))}
        </tbody>


    );
}

export default ResultList;
