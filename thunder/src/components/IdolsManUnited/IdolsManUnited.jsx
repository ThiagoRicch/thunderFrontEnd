import "./IdolsManUnited.css";
import CR7 from "../../assets/playersManUnited/cr7.jpg";
import Bobby from "../../assets/playersManUnited/Bobby.avif";
import Giggs from "../../assets/playersManUnited/giggs.jpg";
import Best from "../../assets/playersManUnited/best.jpg";
import BrunoFernandes from "../../assets/playersManUnited/bruno.jpg";

function IdolsManUnited() {
    return (
        <>
            <div className="all-manunited">
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={CR7} className="imgManUnited" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Cristiano Ronaldo</h5>
                                <p className="cardText">Atacante português que chegou ao Manchester United em 2003 e se tornou um dos maiores jogadores da história do futebol. Pelo clube, disputou 346 partidas e marcou 145 gols, sendo decisivo em títulos nacionais e europeus.</p>
                                <p className="cardText">
                                    <small className="datePlayer">2002 – presente
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Bobby} className="imgManUnited" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Bobby Charlton</h5>
                                <p className="cardText">Meia-atacante histórico e sobrevivente do desastre aéreo de Munique, foi referência técnica do Manchester United por quase duas décadas. Disputou 758 partidas e marcou 249 gols pelo clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1956 – 1973
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Best} className="imgManUnited" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">George Best</h5>
                                <p className="cardText">Atacante norte-irlandês conhecido por sua habilidade e estilo único, foi um dos primeiros astros globais do futebol. Atuou em 470 partidas e marcou 179 gols pelo Manchester United.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1963 – 1984
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={Giggs} className="imgManUnited" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Ryan Giggs</h5>
                                <p className="cardText">Meia formado nas categorias de base do United, símbolo de longevidade e regularidade. Atuou em 963 partidas e marcou 168 gols, sendo o jogador com mais jogos da história do clube.</p>
                                <p className="cardText">
                                    <small className="datePlayer">1990 – 2014
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="cardContainer">
                        <div className="col-md-4">
                            <img src={BrunoFernandes} className="imgManUnited" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="cardBodyPlayer">
                                <h5 className="cardTitle">Bruno Fernandes</h5>
                                <p className="cardText">Meia português que chegou ao Manchester United em 2020 e rapidamente se tornou líder técnico da equipe. Soma mais de 230 partidas e cerca de 80 gols, sendo referência criativa do time.</p>
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

export default IdolsManUnited;