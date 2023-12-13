import '../styles/Sidebar.css'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Sidebar(){
    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit'
    }
    return (
        <div className='SidebarContainer'>
            
            <div className='logo-img' >
                <Link to='/'>
                    <img src={logo} alt="Logo of broke human being" className='img'/>
                </Link>
            </div>
            <Link style = {linkStyle} to='/add'>
                Add Transaction
            </Link>
            
        </div>
    )
}

export default Sidebar;