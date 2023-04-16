import React from 'react'

const FreeShippingBox = () => {
  return (
    <div className='flex mt-3'>
        <label htmlFor="freeShipping" className='mr-4'>Free Shipping ?</label>
        <input type="checkbox" name="free_shipping" id="freeShipping" />
    </div>
  )
}

export default FreeShippingBox