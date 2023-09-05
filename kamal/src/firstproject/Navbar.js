import react from 'react'
import { NavLink} from 'react-router-dom'


function Navbar(){

    return(<>
    <nav ClassName="navbar navbar-expand-lg bg-body-tertiary">
  <div ClassName="container-fluid">
    <NavLink ClassName="navbar-brand" to="#">Navbar</NavLink>
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
        <li ClassName="nav-item">
          <NavLink ClassName="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li ClassName="nav-item">
          <NavLink ClassName="nav-link" to="#">Link</NavLink>
        </li>
        <li ClassName="nav-item dropdown">
          <NavLink ClassName="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </NavLink>
          <ul ClassName="dropdown-menu">
            <li><NavLink ClassName="dropdown-item" to="#">Action</NavLink></li>
            <li><NavLink ClassName="dropdown-item" to="#">Another action</NavLink></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><NavLink ClassName="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li>
        <li ClassName="nav-item">
          <NavLink ClassName="nav-link disabled">Disabled</NavLink>
        </li>
      </ul>
      <form ClassName="d-flex" role="search">
        <input ClassName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button ClassName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
    
    </>)
}



export default Navbar ;