import { Flex, Box } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import CartContent from "../components/cart-content";

const Content = () => {
  return (  
    <div>
      <Navbar/>
      <CartContent/>
    </div>
  );
}
 
export default Content;