import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"SextyShopers "}>
      {/* banner image */}
      <div className="MaskGroup" style={{width: 1516, height: 318.40, position: 'relative'}}>
  <div className="Bitmap" style={{width: 1516, height: 318.40, left: 0, top: 0, position: 'absolute'}}>
    <div className="Mask" style={{width: 1516, height: 318.40, left: 0, top: 0, position: 'absolute', background: '#44AEE8'}} />
    <div className="Mask" style={{width: 1516, height: 318.40, left: 0, top: 0, position: 'absolute', background: '#44AEE8'}} />
  </div>
  <img className="ScandinavianInteriorMockupWallDecalBackground1" style={{width: 1516, height: 318.49, left: 0, top: 0, position: 'absolute'}} src="/images/backpenes.png"  />
  <div className="Group114" style={{width: 1271.02, height: 247.10, left: 137.91, top: 35.67, position: 'absolute'}}>
    <div className="Rectangle77" style={{width: 1245.44, height: 230.97, left: 0, top: 0, position: 'absolute', background: 'rgba(255, 242.72, 227.37, 0.65)', borderRadius: 10}} />
    <div className="Group88" style={{width: 1192.06, height: 214.77, left: 78.96, top: 32.33, position: 'absolute'}}>
      {/* <div className="DermatologySkinC" style={{width: 1082.74, height: 66.22, left: 0.46, top: 14.60, position: 'absolute', textAlign: 'right', color: '#B88E2F', fontSize: 52, fontFamily: 'Poppins', fontWeight: '700', lineHeight: 65, wordWrap: 'break-word'}}>Discover Our       New Collection</div> */}
      {/* <div className="TreatingAllSkinCo" style={{width: 1081.20, height: 27.09, left: 0, top: 89.82, position: 'absolute', textAlign: 'right', color: '#333333', fontSize: 18, fontFamily: 'Poppins', fontWeight: '500', lineHeight: 24, wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div> */}
      <div className="Frame94" style={{width: 222, height: 74, paddingLeft: 72, paddingRight: 72, paddingTop: 25, paddingBottom: 25, left: 424.27, top: 140.77, position: 'absolute', background: '#B88E2F', border: '1px solid', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10, display: 'inline-flex'}}>
        <div className="BookAnAppointment" style={{color: 'white', fontSize: 16, fontFamily: 'Poppins', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>BUY Now</div>
      </div>
      <div className="BookAnAppointment" style={{width: 238.24, height: 12.51, left: 953.82, top: 0, position: 'absolute', color: '#333333', fontSize: 16, fontFamily: 'Poppins', fontWeight: '600', letterSpacing: 3, wordWrap: 'break-word'}}>New Arrival</div>
    </div>
  </div>
</div>

      {/* <img
        src="/images/banner.jpg"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      /> */}
      {/* banner image */}
      <div className="container-fluid row mt-3 home-page">
        <div className="col-md-3 filters">
          <h4 className="text-center">Filtro por Categoria</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          {/* price filter */}
          <h4 className="text-center mt-4">Filtro por precio 🤑</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET DE MATRIX
            </button>
          </div>
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">Todos los Productos 🍎</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      Más Detalles 
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      Añadir 
                    </button>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
          <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      
                  
    </Layout>
    
  );
};

export default HomePage;
