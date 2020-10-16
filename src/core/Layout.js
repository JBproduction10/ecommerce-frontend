import React from 'react';
import Menu from './Menu';
import '../styles.css'

const Layout = ({title='Title', description='Description',className, children}) =>(
    // the ul class added is to be removed later on it is just for try
<div>
    <Menu/>
    {/* { <ul class="slideshow">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>} */}
    <div className="jumbotron">
        <h2>{title}</h2>
        <p className='lead'>{description}</p>
    </div>
    <div className={className}>{children}</div>
</div>);

export default Layout;