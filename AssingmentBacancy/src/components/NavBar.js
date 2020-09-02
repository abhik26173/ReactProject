import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/reducers/userReducer";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

export const NavBar = () => {
  const { loggedInUser: user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

  const handleCart = () => {
    history.push("/cart");
  };

  const handleAllProducts = () => {
    history.push("/product-list");
  };

  return (
    <div className="container mt-2 bg-primary pt-2">
      <div className="row">
        <div className="col-8 float-left">
          <h3 className="text-light">Welcome {user && user.name}</h3>
        </div>

        <div className="col-4 float-right clearfix nav-btn">
          <button
            className="mx-1 btn btn-outline-light"
            onClick={handleAllProducts}
          >
            All Products
          </button>
          <button className="btn btn-outline-light mx-2" onClick={handleCart}>
            Cart
          </button>
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <hr />
    </div>
  );
};
