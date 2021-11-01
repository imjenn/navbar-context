import React, { useContext } from 'react';
import styles from './Form.module.css';

import NameContext from '../contexts/NameContext';


const Navbar = (props) => {
    const { name } = useContext(NameContext);

    return (
        <nav className={styles.navbar}>Welcome, {name}!</nav>
    )
}

export default Navbar;