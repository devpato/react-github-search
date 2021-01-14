import React from 'react';

const Button = ({ color, width = 40, value }) => (
    <button type="submit" className={`w-full md:w-${width} py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-${color}-400 hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`}>
        {value}
    </button>
);

export default Button;