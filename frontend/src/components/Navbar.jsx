function Navbar() { 
const logoutHandler = ()=>{

  localStorage.removeItem(

    "token"
  );

  window.location.href = "/";
};
return ( 
<header> 
<nav className="navbar"> 
<h1 className="logo"> SafeTap </h1> 
<ul className="nav-links"> 
<li> 
<a href="#home"> Home </a> 
</li> 
<li> 
<a href="#simulations"> Simulations </a> 
</li> 
<li> 
<a href="#features"> Features </a> 
</li> 
<li> 
<a href="#contact"> Contact </a> 
</li> 
</ul> 
<a href="#practice"> 
<button

  className="nav-btn"

  onClick={logoutHandler}
>

  Logout

</button>
</a> 
</nav> 
</header> 
); 
} 
export default Navbar; 