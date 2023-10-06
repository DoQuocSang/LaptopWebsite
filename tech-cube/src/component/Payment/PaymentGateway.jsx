
import { Box, Button, Center, Checkbox, Flex, Heading, Image, Radio, RadioGroup, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const PaymentGateway = () => {

    const text = useColorModeValue('light','dark')
  const textColor = text==='dark'?'gray.100':'blackAlpha.900'

    return (
        <Flex h='100vh' w='100%' p='3%' alignItems={'center'} pt="90px" direction={{base:'column-reverse',sm:'column-reverse',md:'row',lg:'row'}}>
            <Flex w={{base:'100%',sm:'100%',md:'50%',lg:'50%'}} px={{base:'0',sm:'10px',md:'20px',lg:'100px'}}>
               <Flex p="30px"  borderRadius={'20px'} direction={'column'} gap="40px" boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}>
               <Center>
<<<<<<< HEAD
                    <Heading fontSize='20px'>Phương thức thanh toán</Heading>
=======
                    <Heading fontSize='20px'>Payment Method</Heading>
>>>>>>> Suong
                </Center>
                <Center>

                    <Flex direction={'column'} justifyContent={'center'} gap="40px" >

                        <RadioGroup display={'flex'} flexDirection='column'>
<<<<<<< HEAD
                            <Radio py="20px" name='radio' value='paytm'> <Flex alignItems={'center'} pl={{base:'50px',md:'100px'}} gap="30px"><Flex justifyContent={'flex-start'}><Image src="https://static.ybox.vn/2022/4/4/1649334330094-anhybox%20(32).png" w='100px' /></Flex>
                                <Flex justifyContent={'flex-start'}><Text fontWeight={'bolder'}>Momo</Text></Flex>
=======
                            <Radio py="20px" name='radio' value='paytm'> <Flex alignItems={'center'} pl={{base:'50px',md:'100px'}} gap="30px"><Flex justifyContent={'flex-start'}><Image src="https://images.dailyobjects.com/marche/icons/payments/paytm-update.png?tr=cm-pad_resize,v-2,dpr-1" w='100px' /></Flex>
                                <Flex justifyContent={'flex-start'}><Text fontWeight={'bolder'}>Paytm</Text></Flex>
>>>>>>> Suong
                            </Flex> </Radio>

                            <Radio py="20px" name='radio' value='mastercard'> <Flex alignItems={'center'} justifyContent={'flex-start'} pl={{base:'50px',md:'100px'}} gap="30px"><Image src="https://images.dailyobjects.com/marche/icons/payments/maestro-update.png?tr=cm-pad_resize,v-2,dpr-1" w='100px' />
                                <Text fontWeight={'bolder'}>MasterCard</Text>
                            </Flex> </Radio>

<<<<<<< HEAD
                            <Radio py="20px" name='radio' value='rupay'> <Flex alignItems={'center'} pl={{base:'50px',md:'100px'}} gap="30px"><Image src="https://is3-ssl.mzstatic.com/image/thumb/Purple126/v4/3d/b8/7b/3db87b4d-6a23-628e-954f-ed54ed37117e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg" w='100px' />
                                <Text fontWeight={'bolder'}>VNPay</Text>
=======
                            <Radio py="20px" name='radio' value='rupay'> <Flex alignItems={'center'} pl={{base:'50px',md:'100px'}} gap="30px"><Image src="https://images.dailyobjects.com/marche/icons/payments/rupay-update.png?tr=cm-pad_resize,v-2,dpr-1" w='100px' />
                                <Text fontWeight={'bolder'}>Rupay</Text>
>>>>>>> Suong
                            </Flex> </Radio>

                            <Radio py="20px" name='radio' value='visa'> <Flex alignItems={'center'} pl={{base:'50px',md:'100px'}} gap="30px"><Image src="https://images.dailyobjects.com/marche/icons/payments/visa-update.png?tr=cm-pad_resize,v-2,dpr-1" w='100px' />
                                <Text fontWeight={'bolder'}>Visa</Text>
                            </Flex> </Radio>
                        </RadioGroup>

                        <Center>
                            <NavLink to='/paymentdetail'><Button w="200px" bg={textColor} colorScheme={'white'}>Next</Button></NavLink>
                        </Center>
                    </Flex>

                </Center>
               </Flex>
            </Flex>
            <Flex w={{base:'100%',sm:'100%',md:'50%',lg:'50%'}} alignItems='center' justifyContent={'center'}>
                <Image src="https://blog.2checkout.com/wp-content/uploads/2020/07/payment-gateway-security-features-1024x799.png" w={{bsae:'100%',sm:'90%',md:'90%'}} />
            </Flex>
        </Flex>
    )
}


export default PaymentGateway