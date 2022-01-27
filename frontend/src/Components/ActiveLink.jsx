import React from "react";
import { Link, useRoute } from "wouter";

function ActiveLink(props) {
  const [isActive] = useRoute(props.href);
  return (
    <Link {...props}>
      <a className={isActive ? "active nav-link tab-link" : "nav-link tab-link"}>{props.children}</a>
    </Link>
  );
}

export default ActiveLink;
