import { Box, Heading, Button, HStack,
  Container 
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setData } from './redux/cartSlice'
import Homepage from './pages/home'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Content from './pages/content,'

function App() {
  const dispatch = useDispatch()
  
      const getData = async() => {
        try {
          const response = await axios.get('http://localhost:2000/carts') 
          const data = await response.data
          // console.log(data)
          dispatch(setData(data))
          } catch(err) {
             console.log(err)
        }
      } 
     
  useEffect(()=> {
    getData()
  }, [dispatch])    
  
  return (  
      <Routes>
        <Route path='/' element={ <Homepage/> }/>
        <Route path='/content' element={ <Content/> }/>
      </Routes> 
  )
}

export default App
