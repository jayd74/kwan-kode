import React from 'react'
import styled from 'styled-components'
import Rorgchart from 'r-orgchart';

import { getPrimaryID } from '../../helpers/helpers'

const FamilyTree = ({data, className}) => {
  const makeTreeData = data => {
    let treeData = []

    for (let i = 0; i < data.length; i++) {
      treeData.push({
        id: data[i].id,
        title: data[i].name,
        ParentId: getPrimaryID(data[i].id) || null
      })
    }

    return treeData
  }

  const familyTreeData = makeTreeData(data)

  return <div className={className}>
    <h3>Family Tree</h3>
    <Rorgchart data={familyTreeData} readonly />
  </div>
}

export default styled(FamilyTree)`
  position: relative;
  top: 100px;
`
