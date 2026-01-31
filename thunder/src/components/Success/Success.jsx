import "./Success.css";

function Success() {
    return (
        <>
            <div className="success-container">
                <h1 className="success-title">Registration Successful!</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Success" className="success-image" />
                <p className="success-message">
                    Your account has been created successfully. You can now log in using your credentials.
                </p>
                <button type="submit" className="botaoSuccess" onClick={() => window.location.href = '/login'}>
                    Continue
                </button>
            </div>
        </>
    );
}

export default Success;