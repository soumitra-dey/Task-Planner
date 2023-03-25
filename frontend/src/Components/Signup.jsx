import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/backimg.module.css"
import { useDispatch, useSelector } from "react-redux";
import { signup,reset } from "../Redux/userReducer/user.action";
import { useToast } from '@chakra-ui/react'



export default function Signup(){
    const { success,failure,loading,msg } = useSelector((store) => store.user)
    const dispatch=useDispatch()
    const toast = useToast()
    const nav = useNavigate()   
    const [data,setdata]=useState({
        name:"",email:"",password:""
    })

    const handlechange = (e) => {
        setdata({
            ...data,
            [e.name]:e.value
        })
    }

    if (success) {
        toast({
            title: msg,
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        dispatch(reset())
        nav("/login")
    }

    if (failure) {
        toast({
            title: msg,
            status: 'error',
            duration: 9000,
            isClosable: true,
        })
        dispatch(reset())
    }

    

    return (
        <Box className={style.heroimage} h="100vh">
            <Box h="20vh"></Box>
            <Box p="20px" margin="auto" backdropFilter="blur(5px)" w={{base:"90%",md:"30%"}}  borderRadius="20px" boxShadow="dark-lg">
                <Box>
                    <Text fontSize="25px">Signup</Text>
                    <Flex mt="50px" direction="column" gap="10px">
                        <Input placeholder="Enter name" borderRadius="5px" name="name" onChange={(e)=>handlechange(e.target)}/>
                        <Input placeholder="Enter email" borderRadius="5px"name=" email" onChange={(e)=>handlechange(e.target)}/>
                        <Input placeholder="Enter password" borderRadius="5px" name="password" onChange={(e)=>handlechange(e.target)}/>
                        <Button mt="25px" borderRadius="20px" w="100%" backgroundColor="green.400" _hover={{backgroundColor:"green.200"}} onClick={()=>dispatch(signup(data))}>Signup</Button>
                    </Flex>
                    <Text textAlign="center" mt="20px">Have an Account? <Link to="/login" style={{color:"blueviolet"}}>Login now!</Link></Text>
                </Box>
            </Box>
        </Box>
    )
}