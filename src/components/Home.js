import { BrowserRouter,Switch,Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <ul className="Menu">
                <Link to="/dropdown"><button  className="modalopen">Dropdown</button></Link>
                <Link to="/accordion"><button  className="modalopen">Accordion</button></Link>
                <Link to="/Modal"><button  className="modalopen">Modal</button></Link>
                <Link to="/colorpicker"><button  className="modalopen">ColorPicker</button></Link>
                <Link to="todo"><button  className="modalopen">ToDo</button></Link>
                <Link to="stoptimer"><button  className="modalopen">StopTimer</button></Link>
                <Link to="search"><button className="modalopen">Search</button></Link>
            </ul>
        </div>
    )
}

export default Home;