import React from 'react';

const ProductCategoryRow = ({category}) => {
  return (
      <tr colspan='2'>
        <td>{category}</td>
      </tr>
  )
}

export default ProductCategoryRow;