import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetSpecificData = (id) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                let address = `http://127.0.0.1:8000/api/${id.toString()}/`;
                //console.log(address);
                const response = await axios.get(address);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data123:', error);
            }
        };

        fetchData();
    }, [id.id]);

    return data;
};

export const GetAllData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/");
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data321:', error);
            }
        };

        fetchData();
    }, []);

    return data;
};

export const GetFilteredData = (id) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/filteredbyseason/${id}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data312:', error);
            }
        };

        fetchData();
    }, []);

    return data;
};


export default GetSpecificData;
