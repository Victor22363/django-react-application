import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import VideoPlayer from "./VideoPlayer.jsx";
import GetSpecificData, {GetAllData, GetFilteredData} from "./GetData.jsx";
import NavBar from "./NavBar.jsx";

function App({ name }) {

  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<NavBar/>}/>
            <Route exact path="/get/:idNum" element={<GetSpecificDataWrapper/>}/>
            <Route exact path="/get-all" element={<GetAllDataWrapper/>}/>
          </Routes>
      </Router>
    </div>
  );
}

function GetSpecificDataWrapper() {
  const { idNum } = useParams();
  const link = `http://127.0.0.1:8000/static/${idNum}/playlist.m3u8`;

  // State to store the fetched data
  const [data, setData] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch specific data
        const response = await fetch(`http://127.0.0.1:8000/api/${idNum}`);
        const dataLocal = await response.json();

        // Fetch and filter data
        const responsefiltered = await fetch(`http://127.0.0.1:8000/api/filterbyseason/${dataLocal.show}`);
        const dataListLocal = await responsefiltered.json();

        // Set the filtered data to state
        setData(dataLocal);
        setDataList(dataListLocal);
      } catch (error) {
        // Handle errors
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idNum]); // Make sure to include any dependencies that useEffect relies on

  return (
    <div>
      {/* Render your VideoPlayer component with the link and dataList */}
      <VideoPlayer src={link} />
      <h1>{data.show}</h1>
      {dataList.map(item => (
        <a href={item.id} >Episode{item.id}</a>
      ))}
    </div>
  );
}

function GetAllDataWrapper() {
  const data = GetAllData();
return(
<div>
  {data.map((item) => (
  <div key={item.id}>
  
    <div>id: {item.id}</div>
    <div>title: {item.title}</div>
    <div>episode: {item.epNum}</div>

  </div>
    ))}
</div>
);
}

export default App;