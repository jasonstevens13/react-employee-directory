import React from "react";
import Jumbotron from "./components/Jumbotron";
// import TableContainer from "./components/TableContainer";

import EmpTable from "./components/Emp-Table";
import data from "./utils/APImock.json";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        id: 'asc'
      }
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





  render() {
    return (
      <>
        <Jumbotron />
        <div className="container">

          <EmpTable
            data={this.state.data}
            sortBy={this.sortBy}
          />


        </div>

      </>
    );

  }

}

export default App;
