import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/snacks">HEY SNACKS</Link>
            </h1>
            <button>
                <Link to="/snacks/new">Add A Snack</Link>
            </button>
        </nav>
    )
};