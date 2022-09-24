import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <div class="navbar-collapse">
                        <ul class="navbar-nav me-auto">
                            <li class="navbar">
                            <a class="nav-link"><Link className="text-decoration-none" to='/'>Home</Link></a>
                            </li>
                            <li class="navbar">
                                <a class="nav-link"><Link className="text-decoration-none" to='/cadastro'>Cadastro</Link></a>
                            </li>
                            <li class="navbar"> 
                                <a class="nav-link"><Link className="text-decoration-none" to='/consulta'>Consulta</Link></a>
                            </li>
                            <li class="navbar">
                                <a class="nav-link"><Link className="text-decoration-none" to='/edicao'>Edição</Link></a>
                            </li>
                            <li class="navbar">
                                <a class="nav-link"><Link className="text-decoration-none" to='/sobre'>Sobre</Link></a>
                            </li>
                        </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}