import './NewsList/NewsList.css'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import React from "react";
import ImageNotFound from '../assets/image-not-found.jpg'
const SingleNews = ({ newsList }) => {
  const { id } = useParams();
    let singleNews = newsList && id && newsList[id]
  return (
    <Container>
      <Row>
        {singleNews && (
          <Col md={{span: '4', offset: '4'}} className="single-news">
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
                <Button variant="dark">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SingleNews;
