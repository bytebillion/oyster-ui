import React,{useState} from "react";
import { useDisclosure, RadioGroup, Stack, Radio, Button } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

function Profile({isOpen, onClose}) {
    
    const [placement, setPlacement] = useState('right')
  
    
    return (
      <>

        <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full"  closeOnOverlayClick={true} >
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents..askjdfhkldjhgklhdfjkhgjkdfhgkljdfhgjkhdfjksghdfjkhgjkdfhgjkdhfghdfkj.</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export default Profile