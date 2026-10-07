// function Cart({ cart }) {

//   return (
//     <section className="max-w-7xl mx-auto px-5 pb-10">

//       <div className="bg-white rounded-xl shadow-md p-6">

//         <h2 className="text-2xl font-bold mb-4">
//           Cart
//         </h2>

//         {cart.length === 0 ? (

//           <p className="text-gray-500">
//             Your cart is empty
//           </p>

//         ) : (

//           <>
//             <div className="space-y-2">

//               {cart.map((product, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between border-b py-2"
//                 >
//                   <span>{product.name}</span>

//                   <span className="font-semibold">
//                     ₹{product.price}
//                   </span>
//                 </div>
//               ))}

//             </div>

//             <div className="flex justify-between mt-5 text-xl font-bold">
//               <span>Total</span>

//               <span>
//                 ₹{total}
//               </span>
//             </div>
//           </>

//         )}

//       </div>

//     </section>
//   );
// }

// export default Cart;