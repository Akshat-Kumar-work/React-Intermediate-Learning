import { Outlet } from "react-router-dom";

function MainHeader(){

    return(
        <div>
                {/* to render the children router of parent router use outlet */}
                <Outlet></Outlet>
        </div>
    )
    
}

export default MainHeader;