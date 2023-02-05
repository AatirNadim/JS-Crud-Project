import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const DeleteStudent = () => {
    const handleDelete = () => {
        console.log('delete');
    }

  return (
    <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete this student's information?
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            marginTop: '20px',
            // mt: '1px'
            // backgroundColor: 'red',
          }}
        >
          <Button
            variant='contained'
            sx={{
              '&:hover': {
                backgroundColor: '#ff2108',
                color: 'white',
              },
              backgroundColor: 'white',
              border: '1px solid #ff2108',
              // hover: {
              //   backgroundColor: 'red',
              // }
              color: '#ff2108',
              // fontWeight: 'bold',
              textTransform: 'capitalize',
            //   fontSize : '1vw'
            }}
            onClick={handleDelete}
          >
            {/* <Typography
              sx={{
                color: '#ff2108',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
              }}
            >Sign In</Typography> */}
            Delete
          </Button>
          <Button
            variant='contained'
            sx={{
              '&:hover': {
                backgroundColor: '#ff2108',
                color: 'white',
              },
              backgroundColor: 'white',
              border: '1px solid #ff2108',
              // hover: {
              //   backgroundColor: 'red',
              // }
              color: '#ff2108',
              // fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
            // onClick={handleSignUp}

          >
            {/* <Typography
              sx={{
                '&:hover': {
                  backgroundColor: 'red',
                  color: 'white',
                },
                color: '#ff2108',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
              }}></Typography> */}
            Cancel
          </Button>
        </Box>
    </Box>
  )
}

export default DeleteStudent