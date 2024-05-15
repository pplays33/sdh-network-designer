'use client'
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



const ErlangBCalculator = () => {
  const [A, setA] = useState(0); // Интенсивность трафика в Эрлангах
  const [Pb, setPb] = useState(0); // Целевая вероятность блокировки
  const [channels, setChannels] = useState(null); // Рассчитанное количество каналов 

  const factorialLn = (n) => {
    if (n === 0) return 0;
    return Math.log(n) + factorialLn(n - 1);
  };

  const calculateErlangB = (A, N) => {
    let numeratorLn = N * Math.log(A) - factorialLn(N);
    let denominatorLn = 0;
    for (let k = 0; k <= N; k++) {
      denominatorLn += Math.exp(k * Math.log(A) - factorialLn(k));
    }
    return Math.exp(numeratorLn - Math.log(denominatorLn));
  };

  const findMinimumChannels = (A, Pb) => {
    let N = Math.floor(A);
    while (calculateErlangB(A, N) > Pb) {
      N++;
    }
    return N;
  };

  const handleCalculate = () => {
    const requiredChannels = findMinimumChannels(A, Pb);
    setChannels(requiredChannels);
  };


  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch', marginLeft: '20px', color: 'white', },
      }}
      noValidate
      autoComplete="off"
    >
      <h2>Erlang B Calculator</h2>
      <div>
        <TextField id="outlined-basic" label="Traffic Intensity (A):" variant="outlined"
          type="number"
          value={A}
          onChange={(e) => setA(parseFloat(e.target.value))}
          placeholder="Enter load (Erlangs)"
          sx={{
            '.MuiInputLabel-root': { // Цвет текста label
              color: 'white',
            },
            '.MuiOutlinedInput-root': {
              color: 'white', // Цвет текста внутри input
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue', // Цвет обводки
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue', // Цвет обводки при наведении
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue', // Цвет обводки при фокусе
              },
            },
            
          }}
        />
      </div>
      <div>
        <TextField id="filled-basic" label="Blocking Probability (Pb):" variant="outlined"
          type="number"
          value={Pb}
          onChange={(e) => setPb(parseFloat(e.target.value))}
          placeholder="Enter blocking probability (e.g., 0.01 for 1%)"
          sx={{
            '.MuiInputLabel-root': { // Цвет текста label
              color: 'white',
            },
            '.MuiOutlinedInput-root': {
              color: 'white', // Цвет текста внутри input
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue', // Цвет обводки
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue', // Цвет обводки при наведении
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'blue', // Цвет обводки при фокусе
              },
            },
            
          }}
        />
      </div>
      <Button onClick={handleCalculate} variant="contained">Calculate Channels</Button>
      {/*       <button onClick={handleCalculate}>Calculate Channels</button> */}
      {channels !== null && <div>Required channels: {channels}</div>}
    </Box>
  );
};

export default ErlangBCalculator;
