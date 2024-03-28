'use client';

import { Button } from '@nextui-org/react';

interface ListHeaderProps {
  listName: string,
}

const ListHeader:React.FC<ListHeaderProps> = ({listName}) => {

  const signout = () => {
    console.log('cliked sign out')
  }

  return (
    <div className="flex justify-between text-lg sm:text-4xl font-medium py-4 border-b text-black">
      
      <h1>{listName}</h1>

      <div className='flex space-x-5'>
        <Button size='sm'>add new</Button>
        <Button size='sm' onClick={signout}>sign out</Button>
      </div>

    </div>
  )
}

export default ListHeader;