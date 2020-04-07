import React from 'react';
import {Table,TableBody,Card,Typography,IconButton,CardContent,CardHeader,Checkbox, CardActions, TableRow, TableCell} from '@material-ui/core';
import {AddCircle,DeleteOutlineOutlined, EditOutlined} from '@material-ui/icons';
import './pagina.css';
import MaterialTableDemo from './material-table';


export default function Pagina(){
  return(
    <div className="pagina">
      <h1>To-do List</h1>
      <Card id="cards">
        <Checkbox
          color="#fff"        
        />
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>

        <CardActions>
          <IconButton aria-label="editar">
            <EditOutlined style={{color:"#00ACC1"}}/>
          </IconButton>

          <IconButton aria-label="editar">
            <DeleteOutlineOutlined style={{color:"#00ACC1"}}/>
          </IconButton>
        </CardActions>      
      </Card>

      <Card id="cardItens">
        <CardHeader style={{color:"#fff",backgroundColor:"#00ACC1"}}
        title="Item: "
        avatar="0%"
        />
        <MaterialTableDemo/>
      </Card>

    
      <IconButton aria-label="editar">
            <AddCircle                         
            style={{color:"#00ACC1", fontSize: 40}}/>
     </IconButton>





    </div>    
  );
}