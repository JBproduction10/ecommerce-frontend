import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';
import {itemTotal} from './CartHelpers';

const isActive = (history, path) =>{
    if(history.location.pathname === path){
        return {color: '#ff9900'}
    }else{
        return {color: '#ffffff'}
    }
};

const Menu = ({ history})=> (
    <div className='menu-nav'>
        <ul className = 'nav nav-tabs bg-info'>
            <li className= 'nav-item'>
                <Link className='nav-link' style={isActive(history, '/')} to='/'>Home</Link>
            </li>
            <li className= 'nav-item'>
                <Link className='nav-link' style={isActive(history, '/shop')} to='/shop'>Shop</Link>
            </li>
            <li className= 'nav-item'>
                <Link className='nav-link' style={isActive(history, '/cart')} to='/cart'>
                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" 
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg> 
                    <sup><small className='cart-badge badge badge-secondary'>{itemTotal()}</small></sup>
                </Link>
            </li>
            
            {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className= 'nav-item'>
                    <Link className='nav-link' style={isActive(history, '/dashboard')} to='/user/dashboard'>
                        Dashboard
                    </Link>
                </li>
            )}
               {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className= 'nav-item'>
                    <Link className='nav-link' style={isActive(history, '/dashboard')} to='/admin/dashboard'>
                        Dashboard
                    </Link>
                </li>
            )}
            {!isAuthenticated() && (
                <Fragment>
                    <li className= 'nav-item' className='auth'>
                        <Link className='nav-link' style={isActive(history, '/signin')} to='/signin'>Signin</Link>
                    </li>
                    <li className= 'nav-item'className=''>
                        <Link className='nav-link' style={isActive(history, '/signup')} to='/signup'>Signup</Link>
                    </li>
                </Fragment>
            )}
            {isAuthenticated() &&(
                <li className= 'nav-item' className='authout'>
                    <span className='nav-link' style={{cursor: 'pointer', color: '#ffffff'}} 
                    onClick={() => signout(() =>{
                    history.push('/')
                    })}>
                        Signout
                    </span>
                </li>
            )}
        </ul>
    </div>
);

export default withRouter(Menu);

