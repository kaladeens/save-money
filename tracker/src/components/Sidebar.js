import '../styles/Sidebar.css'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Sidebar(){
    const LinkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '18px',
        position: 'fixed',
        left: '20px',
        marginTop: '25px',    
    }
    return (
        <div className='SidebarContainer'>
            
            <div className='logo-img' >
                <Link to='/'>
                    <img src={logo} alt="Logo of broke human being" className='img'/>
                </Link>
            </div>
            <Link style = {LinkStyle} to='/add'>
                Add Transaction
            </Link>
        </div>
    )
}

export default Sidebar;