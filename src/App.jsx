import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './App.css';

const App = () => {
  const [cpuUsage, setCpuUsage] = useState([]);
  const [memoryUsage, setMemoryUsage] = useState([]);
  const [diskUsage, setDiskUsage] = useState([]);

  useEffect(() => {
    // Simulating data fetching from a Windows monitoring service
    const fetchData = () => {
      const now = new Date();
      const newDataPoint = {
        time: now.toLocaleTimeString(),
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
      };

      setCpuUsage(prev => [...prev.slice(-19), newDataPoint]);
      setMemoryUsage(prev => [...prev.slice(-19), newDataPoint]);
      setDiskUsage(prev => [...prev.slice(-19), newDataPoint]);
    };

    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Windows Monitoring Dashboard</h1>
      <div className="chart-container">
        <h2>CPU Usage</h2>
        <LineChart width={600} height={300} data={cpuUsage}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="cpu" stroke="#8884d8" />
        </LineChart>
      </div>
      <div className="chart-container">
        <h2>Memory Usage</h2>
        <LineChart width={600} height={300} data={memoryUsage}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="memory" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="chart-container">
        <h2>Disk Usage</h2>
        <LineChart width={600} height={300} data={diskUsage}>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="disk" stroke="#ffc658" />
        </LineChart>
      </div>
    </div>
  );
};

export default App;