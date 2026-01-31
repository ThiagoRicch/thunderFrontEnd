import { useState } from "react";
import "./Login.css";
import { loginUser } from "../../services/authService"; 
import BlueThunder from "../../assets/logo/bluethunder.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            email,
            password
        };

        try {
            const response = await loginUser(data);

            localStorage.setItem("token", response.token);

            window.location.href = '/teamschoose'
        } catch (error) {
            alert("Credenciais inválidas");
        }

        console.log("Login:", data);
    }

    return (
        <div className="login-all">

            <div className="tituloLogin">
                 <img src={BlueThunder} alt="Logo" className="logo" />
                    <h1>Futboll</h1>
            </div>
            <div className="formulario">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
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
                        <button className="botaoLogin" type="submit">
                            Login
                        </button>
                        <p className="pergunta-register">
                            Don't have an account? <a href="/register">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );



}

export default Login;