import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./githubSingleUser.css";
import GitProfileRender from "./GitProfileRender";
function App() {
  const [UsersData, setUsersData] = useState([]);
  
  const [Url, setUrl] = useState(
    `https://api.github.com/users/${"arunkumar201"}`
  );
  const [Input, setInput] = useState("arunkumar201");
  
  useEffect(() => {
    getUsersData();
  }, [Url]);
  let getUsersData = async () => {
    await axios
      .get(Url)
      .then((res) => {
        setUsersData(res.data);
      })
      .catch((err) => {
      alert(`Username ${UsersData.login}Not Found`);
        setUsersData([]);
      });
  };
  //On change Handler
  let ChangeHandler = (e) => {
    setInput(e.target.value);
  };

  let EnterKeyHandler = (e) => {
    if (e.keyCode === 13) {
      ClickHandler();
    }
  };
  let ClickHandler = () => {
    let URL = `https://api.github.com/users/${Input}`;
    setUrl(URL);
    setInput("");
  };

  return (
    <div>
   
      <div
        style={{ display: "flex", justifyContent: "center", height: "5vh",position:'relative',top: '2rem'}}
      >
        <input
          type="text"
          placeholder="Your Username..."
          value={Input}
          onChange={ChangeHandler}
          className="Input-Element"
          onKeyDown={EnterKeyHandler}
        />
        <button
          style={{
            textAlign:'center',
            color: "green",
            alignContent:'center',
            padding: '10px 15px',
            backgroundColor: '#4CAF50',
              color:' white',
           border: 'none',
             borderRadius: '5px',
               cursor: 'pointer',
            marginLeft:'12px'
          }}
          onClick={ClickHandler}
        >
          Get Data
        </button>
      </div>
      {UsersData.length == 0 ? (
        <h3>UserName Not Found</h3>
      ) : (
        <GitProfileRender UsersData={UsersData} />
      )}
    </div>
  );
}

export default App;
