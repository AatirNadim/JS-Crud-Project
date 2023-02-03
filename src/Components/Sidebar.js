import { Box } from '@mui/system'
import React from 'react'
import ListItem from './ListItem'

const Sidebar = () => {
  return (
    <Box>
        <ListItem name = 'Add Student'/>
        <ListItem name = 'Manage Students'/>
        <ListItem name = 'Logout'/>
    </Box>
  )
}

export default Sidebar