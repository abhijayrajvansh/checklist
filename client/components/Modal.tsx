import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function App() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const mode = 'add'

  return (
    <>
      <Button onPress={onOpen} size='sm' className='text-sm font-medium' color='secondary'>Add New</Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className="bg-white">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{mode} your checklist</ModalHeader>
              
              
              
              <ModalBody>
                <form>
                  <input className="bg-white border-2 border-default-600 outline-none focus:border-default-300 px-4 py-2 w-full rounded-lg"
                    type="text" 
                    required maxLength={30} 
                    placeholder=" Your task goes here"
                    // value={""}
                    />

                  {/* <input type="text" /> */}
                  {/* <input type="submit" /> */}
                </form>
              </ModalBody>
              
              
              
              <ModalFooter>
                <Button size="sm" className="text-sm font-medium" color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button size="sm" className="text-sm font-medium" color="primary" onPress={onClose}>
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
