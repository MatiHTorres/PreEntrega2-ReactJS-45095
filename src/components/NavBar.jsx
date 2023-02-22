import CartWidget from "./CartWidget";
import logo from "./images/Panaderia.png";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}>
                                <img src={logo} alt="Panaderia Los Sabores" width={"120"} />
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href={"/"}>
                                            Inicio
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/panes"}>
                                            Panaderia
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/pasteles"}>
                                            Pasteleria
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/empanadas"}>
                                            Empanadas
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col d-flex align-item-center justify-content-end">
                            <CartWidget />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
