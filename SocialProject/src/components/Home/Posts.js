import {
    Row,
    Col,
    Card,
    Button,
    Spinner,
    Badge,
} from "react-bootstrap";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaRegComment, FaRegUserCircle, FaComment } from "react-icons/fa";
import dummyPostText from "../../assets/dummyPosts.json";
import dummyPostTimeline from "../../assets/dummyPostTimeline.json";
const Posts = ({ posts, setPosts }) => {
    const toggleLikeCount = (postID) => {
        let updatedPosts = posts.map((post) => {
          if (post.id === postID) {
            if (post.isLiked) {
              post.randomLikes--;
              post.isLiked = false;
            } else {
              post.randomLikes++;
              post.isLiked = true;
            }
          }
          return post;
        });
    
        setPosts(updatedPosts);
      };
    
      const incrementCommentCount = (postId) => {
        let updatePosts = posts.map((post) => {
          if (post.id === postId) {
            if (!post.isCommented) {
              post.randomComments++;
              post.isCommented = true;
            }
          }
          return post;
        });
        setPosts(updatePosts);
      };
  return (
    <Col md={6} className="posts-section">
      {posts.length ? (
        <Row>
          {posts.map((post) => (
            <Col key={post.id} md={12} xs={12} className="photo-div">
              <Card>
                <Card.Header className="post-header">
                  <div>
                    <FaRegUserCircle /> {post.author}
                  </div>
                  <p style={{ marginBottom: "0px" }}>
                    {dummyPostTimeline[post.randomPostTimeline]}
                  </p>
                </Card.Header>
                <Card.Img
                  variant="top"
                  src={post.download_url}
                  className="photo-img"
                />
                <Card.Body>
                  <p className="lead">{dummyPostText[post.randomPostText]}</p>

                  <div className="action-btn-outer">
                    <Button
                      variant="light"
                      onClick={() => toggleLikeCount(post.id)}
                    >
                      {post.isLiked ? <AiFillLike /> : <AiOutlineLike />}{" "}
                      <Badge pill bg="dark">
                        {post.randomLikes}
                      </Badge>
                    </Button>

                    <Button
                      variant="light"
                      onClick={() => incrementCommentCount(post.id)}
                    >
                      {post.isCommented ? <FaComment /> : <FaRegComment />}{" "}
                      <Badge pill bg="dark">
                        {post.randomComments}
                      </Badge>
                    </Button>
                  </div>
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
    </Col>
  );
};

export default Posts;
