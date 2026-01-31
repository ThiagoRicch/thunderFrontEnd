import "./home.css";
import BlueThunder from "../../assets/logo/bluethunder.png";
import Imagem1 from "../../assets/caroulses/1.png";
import Imagem2 from "../../assets/caroulses/2.png";
import Imagem3 from "../../assets/caroulses/3.png";
import Github from "../../assets/logo/github.png";
import Linkedin from "../../assets/logo/linkedin.png";
import Instagram from "../../assets/logo/instagram.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



const Home = () => {
    return (
        <div className="all-home">

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
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary">
                                    <a className="nav-link" aria-current="page" href="/">
                                        <strong className="Link">Home</strong>
                                    </a>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary">
                                    <a className="nav-link" href="/login">
                                        <strong className="Link">Login</strong>
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="carouselExample" className="carousel slide all-carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imagem1} className="d-block imgCarousel" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img src={Imagem2} className="d-block imgCarousel" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={Imagem3} className="d-block imgCarousel" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="cardContainerAll">
                <div className="card cardAll">
                    <div className="card-body cardBodyAll">
                        <img className="iconSite" src={Github} alt="Github" />
                        <h6 className="card-subtitle mb-2 text-body-secondary">Github</h6>
                        <p className="card-text">Acompanhe meus repositórios e meus projetos postados no Github.</p>
                        <button type="button" className="btn btn-dark">
                            <a className="nav-link" aria-current="page" href="https://github.com/ThiagoRicch">
                                <strong className="card-link">Acessar</strong>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="card cardAll">
                    <div className="card-body cardBodyAll">
                        <img className="iconSite" src={Linkedin} alt="Linkedin" />
                        <h6 className="card-subtitle mb-2 text-body-secondary">Linkedin</h6>
                        <p className="card-text">Acompanhe meus projetos e sobre minha vida profissional.</p>
                        <button type="button" className="btn btn-dark">
                            <a className="nav-link" aria-current="page" href="https://www.linkedin.com/in/thiagonogueira55th/">
                                <strong className="card-link">Acessar</strong>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="card cardAll">
                    <div className="card-body cardBodyAll">
                        <img className="iconSite"src={Instagram} alt="Instagram" />
                        <h6 className="card-subtitle mb-2 text-body-secondary">Instagram</h6>
                        <p className="card-text">Acompanhe meus posts e minhas redes sociais no Instagram.</p>
                        <button type="button" className="btn btn-dark">
                            <a className="nav-link" aria-current="page" href="https://www.instagram.com/55newth/">
                                <strong className="card-link">Acessar</strong>
                            </a>
                        </button>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Home;