import React from 'react'
import styled from 'styled-components'
import Rorgchart from 'r-orgchart';

import { makeTreeData } from '../../helpers/helpers'

const FamilyTree = ({data, className}) => {
  const treeData = makeTreeData(data)
  return <div className={className}>
    <h3>Family Tree</h3>
    <Rorgchart data={treeData} />
  </div>
}

export default styled(FamilyTree)`
  position: relative;
  top: 300px;
`
