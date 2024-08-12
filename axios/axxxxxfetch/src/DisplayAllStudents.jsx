import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DisplayAllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9090/api/student')
      .then(response => {
        setStudents(response.data);  // Accessing response.data to set the students
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student.req}>{student.req} {student.name}</li> // Assuming 'req' is the ID field
        ))}
      </ul>
    </div>
  );
}

export default DisplayAllStudents;
