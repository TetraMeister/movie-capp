export const PageLogin = (params) => {
    const { logIn } = params;
    return (
        <div>
            PageLogin
            <button onClick={() => logIn()}>Log In</button>
        </div>
    );
};

export default PageLogin;
