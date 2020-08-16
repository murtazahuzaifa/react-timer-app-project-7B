import React from 'react';
import {ButtonType} from '../../Types';

const Button: React.FC<ButtonType> = ({children, onClick, className}) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
};

export default Button;