import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children }) => {
    return (
        <Link to='/' className=" text-white border-0 btn btn-primary bg-[#D44040] font-semibold">{children}</Link>
    );
};

export default Button;