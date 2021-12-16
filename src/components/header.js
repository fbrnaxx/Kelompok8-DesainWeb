import React, {component} from 'react';
import {Link} from 'react-router-dom'; 
import logo from './images/logohead.png';

class Header extends React.Component{
    render(){
        return(
            <div>
                {/* ======= Header ======= */} 
                <header id="header" class="fixed-top">
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                        <div class="col-xl-10 d-flex align-items-center">
                            
                            <Link to="/"class="logo mr-auto">MasterCook ITK</Link>
                            <nav class="nav-menu d-none d-lg-block offset-2">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                            </nav>
                        </div>
                        </div>
                    </div>
                </header>
                {/* End Header */}
            </div>
        )
    }
}

export default Header