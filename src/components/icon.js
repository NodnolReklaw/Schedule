import React from 'react';

const Icon = (icon, className) => {
    return (
    <i className={icon`${icon} ${className}`}></i>
 )
}

export default Icon;