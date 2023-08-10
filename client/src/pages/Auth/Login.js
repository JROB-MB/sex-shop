import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
import Layout from "./../../components/Layout/Layout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("/api/v1/auth/login", {
      email,
      password,
    });
    if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      setAuth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate(location.state || "/");
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
};

  return (
/*     <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    > */
    
    <form onSubmit={handleSubmit} >
      <div
        style={{width: "100%", height: "100%",position: "absolute", background: "#073551",
        }}
      > <img style={{width: "60%", height: "100%", left: "0px", position: "full",}} src="images/starbackground.png" alt="Placeholder Image"/>


        <div style={{height: "633.46px",left: "937px",top: "95px", position: "absolute"}}
        >
          <div style={{width: "431px",height: "498px",left: "0px", top: "0px",position: "absolute"}}>
            
            
            <div
              style={{width: "308px", height: "121px", left: "2px", top: "0px", position: "absolute"}}
            >
              <div
                style={{
                  left: "0px",
                  top: "0px",
                  position: "absolute",
                  color: "white",
                  fontSize: "40px",
                  fontFamily: "roboto",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Iniciar Sesión
              </div>
              <div
                style={{
                  width: "308px",
                  height: "54px",
                  left: "0px",
                  top: "67px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: "308px",
                    left: "0px",
                    top: "0px",
                    position: "absolute",
                    color: "white",
                    fontSize: "19px",
                    fontFamily: "roboto",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  Si no tienes una cuenta registrada...
                </div>
                <div
                  style={{
                    width: "308px",
                    left: "0px",
                    top: "30px",
                    position: "absolute",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "19px",
                      fontFamily: "roboto",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    ...puedes{" "}
                  </span>
                  <span
                    style={{
                      color: "#C10C99",
                      fontSize: "19px",
                      fontFamily: "roboto",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/register"); // Redirect to registration page
                    }}
                  >
                    registrarte aqui
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "431px",
                height: "325px",
                left: "0px",
                top: "173px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  width: "431px",
                  height: "177px",
                  left: "0px",
                  top: "0px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: "429px",
                    height: "64px",
                    left: "2px",
                    top: "0px",
                    position: "absolute",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    display: "inline-flex",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "22px",
                      fontFamily: "roboto",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Email
                  </div>
                  <input
                    type="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Ingresa tu correo electronico"
                    style={{
                      color: "white",
                      fontSize: "21px",
                      fontFamily: "roboto",
                      fontWeight: "400",
                      wordWrap: "break-word",
                      width: "100%",
                      border: "none",
                      background: "transparent",
                      outline: "none",
                      position: "absolute",
                      top: "22px",
                      left: "0px",
                    }}
                    required
                  />
                  <div
                    style={{
                      width: "17px",
                      height: "17px",
                      paddingTop: "2.68px",
                      paddingBottom: "2.68px",
                      transform: "rotate(180deg)",
                      transformOrigin: "0 0",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                  </div>
                  <div
                    style={{
                      width: "429px",
                      height: "2px",
                      background: "white",
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    width: "431px",
                    height: "64px",
                    left: "0px",
                    top: "113px",
                    position: "absolute",
                  }}
                >
                  <div
                    style={{
                      left: "2px",
                      top: "0px",
                      position: "absolute",
                      color: "white",
                      fontSize: "22px",
                      fontFamily: "roboto",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    Contraseña
                  </div>
                  <div
                    style={{
                      width: "429px",
                      height: "2px",
                      left: "2px",
                      top: "62px",
                      position: "absolute",
                      background: "white",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "187px",
                      height: "24px",
                      left: "0px",
                      top: "31px",
                      position: "absolute",
                    }}
                  >
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Ingresa tu contraseña"
                      style={{
                        color: "white",
                        fontSize: "21px",
                        fontFamily: "roboto",
                        fontWeight: "400",
                        wordWrap: "break-word",
                        width: "100%",
                        border: "none",
                        background: "transparent",
                        outline: "none",
                        position: "absolute",
                        top: "1px",
                        left: "2px",
                      }}
                      required
                    />
                    <div
                      style={{
                        width: "17px",
                        height: "17px",
                        left: "0px",
                        top: "2px",
                        position: "absolute",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        display: "inline-flex",
                      }}
                    >
                    </div>
                  </div>
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      paddingBottom: "0.96px",
                      left: "417px",
                      position: "absolute",
                      justifyContent: "center",
                      alignItems: "center",
                      display: "inline-flex",
                    }}
                  >
                  </div>
                </div>
              </div>
              <div
                style={{
                  width: "429px",
                  height: "18px",
                  left: "2px",
                  top: "194px",
                  position: "absolute",
                }}
              >
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    left: "0px",
                    top: "3px",
                    position: "absolute",
                    background: "white",
                    border: "0.50px white solid",
                  }}
                ></div>
                <div
                  style={{ left: "18px", top: "-5px",  position: "absolute", color: "white", fontSize: "22px", fontFamily: "roboto", fontWeight: "300", wordWrap: "break-word",
                  }}
                >
                  ¡Recuerdame!
                </div>
                <div
                  style={{ left: "220px", position: "absolute", color: "white", fontSize: "19px", fontFamily: "roboto", fontWeight: "300", wordWrap: "break-word", cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/forgot-password"); // Redirect to forgot password page
                  }}
                >
                  ¿ Olvidaste tu contraseña ?
                </div>
              </div>
              <button
                type="submit" 
                className="btn btn-primary"
                style={{
                  width: "429px",
                  height: "53px",
                  left: "2px",
                  top: "272px",
                  position: "absolute",
                  background: "#C10C99",
                  boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.25)",
                  borderRadius: "32px",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                <text style={{ left: "160px", top: "12px", position: "absolute", color: "white", fontSize: "20px", fontFamily: "roboto", fontWeight: "500", wordWrap: "break-word",}}>
                  Iniciar Sesión
                </text>
              </button>
            </div>
          </div>
          <img
            style={{
              width: "226px",
              height: "226px",
              left: "-600px",
              top: "220px",
              position: "absolute",
            }}
            src="/images/biglogo.png"
            alt="Another Placeholder Image"
          />
          <div
            style={{
              left: "-730px",
              top: "85px",
              position: "absolute",
              color: "white",
              fontSize: "80px",
              fontFamily: "Montserrat",
              fontWeight: "700",
              wordWrap: "break-word",
            }}
          >
            Sexty Shopers
          </div>
        </div>
      </div>
      </form>
/*     </div>

 */  );
};

export default Login;
