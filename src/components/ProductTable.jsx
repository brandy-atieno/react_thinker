import React from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';
const ProductTable = ({products}) => {
  const rows =[] ;
  let lastCategory= null;
  products.forEach((product)=>{
    if(product.category !== lastCategory){
      rows.push(
      <ProductCategoryRow 
      key={product.category}
      category={product.category}/>)
  }
  rows.push(
    <ProductRow key={product.name} product ={product}/>)
    lastCategory=product.category
})

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
                        <th>Price</th>

          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      
  
    </div>
  )
}

export default ProductTable;