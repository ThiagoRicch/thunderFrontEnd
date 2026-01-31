import "./IdolsManCity.css";
import DeBruyne from "../../assets/playersManCity/DeBruyne.webp";
import DavidSilva from "../../assets/playersManCity/davidsilva.avif";
import YayaToure from "../../assets/playersManCity/yaya.jpg";
import Aguero from "../../assets/playersManCity/aguero.jpg";
import Kompany from "../../assets/playersManCity/kompany.jpg";

function IdolsManCity() {
    return (
        <>
            <div className="all-mancity">
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={DeBruyne} className="imgManCity" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Kevin De Bruyne</h5>
                                <p className="cardText">Meia belga que se tornou o principal organizador do Manchester City na fase mais vitoriosa do clube. Disputou cerca de 380 partidas e marcou aproximadamente 100 gols pelos Citizens.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2008 – presente
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={DavidSilva} className="imgManCity" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">David Silva</h5>
                                <p className="cardText">Meia espanhol conhecido pela técnica e inteligência tática, peça fundamental do Manchester City por uma década. Disputou 436 partidas e marcou 77 gols pelo clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2003 – 2020
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={YayaToure} className="imgManCity" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Yaya Touré</h5>
                                <p className="cardText">Volante marfinense decisivo na consolidação do Manchester City como potência inglesa. Disputou 316 partidas e marcou 79 gols, sendo destaque na temporada 2013–14.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2001 – 2019
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Aguero} className="imgManCity" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Sergio Agüero</h5>
                                <p className="cardText">Atacante argentino e maior artilheiro da história do Manchester City, eternizado pelo gol do título da Premier League em 2012. Atuou em 390 partidas e marcou 260 gols pelo clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2003 – 2021
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Kompany} className="imgManCity" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Vincent Kompany</h5>
                                <p className="cardText">Zagueiro e capitão histórico do Manchester City, símbolo de liderança e solidez defensiva. Atuou em 360 partidas e marcou 20 gols, incluindo gols decisivos em títulos.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2003 – 2020
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default IdolsManCity;