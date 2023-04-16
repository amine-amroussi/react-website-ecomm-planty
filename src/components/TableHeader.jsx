import React from 'react'
import styled from 'styled-components'

const TableHeader = () => {
  return (
    <Wrapper>
        <th>Image</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Remove</th>
        <th>Price</th>
    </Wrapper>
  )
}

const Wrapper = styled.tr`
    th {
        padding: 15px;
        background-color: white;
        /* border: 1px solid var(--green-clr); */
    }
`

export default TableHeader