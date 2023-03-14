import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import api from "../services/API";
import Box from '@mui/material/Box';

const Infopokemon = ()=>{

api();
    return(
        <div>
            <p>
                Welcome 
            </p>

    <Box
      sx={{
        width: 1080,
        height: 1080,
        backgroundColor: '#3b0f07',
        '&:hover': {
          backgroundColor: '#3b0f07',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
 <Stack spacing={7} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </Box>
        </div>
    );
};

export default Infopokemon;
