import React from "react";
// import { Link } from "react-router-dom";
function HeaderProps({ url, name }) {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" a={url}>
          {name}
        </a>
      </li>
    </>
  );
}

export default HeaderProps;
