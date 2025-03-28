import React from "react";
import Button from "./Button";

export const Main = () => {
  return (
    <div className="container ">
      <div className="p-5 text-center bg-light-dark rounded">
        <h1 className="text-primary">Stock Prediction Portal</h1>
        <p className="text-light lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          distinctio rem quae rerum harum, voluptatum explicabo mollitia quidem
          nam. Repudiandae nihil atque voluptatibus reiciendis dolores fugiat,
          optio fuga sint repellat.
        </p>
        <Button text="login" class="btn-outline-info" />
      </div>
    </div>
  );
};
