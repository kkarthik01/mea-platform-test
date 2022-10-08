import "./NewsList.css";

import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import ImageNotFound from '../../assets/image-not-found.jpg'
const NewsList = ({newsList}) => {

  return (  
    <Container>
      <Row>
        {newsList && newsList.map((singleNews, index) => (
          <Col md={4} key={index} className="single-news">
            <Card>
              <Card.Img variant="top" src={singleNews.urlToImage != null ? `${singleNews.urlToImage}` : `${ImageNotFound}`} alt="news" />
              <Card.Body>
                <Card.Title>
                  {singleNews.title!= null && singleNews.title.length > 100
                    ? `${singleNews.title.slice(0, 100)}...`
                    : singleNews.title}
                </Card.Title>
                <Card.Text>
                  {singleNews.description!= null && singleNews.description.length > 180
                    ? `${singleNews.description.slice(0, 180)}...`
                    : singleNews.description}
                </Card.Text>
                <Link className="btn btn-dark" to={`/news/${index}`}>Read more</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewsList;
