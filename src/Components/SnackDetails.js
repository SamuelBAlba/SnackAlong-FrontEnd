import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {
    const [singleSnack, setSingleSnack] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
        
            .then((response) => {
                setSingleSnack(response.data)
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

    const isHealthy = (singleSnack) => {

        if(singleSnack.sugar <= 5 && singleSnack.sodium <= 140 && singleSnack.protein > 1 ) {
          return true
        } else {
          return false
        }
      }

    return (
        <article>
            <h3>
            {isHealthy(singleSnack) ? (
          <span>This Snack is Healthy</span>
        ) : (
            <span>This Snack is not Healthy</span>
        )}
            </h3>

            <h4>Snack Name: {singleSnack.name}</h4>
            <h4>Snack Type: {singleSnack.type}</h4>
            <h4>Sugar: {singleSnack.sugar}</h4>
            <h4>Protein: {singleSnack.protein}</h4>
            <h4>Fiber: {singleSnack.fiber}</h4>
            <h4>Sodium: {singleSnack.sodium}</h4>
            <h4>Calories: {singleSnack.calories}</h4>
            <img src={singleSnack.img} alt={singleSnack.name}/>

            <br/>

            <div>
                <Link to="/snacks">
                    <div>
                        <button>Back</button>
                    </div>
                </Link>

                <br/>

                <Link to={`/snacks/${id}/edit`}>
                    <div>
                        <button>Edit</button>
                    </div>
                </Link>

                <br/>

                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
};