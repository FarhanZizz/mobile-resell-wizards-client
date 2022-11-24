import React, { Children } from 'react';

const Button = ({ children }) => {
    return (
        <button className="border-0 btn btn-primary bg-[#D44040] font-semibold">{children}</button>
    );
};

export default Button;