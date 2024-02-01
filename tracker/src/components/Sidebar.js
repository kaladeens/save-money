import '../styles/Sidebar.css'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Sidebar(){
    
    return (
        <div className='SidebarContainer'>
            
            <div className='logo-img' >
                <Link to='/'>
                    <img src={logo} alt="Logo of broke human being" className='img'/>
                </Link>
            </div>
            <div className='link-wrapper'>
                <div>
                <a href='/add'>
                    Add Transaction
                </a>
                </div>
                <div>
                <a href='/balance'>
                    Balance
                </a>
                </div>
            </div>
            
        </div>
    )
}

export default Sidebar;