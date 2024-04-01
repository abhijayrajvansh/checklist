'use client';

import { Button } from "@nextui-org/react";

const Header = () => {

const signout = () => {
  console.log('clicked sigh out')
}

  return (
    <header className="flex justify-between items-center px-4 rounded-xl bg-white shadow-lg py-3 mb-3 text-black">
      <p>Welcome, [username]</p>
      <Button size='sm' variant="flat" color="danger" onClick={signout} className="text-sm font-medium">Sign Out</Button>
    </header>
  )
}

export default Header;