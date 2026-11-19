import React from 'react';

import PropTypes from 'prop-types';

import styles from './Poster.module.css';

export const Poster = ({ src, title, className = '' }) => {
    const [hasError, setHasError] = React.useState(false);

    if (!src || src === 'N/A' || hasError) {
        return (
            <div className={`${styles.placeholder} ${className}`} role="img" aria-label={title}>
                <span>No poster</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={`${title} poster`}
            className={`${styles.poster} ${className}`}
            loading="lazy"
            onError={() => setHasError(true)}
        />
    );
};

Poster.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Poster;
