import "./List.css";
import React, { useEffect } from "react";
import {
  Container,
  Card,
  InputGroup,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
const List = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [inputList, setInputList] = useState([]);

  const searchID = (input) => {
    if (input) {
      setInputList(
        inputList.filter(
          (singleList) => Number(input) === Number(singleList.id)
        )
      );
    } else {
      setInputList([...list]);
    }
  };

  useEffect(() => {
    const getList = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setList(res.data);
        setInputList(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  return (
    <Container>
      <InputGroup className="mb-3 input-bar">
        <Form.Control
          placeholder="Enter ID" 
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          variant="dark"
          id="button-addon2"
          onClick={() => searchID(input)}
        >
          Search
        </Button>
      </InputGroup>

      <Row>
        <Col className="outer-card" md={4} xs={12}>
          {inputList.map((SingleList, index) => (
            <Card key={index} className="inner-card">
              <Card.Header>{`UserID: ${SingleList.userId}`}</Card.Header>
              <Card.Body>
                <Card.Title>{`ID: ${SingleList.id}`}</Card.Title>
                <Card.Text>{`${SingleList.title}`}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default List;
