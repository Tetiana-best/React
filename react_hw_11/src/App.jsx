// import { useSelector } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import './App.css';
import router from "./router/router";



function App() {
	// const productsList = useSelector(state=>state.products.items)
  return (
	<>
		<RouterProvider router = {router}/>
	</>
  ) 
//   (
//     <>
//      {productsList.map((product)=>
// 		<div key={product.id}>
// 			{product.name} - {product.price} грн
// 		</div>
// 	)}
//     </>
//   )
}

export default App
