import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to="/snacks">SNACK-A-MILLION</Link>
            </h1>
            <button>
                <Link to="/snacks/new">Add A Snack</Link>
            </button>
        </nav>
    )
};