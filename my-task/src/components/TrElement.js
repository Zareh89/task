import React from 'react';

const Trelement = ({children, className, onClick}) => ( <tr className={className} onClick={onClick}>{children}</tr> );
    

export default Trelement;