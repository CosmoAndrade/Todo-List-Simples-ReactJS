
import './App.css';
import { useState } from 'react';


function App() {

 const [task, setTask] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    
    setTask(inputTask);
  }

  function handleAddItemToList(event) {
    event.preventDefault();

    /**
     * Evita o usuário adicionar uma tarefa sem nome
     */
    if (task) {
      /**
       * Adiciona no final no array a nova tarefa
       */
      setItemsList([...itemsList, task]);
      
      // Limpa o campo de input
      setTask("");
    }
  }

  const deleteTodo = (index) => {
      let newList = itemsList
      newList.splice(index,1)
      setItemsList([...newList])
  }

  return (
    <div className="App" >


     



      <form onSubmit={handleAddItemToList}>
        <h1>ToDo</h1>

        <input type="text" onChange={(event) => handleChangeInput(event)} value={task} />
        <button type="submit">Add</button>
        {/* <button onClick={ () => deleteTodo ()}>Delete</button> */}
        
       
      </form>

      {itemsList.map((item, index) => (
        <div
         key={index} >{item} &nbsp;
           <button   onClick={ () => deleteTodo ()}>Delete</button>
         </div>
      
      ))}

     

      


      </div>
    )
    
  
}

export default App;
