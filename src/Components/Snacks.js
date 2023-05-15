import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";
const API = process.env.REACT_APP_API_URL;

function Snacks() {
    const [snacks, setSnacks] = useState([]);
    const [originalSnacks, setOriginalSnacks] = useState([])

    useEffect(() => {
        axios.get(`${API}/snacks`)
            .then((response) => {
                setSnacks(response.data);
                setOriginalSnacks(response.data);
            })
            .catch((e) => console.warn("catch", e));
    }, []);

    const sortByType = (type) => {
        if (type) {
            const filteredSnacks = originalSnacks.filter((snack) => snack.type === type);
            setSnacks(filteredSnacks);
        } else {
            setSnacks(originalSnacks);
        }
    };
    

    return (
        <div>
            <section>
                <div className="Sort">
                    <button onClick={() => sortByType('Salty')}>Sort by Salty</button>
                    <button onClick={() => sortByType('Sweet')}>Sort by Sweet</button>
                    <button onClick={() => sortByType('Sour')}>Sort by Sour</button>
                    <button onClick={() => sortByType()}>Show all snacks</button>
                </div>
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

