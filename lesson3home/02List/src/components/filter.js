import React, { Component } from 'react';

export default class Filter extends Component {

   constructor() {
      super()
      this.state = {total: this.props.filterData.length}
    }

  handleFilter(e) {
      let dataFiltered = this.props.filterData.filter(item => item.first_name.toLowerCase().includes(e.target.value.toLowerCase()))
      this.props.onClickFunction(dataFiltered)
    }

  render() {
    const {filterData, onClickFunction} = this.props;

    

    return (
      <div className="filtercss">
       <p>Robots HUB</p> <input type="text" name="fname" onChange={this.handleFilter.bind(this)}/>
       <p>Total: {this.state.total}</p>
     </div>
    );
  }

}
