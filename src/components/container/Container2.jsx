import React from 'react';

const Container2 = ({ children }) => {
    return (
        <div className="max-w-[98%] mx-auto">
            {children}
        </div>
    );
};

export default React.memo(Container2);
