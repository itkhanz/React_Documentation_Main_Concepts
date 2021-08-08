// // ComponentsHeirarchy
// FilterableProductTable: contains the entirety of the example
//     SearchBar: receives all user input
//     ProductTable: displays and filters the data collection based on user input
//         ProductCategoryRow: displays a heading for each category
//         ProductRow: displays a row for each product

import React from 'react';
import ProductTable from './productTable';
import SearchBar from './searchBar';    
  
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          filterText: '',
          inStockOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }
      
    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }
    

    render() {
        return (
        <div>
            <div className="sectionDesc">
                    <h3>Thinking in React</h3>
                    <ol>
                        <li>Start With A Mock</li>
                        <li>Break The UI Into A Component Hierarchy</li>
                        <li>Build A Static Version in React</li>
                        <li>Identify The Minimal (but complete) Representation Of UI State</li>
                        <li>Identify Where Your State Should Live</li>
                        <li>Add Inverse Data Flow</li>
                    </ol>
            </div>

            <SearchBar filterText={this.state.filterText}
                       inStockOnly={this.state.inStockOnly}
                       onFilterTextChange={this.handleFilterTextChange}
                       onInStockChange={this.handleInStockChange} />
            <ProductTable products={this.props.products}
                          filterText={this.state.filterText}
                          inStockOnly={this.state.inStockOnly} />
            <hr></hr>
        </div>
        );
    }
}

export default FilterableProductTable;
  
  

  