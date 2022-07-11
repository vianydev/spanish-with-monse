import Navbar from "./Navbar";
import NavSignIn from "./NavSignIn";
import NavSignOut from "./NavSignOut";

const Navigation = ({ isLogin, handleRoute, route}) => {  

    if (route === 'main'){
        return (
            <Navbar
            handleRoute={handleRoute} />
        )
    } else if (route === "dashboard"){
        return (
            <NavSignOut handleRoute={handleRoute} />
        )
    } else if (route === "login") {
        return (
            <NavSignIn
            handleRoute={handleRoute} />
        )
    } 
     else if (route === "register") {
        return (
            <NavSignIn
            handleRoute={handleRoute} />
        )
    }
    //else if (route === "login") {
    //     return (
    //         <NavSignIn
    //         handleRoute={handleRoute} />
    //     )
    // } 
    // else {
    //     return (
    //         <Navbar handleRoute={handleRoute} />
    //     )
    // }
        
    
}

export default Navigation;