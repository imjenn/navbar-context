import React, { useContext } from 'react';
import styles from './Form.module.css'

import NameContext from '../contexts/NameContext';

const Form = () => {
    const { name, setName } = useContext(NameContext);

    return (
        <form>
            <label>Your Name:</label>
            <input className={styles.name} type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </form>
    );
};

export default Form;