// src/components/Visualization.js
import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import Papa from 'papaparse';
import 'chart.js/auto';
import './Visualization.css';

const Visualization = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching data...');
      const response = await fetch('https://raw.githubusercontent.com/datasets/awesome-data/master/data/netflix_titles.csv');
      console.log('Data fetched:', response); // Log the response
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value);
      const parsedData = Papa.parse(csv, { header: true });
      setData(parsedData.data);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const typeCount = data.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const years = [...new Set(data.map(item => item.release_year))].sort();
  const releaseYearCount = years.map(year => data.filter(item => item.release_year === year).length);

  const ratingCount = data.reduce((acc, item) => {
    acc[item.rating] = (acc[item.rating] || 0) + 1;
    return acc;
  }, {});

 
  const barData = {
    labels: Object.keys(typeCount),
    datasets: [
      {
        label: 'Count by Type',
        data: Object.values(typeCount),
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
      },
    ],
  };

  const lineData = {
    labels: years,
    datasets: [
      {
        label: 'Releases per Year',
        data: releaseYearCount,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const pieData = {
    labels: Object.keys(ratingCount),
    datasets: [
      {
        label: 'Count by Rating',
        data: Object.values(ratingCount),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="visualization">
      <h2>Movies Data Visualization</h2>
      <div className="chart-container">
        <h3>Count by Type</h3>
        <Bar data={barData} />
      </div>
      <div className="chart-container">
        <h3>Releases per Year</h3>
        <Line data={lineData} />
      </div>
      <div className="chart-container">
        <h3>Count by Rating</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Visualization;
