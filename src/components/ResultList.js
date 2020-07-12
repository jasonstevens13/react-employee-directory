import React from "react";

function ResultList(props) {

    console.log(props.results);


    return (


        <tr>
            <th scope="row" key={props.value}>{props.value}</th>
            <td><img alt={props.first} className="img-fluid" src={props.thumbnail} /></td>
            <td>{props.first}</td>
            <td>{props.last}</td>
            <td>{props.email}</td>
        </tr>


    );
}

export default ResultList;



