import React from 'react';

  
const Header = (props) => (
      <div className="header">
        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h3>{props.subitle}</h3>}
      </div>
  )
  
  
  Header.defaultProps = {
    title: "Indecision"
  }

  
export default Header;