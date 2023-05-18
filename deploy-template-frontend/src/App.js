import axios from "axios";
import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";
import { BASE_URL } from "./constants/url";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(BASE_URL + "/users");
      setUsers(response.data);
    } catch (error) {
      console.error(error?.response?.data);
      window.alert(error?.response?.data);
    }
  };

  return (
    <div>
      {users.map((user) => {
        return <UserCard user={user} />;
      })}
    </div>
  );
}

export default App;
