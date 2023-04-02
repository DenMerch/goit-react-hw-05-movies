import { NavLink } from "react-router-dom"
import { Suspense } from "react";
import { Outlet } from "react-router-dom";



export const Layout = () => {
    return (
        <>
            <div className="section">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            {/* <Route path="/movies" element={<Products />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}



        </>

    )
}