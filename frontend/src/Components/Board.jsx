import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Image, Input, Radio, RadioGroup, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector,useDispatch } from "react-redux";
import { getboard, createcard, getallcards, deletecards, createlabel, getalllabel } from "../Redux/boardReducer/board.action";



export default function Board(){
    const {board,users,cards,label}=useSelector(store=>store.board)
    const dispatch=useDispatch()
    const {boardid}=useParams()
    const[name,setname]=useState("")
    const [lname,setlname]=useState("")
    // const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        dispatch(getboard(boardid))
        .then(()=>dispatch(getallcards(boardid)))
        
        dispatch(getalllabel(boardid))
    },[])

    function dltcards(id){
        dispatch(deletecards(id))
        .then(()=>dispatch(getallcards(boardid)))
    }
    
    console.log(label)

    return (
        <Flex>
            <Sidebar/>
            <Box pl="30px" pt="20px" backgroundColor={board.color} w="100%">
                <Flex alignItems={{base:"flex-start", md:"center"}} gap={{base:"10px",md:"20px"}} direction={{base:"column",md:"row"}}>
                    <Text fontSize="20px" color="blue.600" as="b">{board.name}</Text>
                    <Flex gap="10px">
                        <Text fontSize="20px" color="blue.600" as="b">Users:</Text>
                        <Flex gap="10px">
                            {
                                users && users.map((el)=>(
                                    <Image key={el._id} src={el.avatar} w="30px" h="30px" borderRadius="50px"  border="1px solid"/>
                                ))
                            }
                        </Flex>
                    </Flex>
                    {/* <Flex gap="10px" alignItems="center">
                        <Text fontSize="20px" color="blue.600" as="b">Label:</Text>
                        <RadioGroup >
                            <Stack direction='row'>
                                <Radio value='1'>First</Radio>
                                <Radio value='2'>Second</Radio>
                                <Radio value='3'>Third</Radio>
                            </Stack>
                        </RadioGroup>
                    </Flex> */}
                </Flex>
                <Flex mt="20px" direction={{base:"column", md:"row"}} gap={{base:"10px",md:"20px"}}>
                    {
                        cards && cards.map((el)=>(
                            <Flex key={el._id} w={{base:"90%",md:"250px"}} direction="column" gap="10px" position="relative" backgroundColor="whiteAlpha.500" p="20px">
                                <Text fontSize="20px" as="b">{el.name}</Text>
                                <Button position="absolute" right="0" top="0" padding="0px" backgroundColor="transparent" onClick={()=>dltcards(el._id)}><Image src="https://img.icons8.com/color/48/null/delete-forever.png" w="20px" h="20px"/></Button>
                                <Flex direction="column">
                                    {
                                        label && label.map((ele)=>(
                                            ele.card==el._id?
                                            <Flex justifyContent="space-between" w="100%" alignItems="center" gap="5px">
                                                <Text>task1</Text>
                                                <Image src="https://img.icons8.com/color/48/null/delete-sign--v1.png" w="15px" h="15px"/>
                                            </Flex>
                                            :null
                                        ))
                                    }
                                    <Flex justifyContent="space-between" w="100%" alignItems="center" gap="5px">
                                        <Input h="25px" onChange={(e)=>setlname(e.target.value)}/>
                                        <Image src="https://img.icons8.com/emoji/48/null/ok-button-emoji.png" onClick={()=>dispatch(createlabel({name:lname,board:boardid,card:el._id}))} w="25px" h="25px"/>
                                    </Flex>
                                </Flex>
                            </Flex>
                        ))
                    }
                    <Box w={{base:"90%",md:"250px"}} backgroundColor="whiteAlpha.500" p="20px">
                        <Input h="30px" placeholder="Add another list" onChange={(e)=>setname(e.target.value)}/>
                        <Button fontSize="14px" h="30px" mt="10px" onClick={()=>dispatch(createcard({board:boardid,name:name}))}>Add Card</Button>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}