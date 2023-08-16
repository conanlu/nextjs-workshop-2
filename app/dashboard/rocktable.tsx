//TODO: When you click on a row, the app should print (console.log) the name of its rock 
// This means making this table a client component and adding an onClick event

export function RockTable({ rocks }) {

  return( 
    <div><table className="table-auto">
  <thead>
    <tr>
      <th>rock</th>
      <th>id</th>
      <th>mohs</th>
    </tr>
  </thead>
  <tbody>

    {rocks.map((rock) =>
    <tr>
      <td>{rock.name}</td>
      <td>{rock.id}</td>
      <td>{rock.mohs}</td>
    </tr>

    )}
    
  </tbody>
</table>

</div> )
}


