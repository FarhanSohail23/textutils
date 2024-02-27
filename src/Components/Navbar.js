import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>

          <div className={`"btn-group" role="group" aria-label="Basic mixed styles example"`}>
            <button onClick={() => props.handleColorChange('red')} type="button" className="btn btn-outline-danger btn-lg">danger</button>
            <button onClick={() => props.handleColorChange('green')} type="button" className="btn btn-outline-success btn-lg">success</button>
            <button onClick={() => props.handleColorChange('yellow')} type="button" className="btn btn-outline-warning btn-lg">warning</button>
          </div>
          
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  handleColorChange: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About text here'
};

export default Navbar;




// import React from 'react';
// import PropTypes from 'prop-types';

// function Navbar({ title, aboutText, mode, toggleMode, handleColorChange }) {
//   return (
//     <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">{title}</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="/">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/">{aboutText}</a>
//             </li>
//           </ul>
//           <div className="btn-group" role="group" aria-label="Basic mixed styles example">
//             <button onClick={() => handleColorChange('red')} type="button" className="btn btn-outline-danger btn-lg">danger</button>
//             <button onClick={() => handleColorChange('green')} type="button" className="btn btn-outline-success btn-lg">success</button>
//             <button onClick={() => handleColorChange('yellow')} type="button" className="btn btn-outline-warning btn-lg">warning</button>
//           </div>
//           <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
//             <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string,
//   mode: PropTypes.string.isRequired,
//   toggleMode: PropTypes.func.isRequired,
//   handleColorChange: PropTypes.func.isRequired
// };

// Navbar.defaultProps = {
//   title: 'Set title here',
//   aboutText: 'About text here'
// };

// export default Navbar;
