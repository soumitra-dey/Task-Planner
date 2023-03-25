import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";





export default function Navbar(){


    return (
        <Flex h="10vh" w="100%" alignItems="center" justifyContent="space-between" padding="0px 50px 0px 50px" backgroundColor="cyan.200">
            <Image src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" w="50px" h="50px"/>
            <Link to="/">Home</Link>
            <Text onClick={()=>localStorage.removeItem("token")}>Logout</Text>
        </Flex>
    )
}