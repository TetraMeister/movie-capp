import { useUser } from '../contexts/UserContext';

export const PageLogin = () => {
    const { logIn } = useUser();
    return (
        <div>
            PageLogin
            <button onClick={() => logIn()}>Log In</button>
        </div>
    );
};

export default PageLogin;
