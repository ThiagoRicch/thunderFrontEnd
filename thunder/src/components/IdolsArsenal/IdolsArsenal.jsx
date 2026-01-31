import "./IdolsArsenal.css";
import ThierryHenry from "../../assets/playersArsenal/thierry.webp";
import Bergkham from "../../assets/playersArsenal/bergkham.jpg";
import Vieira from "../../assets/playersArsenal/vieira.jpg";
import TonyAdams from "../../assets/playersArsenal/tonyadams.webp";
import IanWhight from "../../assets/playersArsenal/ianwhight.jpg";

function IdolsArsenal() {
    return (
        <>
            <div className="all-arsenal">
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={ThierryHenry} className="imgArsenal" alt="..." />
                        </div>
                        <div className="col-md-8 cardBodyPlayer">
                            <div>
                                <h5 className="cardTitle">Thierry Henry</h5>
                                <p className="cardText">Atacante francês que iniciou a carreira no Monaco e se tornou o maior ídolo da história moderna do Arsenal. Pelo clube, disputou 377 partidas e marcou 228 gols, sendo o maior artilheiro dos Gunners.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1986 – 2006
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Bergkham} className="imgArsenal" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Dennis Bergkham</h5>
                                <p className="cardText">Atacante holandês conhecido por sua técnica e visão de jogo, começou no Ajax e chegou ao Arsenal em 1995, onde atuou em 423 partidas e marcou 120 gols. Encerrrou a carreira no clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1986 – 2006
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Vieira} className="imgArsenal" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Patrick Vieira</h5>
                                <p className="cardText">Volante francês que iniciou a carreira no Cannes e se tornou capitão e referência do Arsenal, sendo peça-chave da equipe dos Invencíveis. Disputou 406 partidas e marcou 33 gols.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1993 – 2011
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={TonyAdams} className="imgArsenal" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Tony Adams</h5>
                                <p className="cardText">Zagueiro formado nas categorias de base do Arsenal, símbolo de liderança e capitão histórico. Atuou durante toda a carreira profissional pelo clube, somando 669 partidas e 48 gols.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1983 – 2002
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={IanWhight} className="imgArsenal" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Ian Wright</h5>
                                <p className="cardText">Atacante inglês que começou a carreira profissional mais tarde, destacou-se no Crystal Palace e virou ídolo no Arsenal, onde marcou 185 gols em 288 partidas.</p>
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

export default IdolsArsenal;