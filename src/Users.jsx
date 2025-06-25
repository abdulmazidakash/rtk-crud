import React from 'react'
import { useGetUsersQuery } from './rtk/userAPI'
import { Button } from './components/ui/button';

export default function Users() {
	const {data: users, isLoading, isError, isSuccess} = useGetUsersQuery();
	{isLoading &&  <h3>Loading...</h3>}
	{isError && <h3>something went wrong</h3>}
  return (
	<div className='flex items-center justify-center min-h-screen gap-4'>
		{isSuccess && users.map(user => (
			<div key={user.id} className='border-2 border-orange-600 p-4 rounded-lg my-1'>
				<h4>{user.name}</h4>
				<h4>{user.email}</h4>
				<Button variant={'outline'} className={'mr-4 my-1'}>Edit</Button>
				<Button variant={'destructive'}>Delete</Button>
			</div>
		))}
	</div>
  )
}
