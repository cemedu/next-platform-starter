import Link from 'next/link';
import React from 'react';
const style = "p-1";

const NavLinks = ({ href, value, className }) => {
    return (
        <Link className={className || style} href={href || '/'}>{value || "home"}</Link>
    )
}

export default React.memo(NavLinks);