import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate, useParams } from 'react-router-dom'
import { useGetUserQuery, useUpdateUserMutation } from '@/rtk/userAPI'

export default function EditUser() {
	  const {id} = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
	id: id,
	name: '',
	email: ''
  });

  
  const handleChange = (e) =>{
	setUser({...user, [e.target.name] : e.target.value});
  }


  const {data} = useGetUserQuery(id);

  useEffect(()=>{
	if(data){
		setUser({...user, name: data.name, email: data.email})
	}
  }, [data]);

  const [updateUser] = useUpdateUserMutation();
  const handleSubmit = async (e) =>{
	e.preventDefault();
	await updateUser(user)
	navigate('/')
  }
  return (
	<div className='flex items-center justify-center min-h-screen'>
		<Card className="w-full max-w-sm">
	  <CardHeader>
			 <CardTitle>Update user</CardTitle>
	  </CardHeader>
	  <CardContent>
		<form onSubmit={handleSubmit}>
		  <div className="flex flex-col gap-6">
			
			<div className="grid gap-2">
			  <div className="flex items-center">
				<Label htmlFor="name">Name</Label>
			  </div>
			  <Input value={user.name} name='name' onChange={handleChange} id="name" type="text" required />
			</div>
			<div className="grid gap-2">
			  <Label htmlFor="email">Email</Label>
			  <Input
				id="email"
				value={user.email}
				type="email"
				name='email'
				placeholder="m@example.com"
				onChange={handleChange}
				required
			  />
			</div>
		  </div>
		   <Button type="submit" className="w-full mt-4">
		  Submit
		</Button>
		</form>
	  </CardContent>
	  <CardFooter className="flex-col gap-2">
	   
	  </CardFooter>
	</Card>
	</div>
  )
}
