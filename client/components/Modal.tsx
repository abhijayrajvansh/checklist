import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

interface taskItemProp {
  id: string;
  user_email: string;
  title: string;
  progress: number;
  date: string;
}

interface ModalProps {
  job?: string,
  task?: taskItemProp,
  getData: () => Promise<any>
}

const ModalStructure:React.FC<ModalProps> = ({job, task, getData}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [checklistData, setChecklistData  ] = useState({
    user_email: job === 'edit' ? task?.user_email : "abhijay@test.com",
    title: job === 'edit' ? task?.title : "",
    progress: job === 'edit' ? task?.progress : 30,
    date: job === 'edit' ? "" : new Date()
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setChecklistData(data => ({
      ...data,
      [name] : value
    }));
  }

  const createChecklist = async () => {
    try {
      await fetch("http://localhost:8000/checklists", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checklistData)
      })
      setChecklistData({ user_email: 'abhijay@test.com', title: '', progress: 30, date: ''})
      getData()
    } 
    catch (error) {
      console.log('error:', error)
    }
  }

  const editChecklist = async () => {
    try {
      await fetch("http://localhost:8000/checklists/" + `${task?.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checklistData)
      })
      setChecklistData({ user_email: '', title: '', progress: 30, date: ''})
      getData()
    } 
    catch (error) {
      console.log('error:', error)
    }
  }

  return (
    <>
      {
        job === 'edit' ? 
          <Button onPress={onOpen} size='sm' className='text-sm font-medium' color='success'>Edit</Button> :
          <Button onPress={onOpen} size='sm' className='text-sm font-medium' color='secondary'>Add New</Button>
      }

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{job == 'edit' ? 'Edit' : 'Add'} Your Checklist</ModalHeader>
              
              <ModalBody>
                <form>
                  <input className="bg-white border-2 border-default-600 outline-none focus:border-default-300 px-4 py-2 w-full rounded-lg"
                    type="text" 
                    required maxLength={30} 
                    placeholder=" Your task goes here"
                    name="title"
                    value={checklistData.title}
                    onChange={handleChange}
                    />

                  <p className="font-semibold my-2 mt-5">Drag to {job == 'edit' ? 'edit' : 'select'} progress of your checklist.</p>

                  <input className="w-full"
                    required
                    type="range" 
                    min={0} max={100}
                    name="progress"
                    value={checklistData.progress}
                    onChange={handleChange}
                  />
                </form>
              </ModalBody>
              

              <ModalFooter>
                <Button size="sm" className="text-sm font-medium" color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button size="sm" className="text-sm font-medium" color="primary" onClick={job === 'edit' ? editChecklist : createChecklist} onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </> 
  );
}

export default ModalStructure;