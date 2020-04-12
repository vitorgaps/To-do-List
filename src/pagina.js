import React from 'react';
import { ButtonGroup,Button, Card, TextField, CardActions } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { Check, Close, Clear } from '@material-ui/icons';
import { AddCircle } from '@material-ui/icons';
import './pagina.css';
import ToDoCard from './componentes/ToDoCard/card';
import ItemToDo from './componentes/ItemCard/ItemCard';

export default function Pagina() {
  return (
    <div className="pagina">
      <h1>To-do List</h1>

      <div>
        <Button id="ButtonGp">Criar tarefa</Button>
        <Button id="ButtonGp">Criar conjunto de tarefas</Button>
      </div>

      <ToDoCard />
      <ItemToDo />
            
    </div>
  );
}