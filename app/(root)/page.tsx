import { SignIn, SignInButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return <SignIn routing="hash" />
}

export default Home