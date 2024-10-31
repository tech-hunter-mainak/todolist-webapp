import React, { useState, useEffect } from 'react'
import image from "../assets/to-do-list-laptop-grey-background-150052787.webp"
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase' // Adjust the import to match your Firebase config

// Static profile view with non-editable details
export function FixedProfile({ email, name }: { email: string, name: string }) {
  return (
    <React.Fragment>
      <div className="text-left font-bold text-2xl">{name}</div>
      <div className="text-base h-32 w-32 font-semibold min-h-10 flex flex-col justify-center gap-5">
        <div className='flex flex-row gap-4 w-max h-auto'>
          <Mail />
          <div>{email}</div>
        </div>
      </div>
    </React.Fragment>
  )
}

// Editable profile form allowing updates to only name
export function ChangeProfile({
  name, onNameChange, email
}: {
  name: string,
  onNameChange: (name: string) => void,
  email: string
}) {
  return (
    <React.Fragment>
      <Input
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Name"
        className="text-left font-bold text-2xl mb-4"
      />
      <div className="text-base h-32 w-32 font-semibold min-h-10 flex flex-col justify-center gap-5">
        <div className='flex flex-row gap-4 w-max h-auto items-center'>
          <Mail />
          <Input
            value={email}
            readOnly
            className="rounded-full border-black bg-gray-100 text-gray-500 cursor-not-allowed"
          />
        </div>
      </div>
    </React.Fragment>
  )
}

function Profile() {
  const [name, setName] = useState("")
  let email = "md.59mbl@gmail.com" // Replace with authenticated user's email
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)

  // Fetch user details from Firestore based on email
  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true)
      try {
        const userDoc = await getDoc(doc(db, 'users', email)) // Retrieve document based on email ID
        if (userDoc.exists()) {
          const userData = userDoc.data()
          setName(userData.name || "")
        } else {
          console.warn("User document does not exist.")
        }
      } catch (error) {
        console.error("Error fetching user data: ", error)
      }
      setLoading(false)
    }
    fetchUserData()
  }, [email])

  // Update user details in Firestore
  const saveChanges = async () => {
    try {
      await updateDoc(doc(db, 'users', email), { name }) // Update the document based on email ID
      setIsEditing(false)
    } catch (error) {
      console.error("Error updating user data: ", error)
    }
  }

  const toggleEdit = () => setIsEditing(!isEditing)

  if (loading) return <div>Loading...</div>

  return (
    <React.Fragment>
      <div className='flex flex-row p-5 w-full gap-x-5'>
        <div className='flex flex-col gap-5'>
          <div className='bg-slate-200 min-w-56 max-w-56 h-56 shadow-lg flex items-center rounded-xl overflow-hidden'>
            <img src={image} alt="data" className='hover:scale-105 transition-all duration-500' />
          </div>
          <div className='flex flex-col gap-4 justify-center'>
            <Button className='rounded-xl' onClick={toggleEdit}>
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
            {isEditing && (
              <Button className='rounded-xl' onClick={saveChanges}>
                Save Changes
              </Button>
            )}
          </div>
        </div>
        <div className='w-full h-full p-8 text-slate-900 bg-slate-200 rounded-xl shadow-lg'>
          {isEditing ? (
            <ChangeProfile
              name={name}
              email={email}
              onNameChange={setName}
            />
          ) : (
            <FixedProfile name={name} email={email} />
          )}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
