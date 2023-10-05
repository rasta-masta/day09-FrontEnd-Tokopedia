import { Flex, Box, Text, Input } from "@chakra-ui/react";
import React from "react";
import { TiShoppingCart } from 'react-icons/ti'
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
      <Flex m={'10'} bg={'gray.100'} p={'2'} w='40%' mx={'auto'}
        alignItems={'center'} justifyContent={'space-between'}
        boxShadow={'xl'} borderRadius={'5'}
      >
        
        <Flex alignItems={'center'} gap={'5'} w={'80%'} >
        <Box>
          <Text fontSize={'2xl'} fontWeight={'500'} pl={'4'}>
           <Link to='/'>Tokopedia</Link> 
          </Text></Box>
        <Box ml={'10px'}>Kategori</Box>
        <Input bg={'white'} w={'100%'} rounded={'md'}></Input>
        </Flex>
        
        <Box mr={'6'} p={'2'} bg={'gray.200'}
         rounded={'xl'} position={'relative'} display={'inline-block'}
        >
          <Link to='/content'>
          <TiShoppingCart size={'25px'} cursor={'pointer'}/>
          </Link>
          
          <Box
          position={'absolute'}
          top='1' width='15px' 
          bg='red' height='15px'
          left='26px' borderRadius='60%'
          color={'white'}
          display={'flex'} alignItems={'center'}
          justifyContent={'center'}
          fontSize='12px'
          >3</Box>
        
        </Box>
      </Flex>
  );
}
 
export default Navbar;
