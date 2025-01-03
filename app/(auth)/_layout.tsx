import { useAuth } from '@clerk/clerk-expo'
import { Redirect, Stack } from 'expo-router'
import React from 'react'

export default function AuthRoutesLayout() {
    const { isSignedIn,isLoaded } = useAuth()

    if(!isLoaded) return null;
    if(isSignedIn) return <Redirect href={"/(index)"}/>
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerTitle:"Sign in"}}/>
      <Stack.Screen name="sign-up" options={{headerTitle:"Sign up"}}/>
      <Stack.Screen name="reset-password" options={{headerTitle:"Reset password"}}/>
    </Stack>
  )
}
