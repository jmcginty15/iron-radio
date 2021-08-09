import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './NavBar.css';

// Navbar component
const NavBar = () => {
    const history = useHistory();
    const { app, forum, facebook, youtube, itunes } = useSelector(state => state.config);
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(!open);

    const followLink = (route, newTab) => {
        if (newTab) window.open(route, '_blank');
        else history.push(route);
    }

    return (
        <div className="NavBar">
            <Navbar id="Nav" color="black" dark expand="md" fixed="top">
                <NavbarBrand href="/"><span className="NavBar-brand">{app.name}</span></NavbarBrand>
                <NavbarToggler onClick={toggleOpen} />
                <Collapse isOpen={open} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/archive', false)}><span className="NavBar-link">Archive</span></NavLink>
                        </NavItem>
                        {/* <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/about', false)}><span className="NavBar-link">Shop</span></NavLink>
                        </NavItem> */}
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink('/about', false)}><span className="NavBar-link">About</span></NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink onClick={() => followLink(forum, true)}><span className="NavBar-link">Forum</span></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <NavLink onClick={() => followLink(facebook, true)}><span className="NavBar-link-social"><i className="fa fa-facebook-square" aria-hidden="true" /></span></NavLink>
                <NavLink onClick={() => followLink(youtube, true)}><span className="NavBar-link-social"><i className="fa fa-youtube-play" aria-hidden="true" /></span></NavLink>
                <NavLink onClick={() => followLink(itunes, true)}><span className="NavBar-link-social"><i className="fa fa-apple" aria-hidden="true" /></span></NavLink>
            </Navbar>
        </div>
    )
}

export default NavBar;