'use client';

import { Button } from '@nextui-org/react';

interface ListHeaderProps {
  listName: string,
}

const ListHeader:React.FC<ListHeaderProps> = ({listName}) => {

  return (
    <div className="flex justify-between text-2xl sm:text-4xl font-medium py-4 border-b">
      
      <h1>{listName}</h1>

      <div className='flex space-x-5'>
        <Button size='sm' className='text-sm font-medium text-black' color='success'>add new</Button>
      </div>

    </div>
  )
}

export default ListHeader;