import "./IdolsChelsea.css";
import Drogba from "../../assets/playersChelsea/Drogba.jpeg";
import EdenHazard from "../../assets/playersChelsea/hazard.jpg";
import PetrCech from "../../assets/playersChelsea/petrcech.webp";
import JohnTerry from "../../assets/playersChelsea/terry.jpg";
import FrankLampard from "../../assets/playersChelsea/franlampard.avif";

function IdolsChelsea() {
    return (
        <>
            <div className="all-chelsea">
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Drogba} className="imgChelsea" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Didier Drogba</h5>
                                <p className="cardText">Atacante marfinense que chegou ao Chelsea em 2004 e ficou marcado por gols decisivos, especialmente em finais. Atuou em 381 partidas e marcou 164 gols pelo clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1998 – 2018
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={EdenHazard} className="imgChelsea" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Eden Hazard</h5>
                                <p className="cardText">Atacante belga que começou a carreira no Lille e chegou ao Chelsea em 2012, sendo o principal jogador ofensivo da equipe por sete temporadas, com 110 gols em 352 partidas.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2007 – 2023
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={PetrCech} className="imgChelsea" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Petr Čech</h5>
                                <p className="cardText">Goleiro tcheco que iniciou a carreira no Chmel Blšany e chegou ao Chelsea em 2004, tornando-se um dos maiores goleiros da história da Premier League. Disputou 494 partidas pelo clube e defendeu cerca de 24 pênaltis, recorde da competição durante sua passagem pelos Blues.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1999 – 2019
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={JohnTerry} className="imgChelsea" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">John Terry</h5>
                                <p className="cardText">Zagueiro formado nas categorias de base do Chelsea, tornou-se o maior capitão da história do clube e referência defensiva por mais de uma década. Disputou 717 partidas e marcou 67 gols pelos Blues.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1998 – 2018
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={FrankLampard} className="imgChelsea" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Frank Lampard</h5>
                                <p className="cardText">Meia inglês conhecido por sua capacidade de marcar gols, chegou ao Chelsea em 2001 e se tornou o maior artilheiro da história do clube, com 211 gols em 648 partidas.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1995 – 2016
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

export default IdolsChelsea;