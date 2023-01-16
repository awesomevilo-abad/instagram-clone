import "../styles/menu.scss";
import {ReactComponent as Home} from '../images/home.svg';
import {ReactComponent as Inbox} from '../images/inbox.svg';
import {ReactComponent as Explore} from '../images/explore.svg';
import {ReactComponent as Notifications} from '../images/notificiations.svg';
import ProfileIcon from './ProfileIcon'
function Menu (){
    return <div className="menu">
        <Home className="icon"/>
        <Inbox className="icon"/>
        <Explore className="icon"/>
        <Notifications className="icon"/>
        <ProfileIcon/>
    </div>
}

export default Menu;