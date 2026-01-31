import "./IdolsLiverpool.css";
import Gerrard from "../../assets/playersLiverpool/gerrard.jpg";
import JohnBarnes from "../../assets/playersLiverpool/johnbarnes.jpg";
import KennyDalglish from "../../assets/playersLiverpool/kennydalglish.jpg";
import Rush from "../../assets/playersLiverpool/rush.jpg";
import Salah from "../../assets/playersLiverpool/salah.jpg";

function IdolsLiverpool() {
    return (
        <>
            <div className="all-liverpool">
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Gerrard} className="imgLiverpool" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Steven Gerrard</h5>
                                <p className="cardText">Meia formado nas categorias de base do Liverpool, foi capitão e símbolo de liderança do clube por mais de uma década. Disputou 710 partidas e marcou 186 gols, sendo referência técnica e emocional da equipe.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1998 – 2016
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={JohnBarnes} className="imgLiverpool" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">John Barnes</h5>
                                <p className="cardText">Meia-atacante inglês que iniciou a carreira no Watford e foi peça-chave do Liverpool nos anos 1980, conhecido por sua habilidade e impacto ofensivo. Disputou 407 partidas e marcou 108 gols.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1981 – 1999
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={KennyDalglish} className="imgLiverpool" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Kenny Dalglish</h5>
                                <p className="cardText">Atacante escocês que iniciou a carreira no Celtic e se tornou uma das maiores lendas do Liverpool, tanto como jogador quanto como treinador. Atuou em 515 partidas e marcou 172 gols pelo clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1969 – 1990
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Rush} className="imgLiverpool" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Ian Rush</h5>
                                <p className="cardText">Maior artilheiro da história do Liverpool, começou a carreira no Chester City e marcou 346 gols em 660 partidas pelo clube, sendo decisivo em competições nacionais e europeias.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1978 – 2000
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Salah} className="imgLiverpool" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Mohamed Salah</h5>
                                <p className="cardText">Atacante egípcio que iniciou a carreira no Al Mokawloon e chegou ao Liverpool em 2017, tornando-se um dos maiores artilheiros da era Premier League. Soma mais de 200 gols pelo clube e diversos recordes individuais.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2010 – Presente
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

export default IdolsLiverpool;