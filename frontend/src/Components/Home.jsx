import { Box, Button, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import style from "../styles/backimg.module.css"
import { useDispatch,useSelector } from "react-redux";
import { getuser,getallboard,deleteboard } from "../Redux/userReducer/user.action";
import { createboard } from "../Redux/boardReducer/board.action";
import { useNavigate } from "react-router-dom";


export default function Home(){
    const { user,success,failure,loading,msg,boards } = useSelector((store) => store.user)
    // const {  } = useSelector((store) => store.board)
    const nav=useNavigate()
    const dispatch=useDispatch()
    const [boardColor,setBoardColor]=useState("gray.300")
    const [boardName,setBoardName]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(()=>{
        dispatch(getuser())
        .then(()=>dispatch(getallboard()))
    },[])

    function deletebrd(id){
        dispatch(deleteboard(id))
        .then(()=>dispatch(getallboard()))
    }

    function createbrd(){
        dispatch(createboard({name:boardName,color:boardColor}))
        .then((e)=>nav(`/board/${e.data}`))
    }


    return (
        <Box className={style.heroimage} h="90vh">
            <Box w={{base:"90%",md:"50%"}} margin="auto">
                <Flex alignItems="center" fontSize="25px" pt="20px" pb="20px" textDecoration="underline" gap="5px">
                    <Image src="https://img.icons8.com/dotty/80/null/user.png" w="30px" h="30px"/>
                    <Text>User Workspace</Text>
                </Flex>
                <Flex gap="20px" alignItems="center" pb="20px" borderBottom="1px solid">
                    <Image src={user.avatar} w="55px" h="50px" p="5px" border="1px solid" borderRadius="10px"/>
                    <Text fontSize="20px" as="b">{user.name}</Text>
                    <Image src="https://img.icons8.com/material-outlined/24/null/pencil--v1.png" w="20px" p="2px" cursor="pointer" _hover={{backgroundColor:"rgb(200,200,200)"}}/>
                </Flex>
                <Flex alignItems="center" fontSize="25px" pt="20px" pb="20px" textDecoration="underline" gap="5px">
                    <Image src="https://img.icons8.com/dotty/80/null/noticeboard.png" w="30px" h="30px"/>
                    <Text>User Boards</Text>
                </Flex>
                <Flex alignItems={{base:"center", md:"flex-start"}} flexWrap={{base:"none", md:"wrap"}} direction={{base:"column",md:"row"}} gap={{base:"10px", md:"20px"}} h="50vh" overflow="auto">
                    {
                        !loading && boards.map((el)=>(
                            <Box key={el._id} position="relative">
                                <Button w="200px" h="100px" backgroundColor={el.color} onClick={()=>nav(`/board/${el._id}`)}>{el.name}</Button>
                                <Button position="absolute" right="0" padding="0px" backgroundColor="transparent" onClick={()=>deletebrd(el._id)}><Image src="https://img.icons8.com/color/48/null/delete-forever.png" w="20px" h="20px"/></Button>
                            </Box>
                        ))
                    }
                    <Box textAlign={{base:"center",md:"left"}}>
                        <Button w="200px" h="100px" onClick={()=>onOpen()}>Create New Board</Button>
                    </Box>
                </Flex>
                <Modal isCentered isOpen={isOpen} size="xs" onClose={onClose}>
                    <ModalOverlay
                        bg='blackAlpha.300'
                        backdropFilter='blur(10px) hue-rotate(90deg)'
                    />
                    <ModalContent>
                        <ModalHeader>Create Board</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box >
                                <Image src="https://a.trellocdn.com/prgb/assets/14cda5dc635d1f13bc48.svg" backgroundColor={boardColor} margin="auto" w="80%" border="1px solid #ccc" padding="10px"/>
                                <Text mt="20px">Background Color</Text>
                                <RadioGroup defaultValue='gray.300' name="color" onChange={(e)=>setBoardColor(e)}>
                                    <Stack spacing={4} direction='row'>
                                        <Radio value='gray.300'><Box w="20px" h="20px" backgroundColor="gray.300"></Box></Radio>
                                        <Radio value='green.300'><Box w="20px" h="20px" backgroundColor="green.300"></Box></Radio>
                                        <Radio value='blue.300'><Box w="20px" h="20px" backgroundColor="blue.300"></Box></Radio>
                                        <Radio value='red.300'><Box w="20px" h="20px" backgroundColor="red.300"></Box></Radio>
                                    </Stack>
                                </RadioGroup>
                                <Text mt="20px">Board name</Text>
                                <Input placeholder="Enter board name" onChange={(e)=>setBoardName(e.target.value)}/>
                            </Box>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} backgroundColor="red.400">Cancel</Button>
                            <Button backgroundColor="green.400" ml="20px" isDisabled={boardName==""} onClick={()=>createbrd()}>Create</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>
    )
}