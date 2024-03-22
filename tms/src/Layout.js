import { Link, Outlet } from "react-router-dom";

const Layout = () => {

    // const alertUser=()=>{
    //     swal({title: "Login Required",
    //     text: "Please Login to Acess Dashboard",
    //     icon: "warning",
    // })
    // }


    return (
        <>
            <header>
                <div className="nav-bar">
                    <Link to="Home" className="cards">Home</Link>
                    <Link to="TaskForm" className="cards">Manage Task</Link>

                    <Link to="LogIn" className="cards">LogIn</Link>


                </div>
                    <div className="heading">Task Management System</div>
            </header>
            <div>
                <Outlet />
            </div>

            <footer className="footer">
                <div>

                </div>
            </footer>
        </>
    )
}

export default Layout;