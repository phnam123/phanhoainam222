/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import axios from 'axios';

const TourList = () => {

const url = "http://localhost:8080/api/products/findAll";
    
const [tours, setTours] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:3000',
              
            }
          }); 
        setTours(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} />
      ))}
    </div>
  );
};

export default TourList;