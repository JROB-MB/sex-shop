import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
<div style={{width: '100%', height: '100%', position: 'relative'}}>
    {/* Contenedor del encabezado */}
    <div style={{width: '100%', height: 505, left: 0, top: 0, position: 'absolute', background: 'white', borderTop: '0.50px rgba(0, 0, 0, 0.17) solid'}} />

    {/* Contenedor principal */}
    <div style={{height: 419, left: 100, top: 48, position: 'absolute'}}>
        {/* Contenedor de la información */}
        <div style={{width: 514.01, height: 312, left: 0, top: 0, position: 'absolute'}}>
            {/* Información de contacto */}
            <div style={{width: 285, left: 2.01, top: 86, position: 'absolute', color: '#9F9F9F', fontSize: 16, fontFamily: 'roboto', fontWeight: '400', wordWrap: 'break-word'}}>400 University Drive Suite 200 Coral Gables,
                <br/>FL 33134 USA
            </div>

            {/* Logo y título */}
            <div style={{left: 0, top: 0, position: 'absolute'}}>
                <span style={{color: 'black', fontSize: 24, fontFamily: 'roboto', fontWeight: '700', wordWrap: 'break-word'}}>Sexty Shopers<br/></span>
                <span style={{color: 'black', fontSize: 12, fontFamily: 'roboto', fontWeight: '700', wordWrap: 'break-word'}}>Professional Sex Shop</span>
            </div>

            {/* Menú de enlaces */}
            <div style={{width: 91, height: 312, left: 423.01, top: 0, position: 'absolute'}}>
                <div style={{width: 91, height: 312, left: 0, top: 0, position: 'absolute'}}>
                    <div style={{width: 89, height: 233, left: 2, top: 79, position: 'absolute'}}>
                        {/* Enlaces */}
                        <div style={{left: 0, top: 0, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'roboto', fontWeight: '500', wordWrap: 'break-word'}}><Link to="/"style={{color: 'black', textDecoration: 'none'}}>Inicio</Link></div>
                        <div style={{left: 0, top: 70, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'roboto', fontWeight: '500', wordWrap: 'break-word'}}><Link to="/categories" style={{color: 'black', textDecoration: 'none'}}>Categorias</Link></div>
                        <div style={{left: 0, top: 140, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'roboto', fontWeight: '500', wordWrap: 'break-word'}}><Link to="/about"style={{color: 'black', textDecoration: 'none'}}>Acerca de nosotros</Link></div>
                        <div style={{left: 0, top: 209, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'roboto', fontWeight: '500', wordWrap: 'break-word'}}><Link to="/contact"style={{color: 'black', textDecoration: 'none'}}>Contacto</Link></div>
                    </div>
                    <div style={{left: 0, top: 0, position: 'absolute', color: '#9F9F9F', fontSize: 16, fontFamily: 'roboto', fontWeight: '500', wordWrap: 'break-word'}}>Links</div>
                </div>
            </div>
        </div>

        {/* Pie de página */}
    </div>

    {/* Iconos de métodos de pago */}
    <div style={{width: 67, height: 67, paddingTop: 12.82, paddingBottom: 12.77, left: 977, top: 99, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{width: 67, height: 41.41, position: 'relative'}}>
            <img src="images/mastercard.png"/>
        </div>
    </div>

        <div style={{width: 67, height: 67, paddingTop: 12.82, paddingBottom: 12.77, left: 1068, top: 99, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
            <div style={{width: 67, height: 41.41, position: 'relative'}}>
                <img src="images/paypal.png"/>
            </div>
        </div>
    <div style={{width: 67, height: 67, left: 1154, top: 93, position: 'absolute'}}>
        <div style={{width: 67, height: 21.64, left: 0, top: 22.64, position: 'absolute'}}>
            <img src="images/visa.png"/>
        </div>
    </div>
    <div style={{width: 67, height: 67, paddingTop: 21.20, paddingBottom: 21.32, left: 1243, top: 93.05, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
        <div style={{width: 67, height: 24.48, position: 'relative'}}>
            <div style={{width: 67, height: 41.41, position: 'relative'}}>
                <img src="images/americanexp.png"/>
            </div>
        </div>
    </div>

    {/* Logo adicional */}
    <img style={{width: 46, height: 46, left: 1288, top: 430, position: 'absolute'}} src="/images/bitmap.png" />

    {/* Mensaje de métodos de pago */}
    <div style={{width: 147, height: 55.77, left: 977, top: 48, position: 'absolute', color: '#9F9F9F', fontSize: 16, fontFamily: 'roboto', fontWeight: '500', wordWrap: 'break-word'}}>Payment Methods</div>
</div>


    );
};

export default Footer;