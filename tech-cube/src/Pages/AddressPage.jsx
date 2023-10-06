
import React, { useEffect, useRef, useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,

  Checkbox,
  Grid,
  Text,
  UnorderedList,
  ListItem,
  Stack,
  Image,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData, updatePaymentMethod } from '../redux/CartReducer/action';
import { Link } from 'react-router-dom';
import Footer from '../component/HomeComponent/Footer';


let handleSubmitTriggure; // for adding details on local storage on Address Page
let handlePaymentDetails; // for adding details on redux on Payment page



export const AddressForm = () => {


  const [user, setUser] = useState({});

  const handleChenge = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  handleSubmitTriggure = () => {

    localStorage.setItem("user_details", JSON.stringify(user))

  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [])



  return (
    <Box>
      < Box width={{ base: "full", sm: 'full', md: 'sm', lg: 'lg', xl: '2xl' }} >

        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
<<<<<<< HEAD
          Update Billing Address
=======
        Cập nhật địa chỉ thanh toán
>>>>>>> Suong
        </Heading>
        <Flex>
          <FormControl mr="5%" isRequired>
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
<<<<<<< HEAD
              First name
=======
              Họ
>>>>>>> Suong
            </FormLabel>
            <Input id="first-name" placeholder="First name" value={user.name} name='name' onChange={handleChenge} />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="last-name" fontWeight={'normal'}>
<<<<<<< HEAD
              Last name
=======
              Tên
>>>>>>> Suong
            </FormLabel>
            <Input id="last-name" placeholder="First name" />
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={'normal'} >
<<<<<<< HEAD
            Email address
          </FormLabel>
          <Input type="email" name='email' value={user.email} placeholder='example@abc.com' onChange={handleChenge} />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel mt="2%" fontWeight={'normal'}>
            Phone No
=======
            Email
          </FormLabel>
          <Input type="email" name='email' value={user.email} placeholder='example@abc.com' onChange={handleChenge} />
          <FormHelperText>Email sẽ được bảo mật.</FormHelperText>
          <FormLabel mt="2%" fontWeight={'normal'}>
            Số Điện Thoại
>>>>>>> Suong
          </FormLabel>

          <Input type="tel" name='phone' value={user.phone} placeholder='999999999' maxLength={'10'} onChange={handleChenge} />
        </FormControl>

        <FormControl>
          <FormLabel fontWeight={'normal'} mt="2%">
<<<<<<< HEAD
            Address
=======
            Địa Chỉ
>>>>>>> Suong
          </FormLabel>
          <Textarea type="text" name='address' onChange={handleChenge} />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight={'normal'} mt="2%">
<<<<<<< HEAD
            City
=======
           Thành Phố
>>>>>>> Suong
          </FormLabel>
          <Input type="text" name='city' />
        </FormControl>

        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
<<<<<<< HEAD
            ZIP / Postal
=======
            ZIP / Bưu Điện
>>>>>>> Suong
          </FormLabel>
          <Input
            type="tel"
            maxLength={"6"}
            name="pincode"


            focusBorderColor="gray.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
            onChange={handleChenge}
          />
        </FormControl>
      </Box>

      <Box>

      </Box>

    </Box>
  );
};

export const PaymentForm = () => {
  const [paymentDetails, setPaymentDetails] = useState({});
  const dispatch = useDispatch();

  const handlechenge = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value })
    dispatch(updatePaymentMethod(paymentDetails));
  }

  handlePaymentDetails = () => {
    dispatch(updatePaymentMethod(paymentDetails));
  }

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
<<<<<<< HEAD
        Payment method
=======
       Phương thức thanh toán
>>>>>>> Suong
      </Heading>
      <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={3}>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
<<<<<<< HEAD
            <FormLabel htmlFor="cardName">Name on card</FormLabel>
=======
            <FormLabel htmlFor="cardName">Tên</FormLabel>
>>>>>>> Suong
            <Input type="text" name="cardHolderName" autoComplete="cc-name" placeholder='Johnsmith Doe' onChange={handlechenge} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
<<<<<<< HEAD
            <FormLabel htmlFor="cardNumber">Card number</FormLabel>
=======
            <FormLabel htmlFor="cardNumber">Số thẻ</FormLabel>
>>>>>>> Suong
            <Input type="text" name="cardNumber" autoComplete="cc-number" maxLength={'16'} onChange={handlechenge} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
<<<<<<< HEAD
            <FormLabel htmlFor="expDate">Expiry date</FormLabel>
=======
            <FormLabel htmlFor="expDate">Ngày hết hạn</FormLabel>
>>>>>>> Suong
            <Input type="text" name="expDate" autoComplete="cc-exp" placeholder='04/2024' maxLength={'7'} onChange={handlechenge} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
          <FormControl isRequired>
            <FormLabel htmlFor="cvv">CVV</FormLabel>
            <Input type="text" id="cvv" autoComplete="cc-csc" />
<<<<<<< HEAD
            <FormHelperText>Last three digits on signature strip</FormHelperText>
=======
            <FormHelperText>Ba chữ số cuối trên dải chữ ký</FormHelperText>
>>>>>>> Suong
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 1 }}>
          <Checkbox colorScheme="green" defaultIsChecked>
<<<<<<< HEAD
            Remember credit card details for next time
=======
          Ghi nhớ chi tiết thẻ tín dụng cho lần tiếp theo
>>>>>>> Suong
          </Checkbox>
        </GridItem>
      </Grid>




    </>
  );
};

//===================================================================================================



const Form3 = () => {


  const { cart, paymentDetails } = useSelector((store) => store.cartReducer)
  const dispatch = useDispatch();
  const totalPrice = useRef(0)
  useEffect(() => {
    dispatch(getCartData())
    console.log(paymentDetails);
  }, [])
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
<<<<<<< HEAD
        Social Handles
      </Heading>
      <Box>
        <Heading as="h6" size="md" mb={2}>
          Order summary
=======
      Xử lý
      </Heading>
      <Box>
        <Heading as="h6" size="md" mb={2}>
        Danh sách
>>>>>>> Suong
        </Heading>
        <UnorderedList pl={0}>
          {cart?.map((product) => {
            totalPrice.current = totalPrice.current + (product.price * product.quantity)
            return (
              <ListItem key={product.id} py={1}>
                <Stack direction="row" justify="space-between" alignItems="center">
                  <Box>
                    <Box fontSize="md" fontWeight="semibold" display={'flex'} ><Image width={'30px'} height={'30px'} src={product.image} alt={product.title} />
                      <h4>{product.title}</h4>
                    </Box>
                    <Text fontSize="sm" color="gray.600">
                      {product.quantity} - {product.color}
                    </Text>
                  </Box>
                  <Text fontSize="md" fontWeight="semibold">
                    ${product.price + product.quantity}
                  </Text>
                </Stack>
              </ListItem>
            )
          })}
          <ListItem py={1}>
            <Stack direction="row" justify="space-between" alignItems="center">
              <Text fontSize="md" fontWeight="semibold">
                Total
              </Text>
              <Text fontSize="md" fontWeight="semibold">
                $ {totalPrice.current}
              </Text>
            </Stack>
          </ListItem>
        </UnorderedList>
        <Grid templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={4} mt={4}>
          <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
            <Heading as="h6" size="md" mb={2}>
<<<<<<< HEAD
              Shipping
            </Heading>
            <Text mb={2}>John Smith</Text>
            <Text mb={2}>In Heare I displayed Address</Text>
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
            <Heading as="h6" size="md" mb={2}>
              Payment details
=======
            Đang chuyển hàng
            </Heading>
            <Text mb={2}>John Smith</Text>
            <Text mb={2}>Trong Heare tôi đã hiển thị Địa chỉ</Text>
          </GridItem>
          <GridItem colSpan={{ sm: 1, md: 1 / 2 }}>
            <Heading as="h6" size="md" mb={2}>
            Chi tiết thanh toán
>>>>>>> Suong
            </Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={2}>


              <React.Fragment >
                <GridItem>
<<<<<<< HEAD
                  <Text fontWeight="semibold">Card type</Text>
=======
                  <Text fontWeight="semibold">Loại thẻ</Text>
>>>>>>> Suong
                </GridItem>
                <GridItem>
                  <Text>Visa</Text>
                </GridItem>
              </React.Fragment>


              <React.Fragment >
                <GridItem>
<<<<<<< HEAD
                  <Text fontWeight="semibold">Card holder</Text>
=======
                  <Text fontWeight="semibold">Chủ thẻ</Text>
>>>>>>> Suong
                </GridItem>
                <GridItem>
                  <Text>{paymentDetails.cardHolderName}</Text>
                </GridItem>
              </React.Fragment>

              <React.Fragment >
                <GridItem>
<<<<<<< HEAD
                  <Text fontWeight="semibold">Card number</Text>
=======
                  <Text fontWeight="semibold">Số thẻ</Text>
>>>>>>> Suong
                </GridItem>
                <GridItem>
                  <Text>'xxxx-xxxx-xxxx-{paymentDetails.cardNumber.substr(paymentDetails.cardNumber.length - 4)}</Text>
                </GridItem>
              </React.Fragment>


              <React.Fragment >
                <GridItem>
<<<<<<< HEAD
                  <Text fontWeight="semibold">Expiry date</Text>
=======
                  <Text fontWeight="semibold">Ngày hết hạn</Text>
>>>>>>> Suong
                </GridItem>
                <GridItem>
                  <Text>{paymentDetails.expDate}</Text>
                </GridItem>
              </React.Fragment>


            </Grid>
          </GridItem>
        </Grid>
      </Box>

    </>
  );
};

export const Multistep = () => {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);


  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <AddressForm /> : step === 2 ? <PaymentForm /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);

                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
<<<<<<< HEAD
                Back
=======
                Trở lại
>>>>>>> Suong
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  if (step === 1) {
                    handleSubmitTriggure();
                  }
                  if (step === 2) {

                    handlePaymentDetails();
                  }


                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Link to={"/payment"}>
                <Button
                  w="7rem"
                  colorScheme="green"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: 'Order Placed.',
                      description: "Your order placed successfully  ",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
<<<<<<< HEAD
                  Pay
=======
                  Chi trả
>>>>>>> Suong
                </Button>
              </Link>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
      <Footer />
    </>
  );
}