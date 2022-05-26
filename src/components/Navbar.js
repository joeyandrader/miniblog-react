import { NavLink, Link } from 'react-router-dom';
// CSS
import styles from './Navbar.module.css';

import { useAuthentication } from '../hooks/useAuthentication';
import { useAuthValue } from '../context/AuthContext';

const Navbar = () => {

    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")} >Home</NavLink></li>

                {!user && (
                    <>
                        <li><NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")} >Login</NavLink></li>
                        <li><NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : "")} >Cadastrar</NavLink></li>
                    </>
                )}

                {user && (
                    <>
                        <div className={styles.dropdown}>
                            <a className={styles.dropbtn}>Ola, {user.displayName}</a>
                            <div className={styles.dropdown_content}>
                                <li><Link to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")} >Nova postagem</Link></li>
                                <li><Link to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")} >Dashboard</Link></li>
                                <hr />
                                <li><a onClick={logout} className={({ isActive }) => (isActive ? styles.active : "")} >Dashboard</a></li>
                            </div>
                        </div>
                    </>
                )}

                <li><NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar