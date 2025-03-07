// import React, { useState } from "react";

// const TaxApp = () => {
//   // Sample product list
//   const products = [
//     { id: 1, name: "Product 1", price: 100 },
//     { id: 2, name: "Product 2", price: 200 },
//     { id: 3, name: "Product 3", price: 300 },
//   ];

//   // Tax rates options
//   const taxOptions = [
//     { label: "5%", value: 0.05 },
//     { label: "10%", value: 0.10 },
//     { label: "15%", value: 0.15 },
//   ];

//   // State to manage selected products and selected tax rate
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectedTax, setSelectedTax] = useState(null);

//   // Handle checkbox change
//   const handleCheckboxChange = (productId) => {
//     setSelectedProducts((prevSelectedProducts) => {
//       if (prevSelectedProducts.includes(productId)) {
//         return prevSelectedProducts.filter((id) => id !== productId);
//       } else {
//         return [...prevSelectedProducts, productId];
//       }
//     });
//   };

//   // Handle tax selection
//   const handleTaxChange = (event) => {
//     setSelectedTax(parseFloat(event.target.value));
//   };

//   // Calculate total tax for selected products
//   const calculateTax = () => {
//     if (selectedTax !== null && selectedProducts.length > 0) {
//       const selectedProductDetails = products.filter((product) =>
//         selectedProducts.includes(product.id)
//       );
//       const totalPrice = selectedProductDetails.reduce(
//         (sum, product) => sum + product.price,
//         0
//       );
//       return totalPrice * selectedTax;
//     }
//     return 0;
//   };

//   // Calculate total price including tax
//   const calculateTotalPrice = () => {
//     if (selectedTax !== null && selectedProducts.length > 0) {
//       const selectedProductDetails = products.filter((product) =>
//         selectedProducts.includes(product.id)
//       );
//       const totalPrice = selectedProductDetails.reduce(
//         (sum, product) => sum + product.price,
//         0
//       );
//       const taxAmount = totalPrice * selectedTax;
//       return totalPrice + taxAmount;
//     }
//     return 0;
//   };

//   return (
//     <div>
//       <h1>Tax Application Example</h1>

//       {/* Product list with checkboxes */}
//       <div>
//         <h3>Select Products</h3>
//         {products.map((product) => (
//           <div key={product.id}>
//             <input
//               type="checkbox"
//               id={`product-${product.id}`}
//               checked={selectedProducts.includes(product.id)}
//               onChange={() => handleCheckboxChange(product.id)}
//             />
//             <label htmlFor={`product-${product.id}`}>{product.name}</label> - ${product.price}
//           </div>
//         ))}
//       </div>

//       {/* Tax dropdown */}
//       <div>
//         <h3>Select Tax Rate</h3>
//         <select onChange={handleTaxChange} value={selectedTax || ""}>
//           <option value="">Select Tax</option>
//           {taxOptions.map((option) => (
//             <option key={option.value} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Displaying the tax and total */}
//       <div>
//         {selectedProducts.length > 0 && selectedTax !== null && (
//           <div>
//             <h3>Tax and Total Calculation</h3>
//             <p>Tax Applied: ${calculateTax().toFixed(2)}</p>
//             <p>Total Price (Including Tax): ${calculateTotalPrice().toFixed(2)}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TaxApp;
import React, { useState } from 'react';

const TexApp = () => {
  // List of products
  const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ];

  // Tax options
  const taxOptions = [
    { label: '5%', value: 0.05 },
    { label: '10%', value: 0.10 },
    { label: '15%', value: 0.15 }
  ];

  // State for selected products and tax rate
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedTax, setSelectedTax] = useState(null);

  // Handle checkbox change
  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelectedProducts) => {
      if (prevSelectedProducts.includes(productId)) {
        // If the product is already selected, remove it
        return prevSelectedProducts.filter((id) => id !== productId);
      } else {
        // If the product is not selected, add it
        return [...prevSelectedProducts, productId];
      }
    });
  };



  

  // Calculate tax
  const calculateTax = () => {
    if (selectedTax !== null && selectedProducts.length > 0) {
      const selectedProductDetails = products.filter((product) =>
        selectedProducts.includes(product.id)
      );
      const totalPrice = selectedProductDetails.reduce(
        (sum, product) => sum + product.price,
        0
      );
      return totalPrice * selectedTax;
    }
    return 0;
  };

  // Calculate total price (including tax)
  const calculateTotalPrice = () => {
    if (selectedTax !== null && selectedProducts.length > 0) {
      const selectedProductDetails = products.filter((product) =>
        selectedProducts.includes(product.id)
      );
      const totalPrice = selectedProductDetails.reduce(
        (sum, product) => sum + product.price,
        0
      );
      const taxAmount = totalPrice * selectedTax;
      return totalPrice + taxAmount;
    }
    return 0;
  };

  return (
    <div>
      <h1>Tax Application Example</h1>

      {/* Product Selection */}
      <div>
        <h2>Select Products</h2>
        {products.map((product) => (
          <div key={product.id}>
            <input
              type="checkbox"
              id={`product-${product.id}`}
              checked={selectedProducts.includes(product.id)}
              onChange={() => handleCheckboxChange(product.id)}
            />
            <label htmlFor={`product-${product.id}`}>
              {product.name} - ${product.price}
            </label>
          </div>
        ))}
      </div>
      
      {/* Tax Selection */}
      <div>
        <h2>Select Tax Rate</h2>
        <select
          onChange={(e) => setSelectedTax(parseFloat(e.target.value))}
          value={selectedTax || ""}
        >
          <option value="">Select Tax</option>
          {taxOptions.map((tax) => (
            <option key={tax.value} value={tax.value}>
              {tax.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tax and Total Calculation */}
      <div>
        {selectedProducts.length > 0 && selectedTax !== null && (
          <div>
            <h2>Tax and Total Calculation</h2>
            <p>Tax Applied: ${calculateTax().toFixed(2)}</p>
            <p>Total Price (Including Tax): ${calculateTotalPrice().toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TexApp;
