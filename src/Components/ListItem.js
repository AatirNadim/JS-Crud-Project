import React from 'react'

const ListItem = (props) => {
    console.log(props);
  return (
    <div>{props.name}</div>
  )
}

export default ListItem