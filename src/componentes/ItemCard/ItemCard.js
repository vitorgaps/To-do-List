import React from 'react';
import ToDoCard from '../ToDoCard/card';
import {Card, IconButton, CardHeader} from '@material-ui/core';
import {DeleteOutlineOutlined, AddCircle } from '@material-ui/icons';

export default function ItemToDo() {
    return (
        <Card id="cardItens">
            <CardHeader style={{
                color: "#fff",
                backgroundColor: "#00ACC1",
            }}
                title="Item"
                avatar="0%"
                action={
                    <IconButton aria-label="excluir">
                        <DeleteOutlineOutlined style={{ color: "#ffff" }} />
                    </IconButton>
                }
            />
            <ToDoCard />
            <ToDoCard />
            <ToDoCard />

            <IconButton aria-label="criar">
                <AddCircle
                    style={{ color: "#00ACC1", fontSize: 25 }} />
            </IconButton>
        </Card>
    );
}