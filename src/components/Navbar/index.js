import Link from 'next/link';

const Navbar = () => {
    return (
        <header style={styles.header}>
            <nav>
                <ul style={styles.navList}>
                    <li style={styles.navItem}>
                        <Link href="/" style={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link href="/login" style={styles.navLink}>
                            Login
                        </Link>
                    </li>
                    <li style={styles.navItem}>
                        <Link href="/cadastro" style={styles.navLink}>
                            Cadastrar
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        // backgroundColor: '#645bde',
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

export default Navbar;