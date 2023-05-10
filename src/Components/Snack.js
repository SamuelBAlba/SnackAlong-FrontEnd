import { Link } from "react-router-dom";

function Snack({ snack }) {
 
  return (
    <tr>
      <td>
        {/* {song.is_favorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )} */}
        yes
      </td>
      <td>
        <Link to={`/snacks/${snack.id}`}><p>{snack.name}</p></Link>
      </td>
      <td>
          {snack.type}
      </td>
      <td>{snack.sugar}</td>
    </tr>
  );
}

export default Snack;