// import StaticPage from './StaticPage';
// // import './App.css';
// // import Profilepage from './Profilepage';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import AnotherPage from './AnotherPage';
// function App() {
//   // function handleclick(name){
//   //   alert(hello,${name});
//   // }
// //   function UserGreeting(props){
// //     return <h1>Welcome Back!</h1>
// // }
// // function GuestGreeeting(props){
// //     return <h1>Please Sign up</h1>
// // }
// function Greeting(props){
//     // const isloggedin=props.isloggedin;
//     // if(isloggedin){
//     //     return <UserGreeting/>
//     // }
    
//     // return <GuestGreeeting/>

//     return props.isloggedin ? <h1>Welcome Back !</h1> : <h1>Please Sign Up!</h1>
// }
//   return (
//     <div className='App '>
//     {/* <Router>
//       <Routes>
//     <Route path='/another-page' element={<AnotherPage/>}/>
//     <Route path='/' element={<StaticPage/>}/>
//     <Route path='/profile' element={<ProfilePage/>}/>
//     </Routes>
//     </Router> */}
//     {/* <button onClick={()=>{handleclick('Alice')}} className=''>Click Me</button>
//     <
// <label classNAme="relative inline-flex items-center cursor-pointer ">
//   <input className="sr-only peer" value="" type="checkbox"/>
//     <div className="peer rounded-full outline-none duration-100 after:duration-500 w-28 h-14 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['Yes'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['No'] peer-checked:after:border-white">
//   </div>
// </label>
   
// {/* <label className="switch">
//     <input type="checkbox" class="checkbox"/>
//     <div class="slider"></div>
// </label> */}
// {/* <Profilepage/> */}
// <Greeting isloggedin={false}/>

//     </div>
    
//   );
// }

// export default App;
import React from 'react';
import List from './List';
import Card from './Card';
import FileUpload from './FileUpload';

function App() {
  // const numbers = [6, 5, 10, 9, 2];
  return (
    <div className="App">
      {/* <List numbers={numbers} /> */}
      {/* <Card/> */}
      <FileUpload/>
    </div>
  );
}

export default App;