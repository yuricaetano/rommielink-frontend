import Link from 'next/link';

const Header = () => {
    return (
        <header style={styles.header}>
            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link href="/">
                            <a style={styles.navLink}>Home</a>
                        </Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link href="/login">
                            <a style={styles.navLink}>Login</a>
                        </Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link href="/register">
                            <a style={styles.navLink}>Register</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: '#645bde',
        padding: '10px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    navItem: {
        margin: '0 15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
};

export default Header;