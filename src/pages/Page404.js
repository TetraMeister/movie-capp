import { Link } from 'react-router-dom';

export const Page404 = () => {
    return (
        <div className="container status">
            <h1>404</h1>
            <p>Nothing here...</p>
            <p>
                <Link to={'/'} className="btn">
                    Go home
                </Link>
            </p>
        </div>
    );
};

export default Page404;
