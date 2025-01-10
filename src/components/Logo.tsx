import React from 'react';

const Logo: React.FC = () => {

    const logoStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        userSelect: 'none',
        letterSpacing: "3px"
    };
    
    const highlightStyle: React.CSSProperties = {
        color: "#81D4FA",
        fontWeight: 700,
    };
    
    const logoTextStyle: React.CSSProperties = {
        color: "#fff",
    };
    
    
    return (
        <div style={logoStyle}>
        <span style={logoTextStyle}>My</span>
        <span style={highlightStyle}>Business</span>
      </div>
    );
};

export default Logo;