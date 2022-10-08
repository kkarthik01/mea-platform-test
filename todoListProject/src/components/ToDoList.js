import React from "react";
import { Container, InputGroup, Form, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./ToDoList.css";

const getList = () => {
    let list = localStorage.getItem('List');

    if (list) {
        return JSON.parse(localStorage.getItem('List'))
    } else {
        return [];
    }
}
function ToDoList() {
  const [toDoList, setToDoList] = useState(getList());

  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [inputDate, setInputDate] = useState("");

  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const addInput = () => {
    if (inputName && inputTitle && inputDescription && inputDate) {
      setToDoList([
        ...toDoList,
        {
          name: inputName,
          title: inputTitle,
          description: inputDescription,
          date: inputDate,
        },
      ]);
      setInputName("");
      setInputTitle("");
      setInputDescription("");
      setInputDate("");
    }
  };

  const deleteToDo = (inputIndex) => {
    setToDoList(toDoList.filter((toDo, index) => index !== inputIndex));
  };

    const EditToDo = (inputIndex) => {
        setToDoList(toDoList.map((todo, index) => {
            if (index === inputIndex) {
                setInputName(todo.name)
                setInputTitle(todo.title)
                setInputDescription(todo.description)
                setInputDate(todo.date)
            }
            return todo
        }))
        setToDoList(toDoList.filter((toDo, index) => index !== inputIndex));
    }
    
    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(toDoList))
    },[toDoList])
  return (
    <Container>
      <h1>To-Do-List</h1>
      {/* --------------NAME-------------------------------------------------------------------------- */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Name"
          aria-describedby="inputGroup-sizing-default"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </InputGroup>

      {/* -------------------TITLE--------------------------------------------------------------------------- */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Title"
          aria-describedby="inputGroup-sizing-default"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />
      </InputGroup>

      {/* ------------------------DESCRIPTION------------------------------------------------------------------------------- */}
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Description"
          aria-describedby="inputGroup-sizing-default"
          value={inputDescription}
          onChange={(e) => setInputDescription(e.target.value)}
        />
      </InputGroup>

      {/* -----------------------------DATE---------------------------------------------------------------------------------------- */}
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Text input with dropdown button"
          type="date"
          value={inputDate}
          onChange={(e) => setInputDate(e.target.value)}
        />
      </InputGroup>

      <Button variant="dark" size="lg" onClick={() => addInput()}>
        Add
      </Button>

      {/* ---------------------------CARD---------------------------------------------------------------------------------------- */}

      {toDoList.map((toDo, index) => (
        <Card key={index} className="outer-card" md={4}>
          <Card.Header as="h5">{toDo.name}</Card.Header>
          <Card.Body>
            <Card.Title>{toDo.title}</Card.Title>
            <Card.Text>{toDo.description}</Card.Text>
            <Card.Text>{`Start Date: ${date}`}</Card.Text>
            <Card.Text>{`End Date: ${toDo.date}`}</Card.Text>
            <div className="outer-btn">
              <Button variant="warning" onClick={() => EditToDo(index)}>Edit</Button>
              <Button variant="danger" onClick={() => deleteToDo(index)}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default ToDoList;
