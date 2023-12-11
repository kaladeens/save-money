import '../styles/Sidebar.css'
import logo from '../assets/logo.png';
import {BrowserRouter as Link} from 'react-router-dom';
function Sidebar(){

    return (
        <div className='SidebarContainer'>
            
                <div className='logo-img' >
                    <Link to = '/'>
                        <img src = {logo} alt = "Logo of broke human being" className='img'/>
                    </Link>
                </div>
            
        </div>
    )
}

export default Sidebar;