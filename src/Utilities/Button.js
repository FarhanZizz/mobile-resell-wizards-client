import React, { Children } from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children }) => {
    return (
        <Link to='/' className="border-0 btn btn-primary bg-[#D44040] font-semibold">{children}</Link>
    );
};

export default Button;