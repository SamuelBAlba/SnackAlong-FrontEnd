import { Link } from "react-router-dom";

function Snack({ snack }) {

  const isHealthy = (snack) => {

    if(snack.sugar <= 5 && snack.sodium <= 140 && snack.protein > 1 ) {
      return true
    } else {
      return false
    }
  }
  
 
  return (
    <tr>
      <td>
        {isHealthy(snack) ? (
          <span>✔️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
        
      </td>
      <td>
        <Link to={`/snacks/${snack.id}`}><p>{snack.name}</p></Link>
      </td>
      <td>
          {snack.type}
      </td>
      <td>{snack.sugar}g</td>
    </tr>
  );
}

export default Snack;