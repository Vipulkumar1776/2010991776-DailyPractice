import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    useColorModeValue,
    Heading,

  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function Registration(props) {
    const [showPassword, setShowPassword] = useState(false);
  
  const [userdetails, setuserdetails] = useState({
    name:"",
    age:"",
    address:"",
    username:"",
    password:""
  })
function handlechange(e){
    setuserdetails({...userdetails,[e.target.name]:e.target.value})
}
function handlesubmit(e){
e.preventDefault()
    props.handleclick(userdetails)
}
    return (
      <Flex
        // minH={'100vh'}
        align={'center'}
        justify={'center'}
        >
        <Stack  w="100vw" spacing={8} mx={'auto'} maxW={'lg'} py={2} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register now!</Heading>
        
        </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
                 <form onSubmit={handlesubmit}>
            <Stack spacing={4}>
               
              <HStack>
                <Box>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name='name' onChange={handlechange} type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="age" isRequired>
                    <FormLabel>Age</FormLabel>
                    <Input  onChange={handlechange} name='age' type="number" />
                  </FormControl>
                </Box>
              </HStack>
            
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input  onChange={handlechange} name='address' type="text" />
              </FormControl>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input  onChange={handlechange} name='username' type="text" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input  onChange={handlechange} name='password' type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                type='submit'
                // onClick={()=>{props.handleclick(userdetails)}}
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                Register
                </Button>
              </Stack>
           
            </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    );
  }