import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();

    const [snack, setSnack] = useState({
        name: "",
        type: "",
        sugar: 0,
        protein: 0,
        fiber: 0,
        sodium: 0,
        calories: 0,
        url: ""
    });

    const updateSnack = (updatedSnack) => {
        axios
          .put(`${API}/snacks/${id}`, updatedSnack)
          .then(
            () => {
              navigate(`/snacks/${id}`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
    };


    const handleTextChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value });
    };

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`).then(
          (response) => setSnack(response.data),
          (error) => navigate(`/not-found`)
        );
      }, [id, navigate]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateSnack(snack, id);
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                id="name"
                type="text"
                value={snack.name}
                onChange={handleTextChange}
                placeholder="Name of Snack"
                required
                />

                <label htmlFor="type">Type:</label>
                <select id="type" value={snack.type} onChange={handleTextChange}>
                    <option value="">Select a Type</option>
                    <option value="Salty">Salty</option>
                    <option value="Sweet">Sweet</option>
                    <option value="Sour">Sour</option>
                </select>


                <label htmlFor="sugar">Sugar:</label>
                <input
                id="sugar"
                type="number"
                value={snack.sugar}
                onChange={handleTextChange}
                placeholder="Sugar"
                required
                />

                <label htmlFor="protein">Protein:</label>
                <input
                id="protein"
                type="number"
                value={snack.protein}
                onChange={handleTextChange}
                placeholder="Protein"
                required
                />

                <label htmlFor="fiber">Fiber:</label>
                <input
                id="fiber"
                type="number"
                value={snack.fiber}
                onChange={handleTextChange}
                placeholder="Fiber"
                required
                />

                <label htmlFor="sodium">Sodium:</label>
                <input
                id="sodium"
                type="number"
                value={snack.sodium}
                onChange={handleTextChange}
                placeholder="Sodium"
                required
                />


                <label htmlFor="calories">Calories:</label>
                <input
                id="calories"
                type="number"
                value={snack.calories}
                onChange={handleTextChange}
                placeholder="Calories"
                />

                <label htmlFor="img">Image:</label>
                <input
                id="img"
                type="text"
                value={snack.img}
                onChange={handleTextChange}
                placeholder="Image of Snack"
                />

                <br/>

                <input type="submit"/>
            </form>
            <Link to={`/snacks/${id}`}>
                <button>Go Back</button>
            </Link>
        </div>
    )
}

export default SnackEditForm;