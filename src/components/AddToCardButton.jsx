import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useCartContext} from "../context/cart_context"
import { useUserContext } from '../context/user_context'

const AddToCardButton = ({ _id, shippingCost, amount}) => {
  const {addToCart} = useCartContext()
  const {isAuth} = useUserContext()
  const handleClick = () => {
    const cart = {amount, productId : _id, shippingFee : shippingCost}
    addToCart({cart})
  }
  if(!isAuth) {
    return <div className='flex' >
      <Link to='/login' className='capitalize underline text-blue-600' >Please! Login to add this product </Link>
    </div>
  }
  return (
    <Wrapper className='btn' onClick={handleClick}>Add to cart</Wrapper>
  )
}

const Wrapper = styled.button`
    padding: 12px 45px;
    background-color: var(--green-clr);
    font-weight: bold;
    color: white;
    border-radius: 15px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
`

export default AddToCardButton