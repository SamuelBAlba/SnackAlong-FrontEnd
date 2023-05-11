import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {
    const [singleSnack, setSingleSnack] = useState([]);
    const { id } = useParams;
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
        
            .then((response) => {
                setSingleSnack(response.data)
                // console.log(singleSnack)
                // console.log(`${id}`)
            }).catch((e) => {
                console.warn("catch", e)
            })
    }, [id]);

    const deleteSnack = () => {
        axios.delete(`${API}/snacks/${id}`)
            .then(() => {
                navigate(`/snacks`);
            }, (error) => console.error(error))
            .catch((c) => console.warn("catch", c))
    };

    const handleDelete = () => {
        deleteSnack()
    };

    return (
        <article>
            <h3>Is Healthy</h3>
            <h4>Snack Name: {singleSnack.name}</h4>
            <h4>Snack Type:{singleSnack.type}</h4>
            <h4>Sugar:{singleSnack.sugar}</h4>
            <h4>Protein:{singleSnack.protein}</h4>
            <h4>Fiber:{singleSnack.fiber}</h4>
            <h4>Sodium: {singleSnack.sodium}</h4>
            <h4>Calories:{singleSnack.calories}</h4>
            <h4>Image:{singleSnack.img}</h4>

            <div>
                <Link to="/snacks">
                    <div>
                        <button>Back</button>
                    </div>
                </Link>

                <Link to={`/snacks/${id}/edit`}>
                    <div>
                        <button>Edit</button>
                    </div>
                </Link>

                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
};