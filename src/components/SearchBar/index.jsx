
import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { filter, includes } from 'lodash'

const SearchBar = ({ setResults, data, className }) => {

  const handleSearch = event => {
    // Setting the inputs and results to lowerCase so that the search bar isn't case sensative.
    const searchParams = event.target.value.toLowerCase()
    if (searchParams) {
      const results = filter(data, result => {
        const familyName = result["name"].toLowerCase()
        return includes(familyName, searchParams)
      })
      setResults(results)
    } else {
      setResults([])
    }
  }

  return (
    <TextField
      id="standard-search"
      label="Search"
      variant="filled"
      type="search"
      margin="normal"
      onChange={handleSearch}
      className={className}
    />
  )
}

export default styled(SearchBar)`
  margin: 10px;
  max-width: 500px;
  background: white;
`
