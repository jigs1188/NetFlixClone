// VisualizationPage.js
import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios';
import './VisualizationPage.css';

const VisualizationPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const result = await axios.get(`${process.env.PUBLIC_URL}/csvjson (1).json`); // Ensure the path is correct
        console.log('Data fetched:', result.data);
        const fetchedData = result.data[0]['0']; // Adjust based on JSON structure
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching the data:', error);
        setError(error);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div className="error-container">
        <h2>Error loading data: {error.message}</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }

  if (!data) return <div className="loading-container">Loading...</div>;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          color: '#fff', // legend text color
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff', // x-axis text color
        },
      },
      y: {
        ticks: {
          color: '#fff', // y-axis text color
        },
      },
    },
  };

  const typeData = data.type_counts ? {
    labels: Object.keys(data.type_counts),
    datasets: [
      {
        label: 'Type Distribution',
        data: Object.values(data.type_counts),
        backgroundColor: ['#E50914', '#221f1f'],
      },
    ],
  } : {};

  const ratingData = data.rating_counts ? {
    labels: Object.keys(data.rating_counts),
    datasets: [
      {
        label: 'Rating Distribution',
        data: Object.values(data.rating_counts),
        backgroundColor: [
          '#E50914', '#221f1f', '#FFCE56', '#FF9F40', '#4BC0C0',
          '#9966FF', '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40',
          '#4BC0C0', '#9966FF', '#FF6384', '#36A2EB', '#FFCE56'
        ],
      },
    ],
  } : {};

  const genreData = data.genre_counts ? {
    labels: Object.keys(data.genre_counts),
    datasets: [
      {
        label: 'Genre Distribution',
        data: Object.values(data.genre_counts),
        backgroundColor: [
          '#E50914', '#221f1f', '#FFCE56', '#FF9F40', '#4BC0C0',
          '#9966FF', '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40',
          '#4BC0C0', '#9966FF', '#FF6384', '#36A2EB', '#FFCE56',
          '#FF9F40', '#4BC0C0', '#9966FF', '#FF6384', '#36A2EB',
          '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF', '#FF6384',
          '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0', '#9966FF',
          '#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'
        ],
      },
    ],
  } : {};

  const yearData = data.year_counts ? {
    labels: Object.keys(data.year_counts),
    datasets: [
      {
        label: 'Release Year Distribution',
        data: Object.values(data.year_counts),
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        fill: false,
      },
    ],
  } : {};

  return (
    <div className="visualization-page">
      <h2>Netflix Data Visualizations</h2>
      <div className="chart-container">
        <h3>Type Distribution</h3>
        {data.type_counts && <Doughnut data={typeData} options={chartOptions} />}
      </div>
      <div className="chart-container">
        <h3>Rating Distribution</h3>
        {data.rating_counts && <Bar data={ratingData} options={chartOptions} />}
      </div>
      <div className="chart-container">
        <h3>Genre Distribution</h3>
        {data.genre_counts && <Doughnut data={genreData} options={chartOptions} />}
      </div>
      <div className="chart-container">
        <h3>Release Year Distribution</h3>
        {data.year_counts && <Line data={yearData} options={chartOptions} />}
      </div>
    </div>
  );
};

export default VisualizationPage;
