import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    
        const navigate=useNavigate()
        const LogOut=()=>{
            sessionStorage.clear()
            navigate("/")
        }
    
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Blog App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/create">Create a post</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewall">View All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/viewmypost">View My Post</a>
        </li>

        <li class="nav-item">
          <button onClick={LogOut} className="btn btn-success">Log Out</button>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
