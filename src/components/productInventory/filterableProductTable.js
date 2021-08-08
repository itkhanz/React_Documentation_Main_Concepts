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
    }

    render() {
        return (
        <div>
            <SearchBar filterText={this.state.filterText}
                       inStockOnly={this.state.inStockOnly} />
            <ProductTable products={this.props.products}
                          filterText={this.state.filterText}
                          inStockOnly={this.state.inStockOnly} />
        </div>
        );
    }
}

export default FilterableProductTable;
  
  

  