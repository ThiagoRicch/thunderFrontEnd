import "./Error404.css";
import RedCard from "../../assets/logo/vermelho.png";

function Error404() {
    return (
        <div className="error-page"> 
            <div className="error-container">
                <h1 className="error-title">DAMN RUBBER BRO...</h1>
                <img className="redCard" src={RedCard} alt="Error 404" />
                <h3 className="error-subtitle">Error 404.</h3>
                <p className="error-message">
                    The page you are looking for does not exist.
                </p>
                <button type="submit" className="botaoBack" onClick={() => window.location.href = '/'}>
                    Back
                </button>
            </div>
        </div>
    );
}

export default Error404;