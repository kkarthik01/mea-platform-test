import "./Home.css";
import { useEffect } from "react";
import axios from "axios";
import {
  Container,
  Row
} from "react-bootstrap";
import { useState } from "react";

import Posts from "./Posts";

import MemberActiveStatusList from "./MemberActiveStatusList";
import ChatList from "./ChatList";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list");
        let resPosts = [...res.data];
        let postsWithRandomDetails = resPosts.map((post) => {
          let randomLikes = Math.ceil(Math.random() * 1000);
          let isLiked = false;
          let isCommented = false;
          let randomComments = Math.ceil(Math.random() * 50);
          let randomPostTimeline = Math.ceil(Math.random() * 6);
          let randomPostText = Math.ceil(Math.random() * 3);
          return {
            ...post,
            randomLikes,
            randomComments,
            isLiked,
            isCommented,
            randomPostTimeline,
            randomPostText,
          };
        });
        setPosts(postsWithRandomDetails);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  

  let randomChatList = posts.filter((post) => Number(post.id) % 5 === 0);
  let randomActiveList = posts.filter((post) => Number(post.id) % 3 === 0);
  return (
    <Container className="container-div">
      <Row>
        <MemberActiveStatusList posts={randomActiveList} />
        <Posts posts={posts} setPosts={setPosts} />
        <ChatList posts={randomChatList} />
      </Row>
    </Container>  
  );
};

export default Home;
