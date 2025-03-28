import React from "react";
import Button from "./Button";

export const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <a className="navbar-brand text-light" href="/">
          Stock Prediction Portal
        </a>
        <div>
          <Button text="Login" class="btn-outline-info" url="/dashboard" />
          &nbsp;
          <Button class="btn btn-info" text="Register" />
        </div>
      </nav>
      ;
    </>
  );
};
