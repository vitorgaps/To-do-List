import React,{useState} from 'react';
import { Modal, Fade, IconButton, Backdrop, Button, Card, TextField } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Check, Clear } from '@material-ui/icons';
import ToDoCard from './componentes/ToDoCard/card';
import './pagina.css';

export default function Pagina() {
  const [open, setOpen] = React.useState(false);
  const [relevancia,setRelevancia] = useState("#4ec464");
  const [form, setForm] = React.useState(true);
  const [newItem, setNewItem] = useState('');
  const [tasks, setTasks] = useState([]);

  const criaTarefa = () => {
    setForm(true);
    setOpen(true);
  }

  const criaConjunto = () => {
    setForm(false);
    setOpen(true);
  }

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function addNewTask(task) {
    var descricao = document.getElementById("descricao").value;
    if(descricao == ''){
      alert("Preencha o campo descrição!");

    }else{
      const itensCopy = Array.from(tasks);
      itensCopy.push({ id: tasks.length, value: newItem });
      setTasks(itensCopy);
    }    
  }

  function updateTask({ target }, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <div className="pagina">
      <h1>To-do List</h1>

      <div id="cas">
        <Button id="ButtonGp" onClick={criaTarefa}>Criar tarefa</Button>
        {/* <Button id="ButtonGp" onClick={criaConjunto}>Criar conjunto de tarefas</Button> */}
      </div>

      {tasks.map(({ id, value }, index) => (
        <ToDoCard
         key={id}
         description={value}
         prioridade={relevancia}
         onChange={(event) => updateTask(event, index)}
         onDelete={() => deleteTask(index)}         
         />
      ))}


      {/* <ItemToDo/> */}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"

        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div>
            <Card id="CriaEdita">
              <form>
                <TextField id="descricao" label="Descrição" multiline={true}
                  onChange={setNewTask}                   
                />
              </form>

              {form ?
                <FormControl id="selectLabel">
                  <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>

                  <Select
                    tabelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value = {relevancia} 
                    onChange={(e) => setRelevancia(e.target.value)}
                  >
                    <MenuItem value={"#ac0000"}>Alta</MenuItem>
                    <MenuItem value={"#ff8521"}>Média</MenuItem>
                    <MenuItem value={"#4ec464"}>Baixa</MenuItem>
                  </Select>

                </FormControl> : <p></p>}

              <div>
                <IconButton aria-label="criar">
                  <Check                  
                    style={{ color: "#00ACC1", fontSize: 25 }}
                    onClick={addNewTask}
                    />
                </IconButton>

                <IconButton aria-label="limpar" onClick={handleClose}>
                  <Clear
                    style={{ color: "#00ACC1", fontSize: 25 }} />
                </IconButton>
              </div>
            </Card>
          </div>
        </Fade>
      </Modal>

    </div>
  );
}