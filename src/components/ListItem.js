import React from 'react';
import './ListItem.css';

// <ListItem country={country} key={index} />
const ListItem = ({index, country}) => {
  return (
  <option value={index}>{country.name.common}{country.flag}</option>
 )}

export default ListItem;