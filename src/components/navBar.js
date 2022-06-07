import React from 'react';

export const NavigationBar = (props) => {
  const {cUSDBalance} = props
  return <div>



    <nav className="navbar"> 
    <h1 className="brand-name">Quotes Dapp</h1>
    <nav>
            <span> <li><a className="balance"><span>{cUSDBalance}</span>cUSD</a></li>
            </span>
            </nav>
         
    </nav>
  </div>;
};
