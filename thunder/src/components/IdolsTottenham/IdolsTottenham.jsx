import "./IdolsTottenham.css";
import Bale from "../../assets/playersTottenham/bale.jpg";
import Jimmy from "../../assets/playersTottenham/jimmy.jpg";
import Kane from "../../assets/playersTottenham/Kane.jpg";
import Ledley from "../../assets/playersTottenham/ledley.jpg";
import Son from "../../assets/playersTottenham/Son.webp";

function IdolsTottenham() {
    return (
        <>
            <div className="all-tottenham">
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Bale} className="imgTottenham" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Gareth Bale</h5>
                                <p className="cardText">Atacante galês que iniciou a carreira no Southampton e teve destaque no Tottenham antes de se tornar estrela mundial. Pelo clube, disputou 237 partidas e marcou 71 gols.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2006 – 2023
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Jimmy} className="imgTottenham" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Jimmy Greaves</h5>
                                <p className="cardText">Um dos maiores atacantes da história do futebol inglês, foi artilheiro histórico do Tottenham nos anos 1960. Atuou em 379 partidas e marcou 266 gols pelo clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1957 – 1971
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Kane} className="imgTottenham" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Harry Kane</h5>
                                <p className="cardText">Atacante inglês formado na base do Tottenham, tornou-se o maior artilheiro da história do clube. Atuou em 435 partidas e marcou 280 gols, sendo decisivo por quase uma década.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2010 – presente
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Ledley} className="imgTottenham" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Ledley King</h5>
                                <p className="cardText">Zagueiro formado nas categorias de base do Tottenham, símbolo de lealdade e liderança. Disputou 323 partidas e marcou 14 gols, atuando toda a carreira profissional no clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1998 – 2012
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Son} className="imgTottenham" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Son Heung-min</h5>
                                <p className="cardText">Atacante sul-coreano que chegou ao Tottenham em 2015 e se tornou um dos maiores nomes da história recente do clube. Disputou cerca de 400 partidas e marcou aproximadamente 160 gols, sendo referência ofensiva e capitão.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1986 – 2006
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

export default IdolsTottenham;