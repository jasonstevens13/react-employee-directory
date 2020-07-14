import React from "react";
import Jumbotron from "./components/Jumbotron";
import EmpTable from "./components/Emp-Table";
import Filter from "./components/Filter";
import data from "./utils/APImock.json";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        id: 'asc'
      },
      filter: ''
    }

    this.sortBy = this.sortBy.bind(this)


  }

  sortBy(key) {
    this.setState({
      data: data.sort((a, b) => (
        this.state.direction[key] === 'asc' ? parseFloat(a[key]) - parseFloat(b[key]) : parseFloat(b[key]) - parseFloat(a[key]))
      ),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }


  handleFilter = (e) => {
    this.setState({ filter: e.target.value.substr(0, 20) })
  }



  render() {


    return (
      <>
        <Jumbotron />
        <Filter
          handleFilter={this.handleFilter}
        />
        <div className="container">

          <EmpTable
            data={this.state.data}
            sortBy={this.sortBy}
            handleFilter={this.handleFilter}
          />


        </div>

      </>
    );

  }

}

export default App;
