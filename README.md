# Learn React


*Learn concepts step by step*, start with our [guide to main concepts](https://reactjs.org/docs/getting-started.html#learn-react).

## 12. Thinking in React


One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.

### Start With A Mock

Imagine that we already have a JSON API and a mock from our designer. The mock looks like this:  

![Products data preview](https://reactjs.org/static/1071fbcc9eed01fddc115b41e193ec11/d4770/thinking-in-react-mock.png "Mock data")

Our JSON API returns some data that looks like this:
```
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```
## Step 1: Break The UI Into A Component Hierarchy


* The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names.
  
* But how do you know what should be its own component? Use the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

*  Separate your UI into components, where each component matches one piece of your data model.

   ![Component structure](https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png "components classsification")

    You’ll see here that we have five components in our app. We’ve italicized the data each component represents.  
    1.  FilterableProductTable (orange): contains the entirety of the example  
    2.  SearchBar (blue): receives all user input  
    3.  ProductTable (green): displays and filters the data collection based on user 4. input  
    5.  ProductCategoryRow (turquoise): displays a heading for each category  
    6.  ProductRow (red): displays a row for each product  


* Now that we’ve identified the components in our mock, let’s arrange them into a hierarchy. Components that appear within another component in the mock should appear as a child in the hierarchy:
  * FilterableProductTable
    * SearchBar
    * ProductTable
      * ProductCategoryRow
      * ProductRow

---

## Step 2: Build A Static Version in React

The easiest way is to build a version that takes your data model and renders the UI but has no interactivity.

To build a static version of your app that renders your data model, you’ll want to build components that reuse other components and pass data using props. props are a way of passing data from parent to child. If you’re familiar with the concept of state, don’t use state at all to build this static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.

You can build top-down or bottom-up. That is, you can either start with building the components higher up in the hierarchy (i.e. starting with ```FilterableProductTable```) or with the ones lower in it (```ProductRow```). In simpler examples, it’s usually easier to go top-down, and on larger projects, it’s easier to go bottom-up and write tests as you build.

At the end of this step, you’ll have a library of reusable components that render your data model. The components will only have render() methods since this is a static version of your app. The component at the top of the hierarchy (FilterableProductTable) will take your data model as a prop. If you make a change to your underlying data model and call ReactDOM.render() again, the UI will be updated.

* FilterableProductTable
```javascript
import ProductTable from './productTable';
import SearchBar from './searchBar';    
  
class FilterableProductTable extends React.Component {
    render() {
        return (
        <div>
            <SearchBar />
            <ProductTable products={this.props.products} />
        </div>
        );
    }
}
```

* FilterableProductTable
```javascript
import ProductTable from './productTable';
import SearchBar from './searchBar';    
  
class FilterableProductTable extends React.Component {
    render() {
        return (
        <div>
            <SearchBar />
            <ProductTable products={this.props.products} />
        </div>
        );
    }
}
```

* SearchBar
```javascript
export default class SearchBar extends React.Component {
    render() {
      return (
        <form>
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
}
```

* ProductTable
```javascript
import ProductRow from './productRow';  

export default class ProductTable extends React.Component {
    render() {
      const rows = [];
      let lastCategory = null;
      
      this.props.products.forEach((product) => {
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name} />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
}
```

* ProductCategoryRow
```javascript
export default class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
}
```

* ProductRow
```javascript
export default class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
}
```

## Step 3: Identify The Minimal (but complete) Representation Of UI State

To make your UI interactive, you need to be able to trigger changes to your underlying data model. React achieves this with ```state```.

To build your app correctly, you first need to think of the minimal set of mFigure out the absolute minimal representation of the state your application needs and compute everything else you need on-demand.

Think of all the pieces of data in our example application. We have:
* The original list of products
* The search text the user has entered
* The value of the checkbox
* The filtered list of products

Let’s go through each one and figure out which one is state. Ask three questions about each piece of data:  
* Is it passed in from a parent via props? If so, it probably isn’t state.
* Does it remain unchanged over time? If so, it probably isn’t state.
* Can you compute it based on any other state or props in your component? If so, it isn’t state.

> The original list of products is passed in as props, so that’s not state. The search text and the checkbox seem to be state since they change over time and can’t be computed from anything. And finally, the filtered list of products isn’t state because it can be computed by combining the original list of products with the search text and value of the checkbox.

So finally, our state is:
* The search text the user has entered
* The value of the checkbox
---

##  Step 4: Identify Where Your State Should Live
OK, so we’ve identified what the minimal set of app state is. Next, we need to identify which component mutates, or owns, this state.

Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. **This is often the most challenging part for newcomers to understand**, so follow these steps to figure it out:

For each piece of state in your application:

* Identify every component that renders something based on that state.  
* Find a common owner component (a single component above all the components that need the state in the hierarchy).  
* Either the common owner or another component higher up in the hierarchy should own the state.  
* If you can’t find a component where it makes sense to own the state, create a new component solely for holding the state and add it somewhere in the hierarchy above the common owner component.

Let’s run through this strategy for our application:

* ```ProductTable``` needs to filter the product list based on state and ```SearchBar``` needs to display the search text and checked state.  
* The common owner component is ```FilterableProductTable```.  
* It conceptually makes sense for the filter text and checked value to live in ```FilterableProductTable```.

Cool, so we’ve decided that our state lives in ```FilterableProductTable```. First, add an instance property ```this.state = {filterText: '', inStockOnly: false}``` to ```FilterableProductTable```’s ```constructor``` to reflect the initial state of your application. Then, pass ```filterText``` and ```inStockOnly``` to ```ProductTable``` and ```SearchBar``` as a prop. Finally, use these props to filter the rows in ProductTable and set the values of the form fields in ```SearchBar```.```

You can start seeing how your application will behave: set ```filterText``` to ```"ball"``` and refresh your app. You’ll see that the data table is updated correctly.

---

##  Step 5: Add Inverse Data Flow

So far, we’ve built an app that renders correctly as a function of props and state flowing down the hierarchy. Now it’s time to support data flowing the other way: the form components deep in the hierarchy need to update the state in ```FilterableProductTable```.

If you try to type or check the box in the current version of the example, you’ll see that React ignores your input. This is intentional, as we’ve set the ```value``` prop of the ```input``` to always be equal to the ```state``` passed in from ```FilterableProductTable.```

Let’s think about what we want to happen. We want to make sure that whenever the user changes the form, we update the state to reflect the user input. Since components should only update their own state, ```FilterableProductTable``` will pass callbacks to ```SearchBar``` that will fire whenever the state should be updated. We can use the onChange event on the inputs to be notified of it. The callbacks passed by ```FilterableProductTable``` will call ```setState()```, and the app will be updated.

---