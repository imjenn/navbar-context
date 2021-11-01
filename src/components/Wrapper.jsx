import React, { useState } from 'react';
import NameContext from '../contexts/NameContext';

const Wrapper = ({children}) => {
    const [name, setName] = useState('Jenn');

     return (
        <NameContext.Provider 
            value={{
                name,
                setName
            }}
        >
            {children}
        </NameContext.Provider>
    );
};

export default Wrapper;