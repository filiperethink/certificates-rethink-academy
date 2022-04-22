import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";

type CustomDrawerPropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
export default function CustomDrawer({
  isOpen,
  onClose,
  children,
}: CustomDrawerPropsType) {
  return (
    <Drawer size='md' isOpen={isOpen} placement='right' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg='brand.bg'>
        <DrawerCloseButton _focus={{}} color='brand.details' />
        <DrawerHeader color='#9f9f9f' mt={10} fontWeight='normal'>
          Insira os detalhes do seu certificado
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
