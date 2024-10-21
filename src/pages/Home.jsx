import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to the IELTS Preparation App!</h1>
            <p>This application helps you prepare for your IELTS exam.</p>
            <p>Choose an option below to get started:</p>
            <nav style={styles.nav}>
                <Link to="/auth" style={styles.link}>Sign Up / Login</Link>
               
            </nav>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
    },
    nav: {
        marginTop: '20px',
    },
    link: {
        margin: '10px',
        padding: '10px 20px',
        textDecoration: 'none',
        color: '#fff',
        backgroundColor: '#007BFF',
        borderRadius: '5px',
    },
};

export default Home;
