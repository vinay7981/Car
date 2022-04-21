// import React ,{Fragment,useState}from "react";

// import MenuItem from "../components/MenuItem";
// import "../styles/Menu.css";

// function Menu() {
//   const [search, setSearch] = useState('')
//   const [data, setData] = useState([]);
//   const [isEntering, setIsEntering] = useState(false)

//   const YOUR_APP_ID = "ff557779";
//   const YOUR_APP_KEY ="0b7d25c7da5bab9ef4a4c6ccc0b4babf";

//   const submitHandler =e=>{
    
//     e.preventDefault();
//     fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=7&calories=591-722&health=alcohol-free`).then(
//       response=>response.json()
//     ).then(data=>setData(data.hits)
//     );
    
    
//   }

//   let formIsValid = false;
//     if(search.length > 0) {
//       formIsValid = true;
//     }
//   const formFocusedHandler = () =>{
//     setIsEntering(true);
//   }

//   const finishHandler=()=>{
//       setIsEntering(false);
//   }
//   return (
//     <Fragment>
//     <div className="menu">
//       <h1 className="menuTitle">Our Menu</h1>
//       <form  onFocus={formFocusedHandler} onSubmit={submitHandler}>
//         <input type='text'   value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={search} />
//         <button   disabled={!formIsValid} onClick = {finishHandler} type='submit' className="btn btn-primary " value='Search' >submit</button>
//       </form>
//       <div className="menuList">
      
         
//             <MenuItem
//               // key={key}
//               // image={menuItem.image}
//               // name={menuItem.name}
//               // price={menuItem.price}

//               data={data}
//             />
          
      
//       </div>
//     </div>
//     </Fragment>
//   );
// }

// export default Menu;
