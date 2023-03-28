import { useNavigate } from "react-router-dom";

function Labs(){


const navigate = useNavigate();
//const navigate = useNavigate();

    function clickHandler(){
        navigate("/about")
    }

    return(<div>

        <div>
        labs
        </div>
        

        <button onClick={clickHandler}>
            move to about page
        </button>

    </div> )
    
}
export default Labs;