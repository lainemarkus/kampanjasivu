import "./sidenav.css"
import {Link} from 'react-router-dom';


export default function SideNav() {

    return (
        
            <div id="mySidenav" className="sidenav">
                <Link to= "/test" id="test">TESTAA TIETOSI</Link>
                <Link to="/faq" id="faq">USEIN KYSYTYT KYSYMYKSET</Link>
                <Link to="/info" id="info">TIETOA KORONAVIRUSROKOTTEESTA</Link>
            </div>
        
    );
}