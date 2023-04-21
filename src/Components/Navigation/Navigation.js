import React from 'react';


const Navigation = () => {
  return (
    <div className="nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f2f2f2', height: '80px', padding: '0 20px' }}>
  <a href="/" className="site-title" style={{ fontSize: '24px', fontWeight: 'bold', color: '#333', textDecoration: 'none' }}>Engineering</a>
  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center' }}>
    <li style={{ marginRight: '20px' }}>
      <a href="/contact-us" style={{ fontSize: '18px', color: '#333', textDecoration: 'none' }}>Contact Us</a>
    </li>
    <li>
      <a href="/about" style={{ fontSize: '18px', color: '#333', textDecoration: 'none' }}>About</a>
    </li>
  </ul>
</div>

  );
};

export default Navigation;
