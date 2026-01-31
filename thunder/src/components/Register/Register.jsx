import { useState } from "react";
import "./Register.css";
import Success from "../Success/Success";
import { registerUser } from "../../services/authService";
import BlueThunder from "../../assets/logo/bluethunder.png";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            password
        };

        try {
            const response = await registerUser(data);
            console.log("Usuário cadastrado:", response);
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar usuário");
            return;
        }

        setSuccess(true);
    }

    return (
        <div className="register-all">
            <div className="tituloRegister">
                    <img src={BlueThunder} alt="Logo" className="logo" />
                    <h1>Futboll</h1>
            </div>

            <div className="formulario">
                {success ? (
                    <Success />
                ) : (
                    <>
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputs">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <button type="submit" className="botaoRegister">
                                    Sign
                                </button>

                                <p className="pergunta-login">
                                    Already have an account? <a href="/login">Login</a>
                                </p>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Register;
