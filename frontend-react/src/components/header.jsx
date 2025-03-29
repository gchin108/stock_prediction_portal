import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav className="navbar container pt-3 pb-3 align-items-start">
        <Link className="navbar-brand text-light" to="/">
          Stock Prediction Portal
        </Link>
        <div>
          <Button text="Login" class="btn-outline-info" url="/login" />
          &nbsp;
          <Button class="btn btn-info" text="Register" url="/register" />
        </div>
      </nav>
      ;
    </>
  );
};
