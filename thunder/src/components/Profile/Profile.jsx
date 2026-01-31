import { useState, useEffect } from "react";
import "./Profile.css";
import { editProfile } from "../../services/authService";
import BlueThunder from "../../assets/logo/bluethunder.png";
import SuccessProfile from "../SuccessProfile/SuccessProfile";

function Profile() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [successProfile, setSuccessProfile] = useState(false);

    useEffect(() => {
        const name = localStorage.getItem("userName");
        const email = localStorage.getItem("email");

        if (name) setUserName(name);
        if (email) setUserEmail(email);
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name: userName,
            email: userEmail
        };

        try {
            const response = await editProfile(data);

            setUserName(response.name);
            setUserEmail(response.email);

            localStorage.setItem("userName", response.name);
            localStorage.setItem("email", response.email);

        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar perfil");
        }

        setSuccessProfile(true);
    }

    return (
        <div className="login-all">
            <div className="tituloLogin">
                <img src={BlueThunder} alt="Logo" className="logo" />
                <h1>Futboll</h1>
            </div>

            <div className="formulario">
                {successProfile ? (
                    <SuccessProfile />
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input
                                type="text"
                                placeholder="Name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                required
                            />

                            <button className="botaoAlterar" type="submit">
                                Alterar
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default Profile;
