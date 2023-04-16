import React from 'react'
import { Link } from 'react-router-dom'
import priceFormate from '../../util/priceFormat'

const AdminProduct = ({product}) => {
  return (
    <article className='w-[320px] flex-wrap bg-white mb-2 p-3 hover:drop-shadow-md ease-in duration-300' >
        <Link to="/product/10">
            <img src={process.env.REACT_APP_SERVER_URL+product?.image} alt="product" className='rounded h-[200px] object-cover w-full'/>
            <h2 className='mt-2 mb-2 text-2xl text-center font-semibold' >{product?.title}</h2>

            <h4 className='mt-2 mb-2 text-xl text-center font-semibold' >{priceFormate(product?.price)}</h4>
            <div className="options flex">
                <Link to="/products/10" className='text-white p-1 bg-yellow-400 text-[14px] text-center font-semibold m-1 rounded capitalize'>Show products</Link>
                <Link to={`/admin-panel/create-product?edit=true&productId=${product?._id}`} state={{product}} className='text-white p-1  bg-blue-400 text-[14px] text-center font-semibold m-1 rounded capitalize'>Update products</Link>
                <Link className='text-white p-1  bg-red-400 text-[14px] text-center font-semibold m-1 rounded capitalize'>Delete products</Link>
            </div>
        </Link>
    </article>
  )
}

export default AdminProduct