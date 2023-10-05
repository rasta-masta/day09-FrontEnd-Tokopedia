import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const CartContent = () => {
  const data = useSelector((state) => state.carts.value)
  
  return (  
    <Box width={'350px'} mx={'auto'} p={'5px'}
    rounded={'xl'} ml={'1000px'} boxShadow={'xl'}>
      {data.map((item => {
        return (
          
            <Flex key={item.id} gap={'20px'} alignItems={'center'}
              ml={'25px'} mb={'20px'}
            >
              <Image src={item.img} width={'15%'}/>
              <div>{item.name}</div>
              <div>Rp.{item.price}</div>
            </Flex>
          
        )
      }))}
    </Box>
  );
}
 
export default CartContent;