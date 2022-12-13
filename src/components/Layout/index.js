
import NavBar from "../Navbar"
import Footer from "../Footer"
import PreLoader from "../Pre"

import { useEffect, useState } from "react"
const Layout = (props) => {

    const [load, upadateLoad] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        upadateLoad(false);
      }, 1200);
  
      return () => clearTimeout(timer);
    }, []);
    return(
        <>
        <PreLoader load={load}/>
        <NavBar />
            <main>{props.children}</main>
        <Footer/>
        </>
    )
}

export default Layout