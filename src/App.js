// // import logo from './logo.svg';
// import './App.css';
// // import About from './Components/About';
// import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
// // import About from './Components/About';
// import React, { useState } from 'react';
// import Alert from './Components/Alert';


// function App() {
// const [mode,setMode] = useState('light'); // Whether dark mode is enabled or not
// const [alert,setAlert] = useState('null');
//   const [bgColor, setBgColor] = useState('white');

  

// const showAlert = (message, type) => {
// setAlert({
// msg: message,
// type: type
// })
// setTimeout(() => {
// setAlert(null);
// }, 3000);
// }



// const toggleMode = () => {
// if (mode == 'light'){
// setMode ('dark');
// document.body.style.backgroundColor = '#042743';
// showAlert("Dark mode has been enabled", "success")
// }
// else{
// setMode ('light');
// document.body.style.backgroundColor = 'white';
// showAlert("Light mode has been enabled", "success")
// }

// const handleColorChange = (color) => {
//   let bgColor;
//   switch (color) {
//     case 'red':
//       bgColor = 'red';
//       break;
//     case 'green':
//       bgColor = 'green';
//       break;
//     case 'yellow':
//       bgColor = 'yellow';
//       break;
//     default:
//       bgColor = 'white';
//   }
//   document.body.style.backgroundColor = bgColor;
//   showAlert(`Background color changed to ${bgColor}`, "success");
// };

// // const handleColorChange = (color) => {
// //   console.log('Changing color to:', color);
// // };

// }
// return (
// <>
// {/* <Navbar title="TextUtils" aboutText="About" /> */}
// {/* <Navbar/> */}

// <Alert alert={alert}/> 

// <Navbar title = "TextUtils" mode={mode}  toggleMode={toggleMode} handleColorChange={handleColorChange} />
// <div className="Container my-3">
// <TextForm showAlert={showAlert}  heading= "Enter the text to analyze below" mode={mode}/>
// </div>

// {/* <About/> */}


// </>
// );
// }

// export default App;



// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import { Switch, Route } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState('null');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils -  Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode";
    }
  };

  const handleColorChange = (color) => {
    let bgColor;
    switch (color) {
      case 'red':
        bgColor = 'red';
        break;
      case 'green':
        bgColor = 'green';
        break;
      case 'yellow':
        bgColor = 'yellow';
        break;
      default:
        bgColor = 'white';
    }
    document.body.style.backgroundColor = bgColor;
    showAlert(`Background color changed to ${bgColor}`, "success");
  };

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      {/* <Navbar/> */}
      
      <Router>
      <Alert alert={alert} />
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} handleColorChange={handleColorChange} />
      <div className="Container my-3">
      
      <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
            
          
        </Routes>
        
      </div>
      </Router>
      
    </>
  );
}
 
export default App;