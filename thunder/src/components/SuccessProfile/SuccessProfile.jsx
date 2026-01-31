import "./SuccessProfile.css";

function SuccessProfile() {
    return (
        <>
            <div className="successProfile-container">
                <h1 className="successProfile-title">Update Successful!</h1>
                <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Success" className="successProfile-image" />
                <p className="successProfile-message">
                    Your account has been updated successfully. You can now go back to the chosen team page.
                </p>
                <button type="submit" className="botaoAlterar" onClick={() => window.location.href = '/teamschoose'}>
                    Continue
                </button>
            </div>
        </>
    );
}

export default SuccessProfile;