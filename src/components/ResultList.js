import React from "react";

function ResultList(props) {
    return (

        <tbody>
            {
                props.results.map(result => (
                    <tr>
                        <th scope="row" key={result.id}>{result.id}</th>
                        <td><img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} /></td>
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.email}</td>
                    </tr>
                ))
            }
        </tbody>

    );
}

export default ResultList;



