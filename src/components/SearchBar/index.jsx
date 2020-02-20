
import React from 'react'
import styled from 'styled-components'
import { filter, includes } from 'lodash'
import TextField from '@material-ui/core/TextField';
import MemberRow from '../FamilySearch/MemberRow'

import { removeDash } from '../../helpers/helpers'
import { media } from '../../helpers/media'

const SearchBar = ({ setResults, data, className, showResults, results, setShowResults, setPerson }) => {
  const handleSearch = event => {
    // Setting the inputs and results to lowerCase so that the search bar isn't case sensative.
    const input = event.target.value.toLowerCase()
    // Remove the dash from input so that users can search with or without the '-'
    const searchParams = removeDash(input)
    if (searchParams) {
      const results = filter(data, result => {
        const name = result["name"].toLowerCase()
        const number = removeDash(result["id"])
        return includes(name, searchParams) || includes(number, searchParams)
      })
      setResults(results)
    } else {
      setResults([])
    }
  }

  return <div className={className}>
    <StyledTextField
      id="standard-search"
      label="Enter name or code"
      variant="filled"
      type="search"
      onChange={handleSearch}
    />
    {showResults ?
      <SearchResults showResults={showResults}>
        <MemberRow familyData={results} setPerson={setPerson} setShowResults={setShowResults} />
      </SearchResults>
    : null}
  </div>
}

export default styled(SearchBar)`
  width: 100%;
  margin: 20px;
  position: relative;
`

const StyledTextField = styled(TextField)`
  background: white;
  width: 100%;
  flex-grow: 1;
`

const SearchResults = styled.div`
  background: white;
  color: black;
  max-height: 200px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
  overflow: scroll;
  position: absolute;
  z-index: 200000;

  ${media.phone} {
    max-width: 355px;
  }
`
