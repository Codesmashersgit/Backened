
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, Setjokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
   
      .then((response) => {
        Setjokes(response.data);
      
       
      })
      
      .catch((error) => {
        console.log(error);
      });
     
  }
  );
 

  return (
    <div className='min-h-screen w-screen fixed bg-black'>
      <div className='text-3xl text-center text-white font-bold underline'>Jokes</div>
      <p className='text-white text-center text-2xl mt-[7%]'>Jokes: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3 className='text-white text-xl text-center flex flex-col m-5'>{joke.title}</h3>
            <p className='text-white text-center'>{joke.content}</p>
        
          </div>
        ))
      }
    </div>
  );
}

export default App;
