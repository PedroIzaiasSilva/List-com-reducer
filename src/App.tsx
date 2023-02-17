import { ChangeEvent, useState } from "react";
import { usePeopleList } from "./hooks/peopleList";

const App = () => {
  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('')

  const handleAddButon = () => { 
    if (nameInput) { 
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameInput('');
    }
  }
  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => { 
    setNameInput(e.target.value)
  }

  const deletePerson = (id: string) => { 
    dispatch({
      type: 'DEL',
      payload: {
        id
      }
    });
  }
  const handleOrderButton = () => { 
    dispatch({
      type: 'ORDER'
    })
  }

  return (
    <div className="p-5">
      <input className="border-2 mr-3" type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButon}>Adicionar</button>
      <hr />
      <button onClick={handleOrderButton}>Ordernar</button> <br/>
      Lista de pessoas:
      <ul>
      {list.map((item, index)=>(
        <li key={index}>{item.name}
          <button onClick={() => deletePerson(item.id)}> [Deletar]</button> </li>
      ))}
      </ul>
    </div>
  );
}

export default App
