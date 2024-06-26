'use client';

import Modal from '@/components/Modal';

interface ListHeaderProps {
  listName: string,
  getData: () => Promise<any>
}

const ListHeader:React.FC<ListHeaderProps> = ({listName, getData}) => {

  return (
    <div>
      <div className="flex justify-between text-2xl sm:text-4xl font-medium py-4 border-b p-4">
      
        <h1 className='font-semibold'>{listName}</h1>

        <div className='flex space-x-5'>
          <Modal getData={getData}/>
        </div>
      
      </div>
    </div>
  )
}

export default ListHeader;