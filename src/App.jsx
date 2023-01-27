// import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, addComments, addUsers } from "../AppSlice";

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
    dispatch(addPosts(response.data));
  };
  const fetchComments = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setName(response.data);
    dispatch(addComments(response.data));
  };
  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(response.data);
    dispatch(addUsers(response.data));
  };

  useEffect(() => {
    fetchComments();
    fetchPosts();
    fetchUsers();
  }, []);

  if (data.length <= 0) {
    return;
  }

  console.log(data);
  console.log(name);
  console.log(user);

  return (
    <>
      {data.map((post) => (
        <div key={post.id}>
          <h4>{post.id}</h4>
          <h4>{post.title}</h4>
          <h4>{post.userid}</h4>
          <h4>{post.body}</h4>
        </div>
      ))}
      {name.map((comments) => (
        <div key={comments.id}>
          <h4>{comments.id}</h4>
          <h4>{comments.name}</h4>
        </div>
      ))}
      {user.map((user) => (
        <div key={user.id}>
          <h4>{user.id}</h4>
          <h4>{user.name}</h4>
        </div>
      ))}
    </>
  );
}
export default App;
