import '../styles/Sidebar.css'
import logo from '../assets/logo.png';
import 
function Sidebar(){

    return (
        <div className='SidebarContainer'>
            <div className='logo-img' >
                <img src = {logo} className='img'></img>
            </div>
        </div>
    )
}

export default Sidebar;