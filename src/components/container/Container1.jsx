import React from 'react';

const Container1 = ({ children }) => {
    return (
        <div className="max-w-[1200px] mx-auto p-1 md:px-4 lg:px-8">
            {children}
        </div>
    );
};

export default React.memo(Container1);
