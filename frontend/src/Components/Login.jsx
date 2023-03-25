import { useState } from "react";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import style from "../styles/backimg.module.css"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login,reset } from "../Redux/userReducer/user.action";
import { useToast } from '@chakra-ui/react'





export default function Login(){
    const { success,failure,loading,msg,token } = useSelector((store) => store.user)
    const dispatch=useDispatch()
    const toast = useToast()
    const nav = useNavigate()   
    const [data,setdata]=useState({
        email:"",password:""
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
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        dispatch(reset())
        nav("/")
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
                    <Text fontSize="25px">Login</Text>
                    <Flex mt="50px" direction="column">
                        <Input placeholder="Enter email" borderRadius="20px 20px 0px 0px" name="email" onChange={(e)=>handlechange(e.target)}/>
                        <Input placeholder="Enter password" borderRadius="0px 0px 20px 20px" name="password" onChange={(e)=>handlechange(e.target)}/>
                        <Button mt="25px" borderRadius="20px" w="100%" backgroundColor="green.400" _hover={{backgroundColor:"green.200"}} onClick={()=>dispatch(login(data))}>Login</Button>
                    </Flex>
                    <Text textAlign="center" mt="20px">Not a register user? <Link to="/signup" style={{color:"blueviolet"}}>Signup now!</Link></Text>
                </Box>
            </Box>
        </Box>
    )
}