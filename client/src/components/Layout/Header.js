import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";

const Header = () => {  
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const handleLogout = () => { 
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <div className="d-flex align-items-center justify-content-center">
      {/* <img src="images/bitmap.png" style={{ width: "2%" }}/> */}
        <Link to="/" className="navbar-brand">
          Sex Shop
        </Link>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to={"/categories"} data-bs-toggle="dropdown">
              Categorias
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to={"/categories"}>
                  Todas las Categorias
                </Link>
              </li>
              {categories?.map((c) => (
                <li key={c.slug}>
                  <Link className="dropdown-item" to={`/category/${c.slug}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ml-2">
        <SearchInput />
        {!auth.user ? (
          <>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" href="#">
                Registro
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" href="#">
                Iniciar sesión
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                style={{ border: "none" }}
                aria-expanded="false"
              >
                <img src="/images/usericon.png" style={{ width: "45%" }} />
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                    className="dropdown-item"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink onClick={handleLogout} to="/login" className="dropdown-item">
                    Cerrar sesión
                  </NavLink>
                </li>
              </ul>
            </li>
          </>
        )}
        <li className="nav-item ml-auto pr-3">
          <NavLink to="/cart" className="nav-link">
            <Badge count={cart?.length} showZero offset={[10, -5]}>
              🛒
            </Badge>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};

export default Header;
