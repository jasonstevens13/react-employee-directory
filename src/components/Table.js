import React, { Component } from "react";
import ResultList from "./ResultList";
// import Input from "./Input";
import API from "../utils/APImock.json";


class Table extends Component {

    state = {
        search: "",
        results: API
    };


    render() {

        return (

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <ResultList results={this.state.results} />
            </table>

        );
    }
}

export default Table;


