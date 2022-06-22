import Navbar from "./Navbar";
import NavSignIn from "./NavSignIn";
import NavSignOut from "./NavSignOut";

const Navigation = ({ isLogin, handleRoute, route}) => {    
    if(route === "dashboard"){
        return (
            <NavSignOut 
            handleRoute={handleRoute} />
        )
    } else if (isLogin && route === "main") {
        return (
            <NavSignOut
            handleRoute={handleRoute} />
        )
    } else if (!isLogin && route === "register") {
        return (
            <NavSignIn
            handleRoute={handleRoute} />
        )
    } else if (!isLogin && route === "login") {
        return (
            <NavSignIn
            handleRoute={handleRoute} />
        )
    } else {
        return (
            <Navbar
            handleRoute={handleRoute} />
        )
    }
        
    
}

export default Navigation;