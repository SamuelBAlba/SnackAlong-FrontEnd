import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
    let navigate = useNavigate();

    const addSnack = (newSnack) => {
        axios
          .post(`${API}/snacks`, newSnack)
          .then(
            () => {
              navigate(`/snacks`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
    };


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

    const handleTextChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSnack(snack);
    };


    return (
        <div className="New">
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

                <label id="type" value={snack.type} onChange={handleTextChange} required>Type:</label>
                <select>
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
        </div>
    )
};

export default SnackNewForm;


