import * as React from "react"
import { ThemedText } from '@/components/ThemedText'
import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'

import { View } from 'react-native'
import Button from "@/components/ui/button"

export default function SignInScreen() {
    const {signIn,setActive,isLoaded} =useSignIn();
    const router = useRouter();

    const [emailAddress,setEmailAddress] = React.useState()
    const [password,setPassword] = React.useState()
    const [isSignIn,setIsSigningIn] = React.useState()
  return (
    <View>
      <ThemedText type='title'>Sign In</ThemedText>
      <Link href={"/sign-up"}>Go to Sign Up</Link>
      <Button>Hello</Button>
    </View>
  )
}
