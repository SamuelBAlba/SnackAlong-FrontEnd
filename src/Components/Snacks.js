import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;


function Snacks() {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios.get(`${API}/snacks`)
            .then((response) => setSnacks(response.data))
            .catch((e) => console.warn("catch", e));
    }, []);



    return (

        <div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Is Healthy</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Sugar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {snacks.map((snack) => {
                            return <Snack key={snack.id} snack={snack} />
                        })}
                    </tbody>
                </table>
            </section>

        </div>

    )
};

export default Snacks;

