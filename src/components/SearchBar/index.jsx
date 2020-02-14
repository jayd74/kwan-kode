
import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { filter, includes } from 'lodash'
import { removeDash, formatSearch } from '../../helpers/helpers'

const SearchBar = ({ setResults, data, className }) => {

  const handleSearch = event => {
    // Setting the inputs and results to lowerCase so that the search bar isn't case sensative.
    const input = event.target.value.toLowerCase()

    // Remove the dash from input so that users can search with or without the '-'
    const searchParams = formatSearch(input)
    if (searchParams) {
      const results = filter(data, result => {
        const keywords = result.keywords
        const name = result["name"].toLowerCase()
        const number = removeDash(result["id"])
        return includes(keywords, searchParams) || includes(number, searchParams)
      })
      setResults(results)
    } else {
      setResults([])
    }
  }

  return (
    <TextField
      id="standard-search"
      label="Enter name or code"
      variant="filled"
      type="search"
      margin="normal"
      onChange={handleSearch}
      className={className}
    />
  )
}

export default styled(SearchBar)`
  margin: 10px auto;
  width: 100%;
  background: white;
`
