import React from 'react';
import { Backdrop, Fade, Modal, Card, Typography, IconButton, CardContent, Checkbox, CardActions } from '@material-ui/core';
import { LabelImportant, DeleteOutlineOutlined, EditOutlined, Check, Clear } from '@material-ui/icons';
import { TextField } from '@material-ui/core';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

export default function ToDoCard() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
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
                <IconButton aria-label="editar" onClick={handleOpen}>
                    <EditOutlined style={{ color: "#00ACC1" }} />
                </IconButton>

                <IconButton aria-label="excluir">
                    <DeleteOutlineOutlined style={{ color: "#00ACC1" }} />
                </IconButton>

                <IconButton aria-label="editar" onClick={handleOpen}>
                    <LabelImportant style={{ color: "#67af78" }} />
                </IconButton>
            </CardActions>

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
                                <TextField id="standard-basic" label="Descrição" multiline={true} />
                            </form>

                            <FormControl id="selectLabel">
                                <InputLabel id="demo-simple-select-label">Prioridade</InputLabel>

                                <Select
                                    tabelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                // value={Relevância}
                                // onChange={handleChange}
                                >
                                    <MenuItem value={10}>Alta</MenuItem>
                                    <MenuItem value={20}>Média</MenuItem>
                                    <MenuItem value={30}>Baixa</MenuItem>
                                </Select>

                            </FormControl>

                            <div>
                                <IconButton aria-label="criar">
                                    <Check
                                        style={{ color: "#00ACC1", fontSize: 25 }} />
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
