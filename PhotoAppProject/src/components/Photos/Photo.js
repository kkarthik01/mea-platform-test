import "./Photo.css";
import { useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const Photo = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const getPhotos = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        setPhotos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPhotos();
  }, []);
  return (
    <Container className="container-div">
      {photos.length ? (
        <Row>
          {photos.map((photo) => (
            <Col key={photo.id} md={3} xs={12} className="photo-div">
              <Card>
                <Card.Header>{photo.author}</Card.Header>
                <Card.Img
                  variant="top"
                  src={photo.download_url}
                  className="photo-img"
                />
                <Card.Body className="btn-wrapper">
                  <Button className="btn btn-dark" href={photo.url}>
                    View Source
                  </Button>
                  <Link className="btn btn-dark" to={`/photos/${photo.id}`}>
                    View Enlarge
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="spinner-div">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      )}
    </Container>
  );
};

export default Photo;
