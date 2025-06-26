import React, { useState } from 'react'
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
import { useAddUsersMutation } from '@/rtk/userAPI'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  
  const handleChange = (e) =>{
    setUser({...user, [e.target.name] : e.target.value});
  }
  const [addUser] = useAddUsersMutation();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await addUser(user)
    navigate('/')
  }
  return (
	<div className='flex items-center justify-center min-h-screen'>
		<Card className="w-full max-w-sm">
      <CardHeader>
		     <CardTitle>Add User</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="name">Name</Label>
              </div>
              <Input name='name' onChange={handleChange} id="name" type="text" required />
            </div>
			<div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
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
