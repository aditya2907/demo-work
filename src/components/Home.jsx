import React from 'react';
import { Typography } from '@mui/material';

function Home() {
  return <Typography variant="h4">Home Page</Typography>;
}

export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/data');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Data from SQL Server</h1>
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li> // Adjust based on your data structure
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
