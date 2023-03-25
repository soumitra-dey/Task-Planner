import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";





export default function Sidebar(){
    const {board,users}=useSelector(store=>store.board)
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Box borderRight="2px solid" h="90vh" w="20px" backgroundColor="white">
                <Button borderRadius="50px" mt="20px" backgroundColor="white" border="2px solid" fontSize="20px" p="0px" onClick={onOpen}>{">"}</Button>
            </Box>
            <Drawer onClose={onClose} isOpen={isOpen} size="xs" placement="left">
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader><Text fontSize="25px" w="100%" borderBottom="1px solid">{board.name}</Text></DrawerHeader>
                    <DrawerBody>
                        <Box>
                            <Text as="b" fontSize="20px" decoration="underline">Users</Text>
                            <Flex direction="column">
                                {
                                    users.map((ele)=>(
                                        <Flex key={ele._id} gap="10px" ml="10px">
                                            <Image src={ele.avatar} w="30px" h="30px" borderRadius="50px"  border="1px solid"/>
                                            <Text>{ele.name}</Text>
                                        </Flex>
                                    ))
                                }
                            </Flex>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}