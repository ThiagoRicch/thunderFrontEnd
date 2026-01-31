import "./TeamsChoose.css";
import Chelsea from "../../assets/logo/chelsea.svg";
import Arsenal from "../../assets/logo/arsenal.svg";
import ManUnited from "../../assets/logo/manunited.svg";
import ManCity from "../../assets/logo/mancity.svg";
import Liverpool from "../../assets/logo/liverpool.svg";
import Tottenham from "../../assets/logo/tottenham.svg";
import BlueThunder from "../../assets/logo/bluethunder.png";
import { useEffect, useState } from "react";


function TeamsChoose() {
        const [userName, setUserName] = useState("");

        useEffect(() => {
            const name = localStorage.getItem("userName");
            if (name) {
                setUserName(name);
            }
        }, []);

        return (

            <div className="teamchoose-all">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                </link>

                <nav className="navbar-expand-lg fixed-top ">
                    <div className="container-fluid Navbar">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            <img className="logo" src={BlueThunder} alt="Blue Thunder Logo" />
                            <strong className="titleNavBar">Futboll</strong>
                        </a>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 linksNavBar">
                                <li class="nav-item dropdown linkProfile">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {userName}
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="/profile">Perfil
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="/">Sair
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="time-container">
                    <h2 className="titulo">Veja os 5 maiores Ídolos de cada Equipe!</h2>
                    <button className="botao" onClick={() => window.location.href = '/idolsarsenal'}>
                        <img src={Arsenal} alt="Arsenal" className="times" />
                        Arsenal
                    </button>
                    <button className="botao" onClick={() => window.location.href = '/idolschelsea'}>
                        <img src={Chelsea} alt="Chelsea" className="times" />
                        Chelsea
                    </button>
                    <button className="botao" onClick={() => window.location.href = '/idolsliverpool'}>
                        <img src={Liverpool} alt="Liverpool" className="times" />
                        Liverpool
                    </button>
                    <button className="botao" onClick={() => window.location.href = '/idolsmancity'}>
                        <img src={ManCity} alt="Man City" className="times" />
                        Man City
                    </button>
                    <button className="botao" onClick={() => window.location.href = '/idolsmanunited'}>
                        <img src={ManUnited} alt="Man United" className="times" />
                        Man United
                    </button>
                    <button className="botao" onClick={() => window.location.href = '/idolstottenham'}>
                        <img src={Tottenham} alt="Tottenham" className="times" />
                        Tottenham
                    </button>
                </div>
            </div>
        );
    }

    export default TeamsChoose;