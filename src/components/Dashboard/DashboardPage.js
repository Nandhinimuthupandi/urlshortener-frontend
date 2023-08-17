import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function DashboardPage() {
  const [dailyURLCounts, setDailyURLCounts] = useState([]);
  const [monthlyURLCounts, setMonthlyURLCounts] = useState([]);

  useEffect(() => {
    // Fetch daily and monthly URL counts from the server
    const fetchURLCounts = async () => {
      try {
        const response = await axios.get('/api/dashboard/url-counts');

        if (response.status === 200) {
          setDailyURLCounts(response.data.dailyURLCounts);
          setMonthlyURLCounts(response.data.monthlyURLCounts);
        }
      } catch (error) {
        console.error('Error fetching URL counts:', error);
      }
    };

    fetchURLCounts();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Daily URL Counts</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyURLCounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div>
        <h3>Monthly URL Counts</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyURLCounts}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="count" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardPage;
