import React from 'react';

import { useUser } from '../contexts/UserContext';

import styles from './Pages.module.css';

export const PageLogin = () => {
    const { logIn } = useUser();
    const [name, setName] = React.useState('');

    const trimmedName = name.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (trimmedName) logIn(trimmedName);
    };

    return (
        <div className={`container ${styles.hero}`}>
            <form className={styles.login} onSubmit={handleSubmit}>
                <h1 className={styles.login__title}>🎬 Movie Capp</h1>
                <label className={styles.label}>
                    Your name
                    <input
                        className="input"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John"
                        autoFocus
                    />
                </label>
                <button type="submit" className="btn" disabled={!trimmedName}>
                    Log In
                </button>
            </form>
        </div>
    );
};

export default PageLogin;
