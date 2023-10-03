import './App.css';
import FilterProductTable from './components/FilterProductTable';
import Form from './components/Form';
import Form2 from './components/Form2';
function App() {
  const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];
  return (
    <div className="App">
        <FilterProductTable products={PRODUCTS}/> 
   <Form/> 
       
      <Form2/>
         
    </div>
  );
}

export default App;
