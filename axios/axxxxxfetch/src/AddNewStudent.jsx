import React, { useState } from 'react';
import axios from 'axios';

const AddNewStudent = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("name =", name);
    console.log("age =", age);

    const newStudent = {
      name: name,
      age: age,
    };

    try {
      const response = await axios.post('http://localhost:9090/api/student', newStudent);
      console.log('Response', response.data);
    } catch (error) {
      console.log("Error adding student:", error);
    }
  };

  return (
    <div>
      <h2>Welcome</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder='Enter name'
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            placeholder='Enter age'
            onChange={(event) => setAge(event.target.value)}
            value={age}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewStudent;




















// import React, { useEffect, useState } from 'react'
// import axios from 'axios'



// const AddNewStudent= () => {
//     const [name,setName] = useState('')
//     const [age,setAge] = useState('')

//     const kpt = async (event) =>{
//         event.preventDefault();
//         console.log(event)
//         console.log("name =" + name)
//         console.log("age = " +age)

//         const x = {
//             name:name,
//             age:age,
//         }

//         try{
//             const response =await axios.post('http://localhost:9090/api/student',x);

//             console.log('Response ' ,response.data)
//         }catch (error) {
//             console.log("thts error " ,error)
//         }
    
//     }

    
//     return(
//         <div>
//             <h2>wecls</h2>
//             <form action={kpt}>
//                 namwe: <input type="text"  placeholder='enter name' onChange={ () => setName(event.target.value)} />
    
//             </form>
            
//         </div>
//     );

// }







// const Form = () => {
//     const [students, setStudents] = useState([]);

    
//     useEffect(() => {
  
//         const fetchStudents = async () => {
//             try {
         
//                 const response = await axios.get('https://api.example.com/students');
//                 setStudents(response.data);
//             } catch (error) {
//                 console.error('Error fetching student data:', error);
//             }
//         };

//         fetchStudents(); 
//     }, []);

//     return (
//         <div>
//             <h1>Student List</h1>
//             <ul>
//                {students.map(( students) => {
//                 <li key={students.id} > {students.name} </li>
//                })}
//             </ul>
//         </div>
//     )
// }
