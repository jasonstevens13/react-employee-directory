import React, { Component } from "react";
import ResultList from "./ResultList";
import Input from "./Input";
import API from "../utils/API";


class Table extends Component {

    state = {
        search: "",
        results: []
    };


    // When this component mounts, search the random people API for results of fake employees
    componentDidMount() {
        this.searchRandom("");
    }


    searchRandom = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };


    // handleInputChange = event => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     this.setState({
    //         [name]: value
    //     });
    // };


    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchGiphy(this.state.search);
    // };




    render() {
        return (

            <div>
                <Input
                // search={this.state.search}
                // handleFormSubmit={this.handleFormSubmit}
                // handleInputChange={this.handleInputChange}
                />
                <div>

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <ResultList
                            results={this.state.results}
                        />
                    </table>

                </div >

            </div>

        );
    }
}

export default Table;
