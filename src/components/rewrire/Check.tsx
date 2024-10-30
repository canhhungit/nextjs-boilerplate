'use client';
import React, { useEffect, useState } from 'react';

const CheckPage: React.FC = () => {
  console.log(111, 'CheckPage');

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const [data, setData] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('api/todos/1');
      const jsonData = await res.json();
      console.log('response', jsonData);
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Check Component</h1>
      <p>This is the Check component.</p>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CheckPage;
