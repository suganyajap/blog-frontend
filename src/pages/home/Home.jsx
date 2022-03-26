import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";
import Loader from "react-loader-spinner";

function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [loading, setLoading] = useState(false);

  // console.log(search);

  //get posts
  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://my-blog-app-back.herokuapp.com/api/posts"
    );
    console.log(res.data.posts);
    setPosts(res.data.posts);
    setLoading(false);
  };

  useEffect(() => {
    console.log("Posts mounted in home");
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />

      <div className="home">
        {loading ? (
          <div className="d-flex justify-content-center m-5">
            <Loader type="TailSpin" color="#25283D" height={100} width={100} />
          </div>
        ) : (
          <Posts posts={posts} />
        )}

        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default Home;