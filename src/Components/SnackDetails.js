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
            <h3></h3>
            <h4>{singleSnack.name}</h4>
            <h4>{singleSnack.type}</h4>
            <h4>{singleSnack.sugar}</h4>
            <h4>{singleSnack.protein}</h4>
            <h4>{singleSnack.fiber}</h4>
            <h4>{singleSnack.sodium}</h4>
            <h4>{singleSnack.calories}</h4>
            <h4>{singleSnack.img}</h4>
        </article>
    )
}