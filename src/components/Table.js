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
            <div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>
                            {this.state.results.map(result =>

                                <ResultList
                                    key={result.value}
                                    firstName={result.first}
                                    lastname={result.last}
                                    email={result.email}
                                    image={result.thumbnail}
                                />
                            )
                            }
                        </div>
                    </tbody>
                </table >
            </div>
        );
    }
}

export default Table;
