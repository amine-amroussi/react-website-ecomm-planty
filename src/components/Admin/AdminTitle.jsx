import React from 'react'

const AdminTitle = ({title}) => {
  return (
    <section className='w-2/3 rounded text-center capitalize drop-shadow-sm font-bold bg-white m-auto p-2 text-3xl' >
        <h2>{title}</h2>
    </section>
  )
}

export default AdminTitle