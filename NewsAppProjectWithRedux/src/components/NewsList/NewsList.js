import "./NewsList.css";
import React from "react";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageNotFound from "../../assets/image-not-found.jpg";
import { fetchNews } from "../../redux/news/action";
import { useDispatch, useSelector } from "react-redux";

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news);
  const { newsList, loading, error } = news;

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  return (
    <Container>
      <Row>
        {loading ? (
          <div className="spinner-wrapper">
            <Spinner  animation="border" role="status"></Spinner>
            </div>
        ) : error ?
        <Alert  variant='danger' className="error-alert">
        {error}
      </Alert>
          :(   
          newsList.map((singleNews, index) => (
            <Col md={4} key={index} className="single-news">
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    singleNews.urlToImage != null
                      ? `${singleNews.urlToImage}`
                      : `${ImageNotFound}`
                  }
                  alt="news"
                />
                <Card.Body>
                  <Card.Title>
                    {singleNews.title != null && singleNews.title.length > 100
                      ? `${singleNews.title.slice(0, 100)}...`
                      : singleNews.title}
                  </Card.Title>
                  <Card.Text>
                    {singleNews.description != null &&
                    singleNews.description.length > 180
                      ? `${singleNews.description.slice(0, 180)}...`
                      : singleNews.description}
                  </Card.Text>
                  <Link className="btn btn-dark" to={`/news/${index}`}>
                    Read more
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default NewsList;
