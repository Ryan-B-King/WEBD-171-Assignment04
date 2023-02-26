// src/components/Header.js

import React from 'react';
import Title from './components/Title.js';
import Description from './components/Description.js';

// importing logo from src folder - loaded as a file in the bundle
import logoFileFromSRC from '../logo.svg';

// Logo served from the public folder (Production only)
// const logoPublicUrl = '/logo512.png';



// We don't need to specify the `props` argument as we are not using them in this component
function Header () {
  return (
      <header className="App-header">
        <img src={logoFileFromSRC} className="App-logo" alt="logo" />
        
      {/*       
          Use the <Title /> and <Description /> components
          and pass them the data via `props` or `props.children`.
      */}
      
      {/*      Your code here ...      */}

        
      </header>
  );
}

// export the component
export default Header;