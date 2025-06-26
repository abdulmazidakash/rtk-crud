import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
	<div className='bg-orange-300 text-black font-semibold flex justify-between p-8'>
		<div className='w-11/12 mx-auto flex justify-between'>
			<Link className='bg-cyan-700 text-white p-2 rounded-lg' to={'/'}>Home</Link>
			<Link className='bg-cyan-700 text-white p-2 rounded-lg' to={'/create'}>Create</Link>
		</div>
	</div>
  )
}
