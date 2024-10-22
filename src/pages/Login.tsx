import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase'; // Import the Firestore db

export function LoginHandle() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  function getCookie(cname: string) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname: string, cvalue: string, exdays: number) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  let curr_user: string = getCookie("user_name");
  if (!curr_user) setCookie("user_name", "", -1);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log('User added:', docRef.id);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error adding user: ', error);
    }
  };

  const handleLogin = async () => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', formData.email), where('password', '==', formData.password));
    let user_data = new Array()
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        alert("Invalid login credentials");
      } else {
        alert("Login successful!");
        console.log('User logged in:', querySnapshot.docs.map(doc => doc.data()));
        user_data = querySnapshot.docs.map(doc => doc.data())
        setCookie("user_name", String(user_data[0].name), 1);
        console.log(getCookie("user_name"));
      }
    } catch (error) {
      console.error("Error during login: ", error);
    }
  };

  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center">
        <Tabs
          defaultValue="login"
          className="w-[min(400px, 80vw)] mt-[30px]"
        >
          <TabsList className="grid w-full grid-cols-2" style={{ borderRadius: "10px" }}>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">SignUp</TabsTrigger>
          </TabsList>
          <TabsContent value="login" onSubmit={handleLogin}>
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" onClick={handleLogin}>Login</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Sign Up</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleInputChange} required />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" onClick={handleSignUp}>Sign Up</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
