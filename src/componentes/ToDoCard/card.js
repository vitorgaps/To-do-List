import React, { useState } from 'react';
import { Backdrop, Fade, Modal, Card, Typography, IconButton, CardContent, Checkbox, CardActions } from '@material-ui/core';
import { LabelImportant, DeleteOutlineOutlined, EditOutlined, Check, Clear } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export default function ToDoCard(props) {
    const [open, setOpen] = React.useState(false);
    const [descricao, setDescricao] = useState(props.description);
    const [prioridade, setprioridade] = useState(props.prioridade);
    const [aux, setAux] = useState('');
    const [check, setCheck] = useState(false);

    const onMudado = () => {
        if(aux.length>0){
          aux===descricao?setDescricao(descricao):setDescricao(aux);    
        }        
        setOpen(false);
    }

    const riscar = (e) => {
        e ? setCheck(true) : setCheck(false);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card id="cards">
            <div id="textoSelecao">
                <Checkbox
                    checked={check}
                    onChange={(e) => riscar(e.target.checked)}
                    color="#fff"
                />

                {check && (
                    <CardContent>
                        <Typography id="Conteudo" variant="body2" color="textSecondary" component="p" multiline={true}
                            style={{ wordWrap: "brefalseak-word", textDecorationLine: 'line-through' }}>
                            {descricao}
                        </Typography>
                    </CardContent>
                )}

                {!check && (
                    <CardContent>
                        <Typography id="Conteudo" variant="body2" color="textSecondary" component="p" multiline={true}
                            style={{ wordWrap: "break-word", textDecorationLine: 'none' }}
                        >
                            {descricao}
                        </Typography>
                    </CardContent>
                )}

            </div>

            <CardActions>
                <IconButton aria-label="editar" onClick={handleOpen}>
                    <EditOutlined style={{ color: "#00ACC1" }} />
                </IconButton>

                <IconButton onClick={props.onDelete} aria-label="excluir">
                    <DeleteOutlineOutlined style={{ color: "#00ACC1" }} />
                </IconButton>

                <IconButton aria-label="prioridade" onClick={handleOpen}>
                    <LabelImportant style={{ color: prioridade }} />
                </IconButton>
            </CardActions>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"

                open={open}
                onClose={handleClose}
                // onChange={}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}>
                <Fade in={open}>
                    <div>
                        <Card id="CriaEdita">
                          <form>
                              <TextField id="standard-basic" label="Descrição" multiline={true}
                                  onChange={(e) => setAux(e.target.value)}                                  
                              />
                          </form>

                          <FormControl id="selectLabel">
                              <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>

                              <Select
                                tabelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={prioridade}
                                onChange={(e) => setprioridade(e.target.value)}
                              >
                                <MenuItem value={"#ac0000"}>Alta</MenuItem>
                                <MenuItem value={"#ff8521"}>Média</MenuItem>
                                <MenuItem value={"#4ec464"}>Baixa</MenuItem>
                              </Select>

                            </FormControl>

                            <div>
                              <IconButton aria-label="criar">
                                  <Check
                                    style={{ color: "#00ACC1", fontSize: 25 }}
                                    onClick={onMudado} />
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
        </Card>
    );
}
