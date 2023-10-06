import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import paymentlogo from '../../Assets/payment.png';
import PaymentPopup from './PaymentPopup';
import '../../Css/PaymentDetail.css';

const PaymentDetail = () => {
  const [set, setClass] = useState('');
  const [val, setTrue] = useState(false);
  const [card, setCard] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [security, setSecurity] = useState('');
  const [dis, setDis] = useState(true);
  const toast = useToast();

  const validation = e => {
    e.preventDefault();
    if (!card || !name || !expiry || !security) {
      toast({
        title: 'Vui điền thông tin thẻ',
        description: 'Thông tin không được để trống',
        status: 'error',
        duration: 2000,
        position: 'top',
        isClosable: true,
      });
      return;
    }

    if (card.length !== 16) {
      toast({
        title: 'Xin lỗi!',
        description: 'Thẻ phải bao gồm 16 chữ số',

        status: 'warning',
        duration: 2000,
        position: 'top',
        isClosable: true,
      });
      return;
    }

    setDis(false);
    return;
  };

  return (
    <Flex
      className={set}
      pt="90px"
      px="3%"
      justifyContent={'center'}
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      gap={{ base: '50px', md: '70px', lg: '' }}
    >
      <Flex
        m="auto"
        w={{ base: '100%', sm: '100%', md: '80%', lg: '50%' }}
        p={{ base: '20px', sm: '30px', md: '10px', lg: '100px' }}
        justifyContent={'center'}
      >
        <Image src={paymentlogo} />
      </Flex>

      <Box w={{ base: '100%', sm: '100%', md: '80%', lg: '50%' }} m="auto">
        <Box
          p={{ base: '20px', sm: '30px', md: '10px', lg: '100px' }}
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
        >
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '20px',
              margin: 'auto',
            }}
          >
            <FormControl>
              <FormLabel>Số thẻ</FormLabel>
              <Input
                onChange={e => {
                  setCard(e.target.value);
                }}
                type="number"
                placeholder="1234 5678 9012 3456"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Tên thẻ</FormLabel>

              <Input
                onChange={e => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="your name"
              />
            </FormControl>
            <Flex>
              <FormControl>
                <FormLabel>Ngày hết hạn</FormLabel>
                <Input
                  onChange={e => {
                    setExpiry(e.target.value);
                  }}
                  type="number"
                  placeholder="mm yy"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Mã bảo mật</FormLabel>

                <Input
                  onChange={e => {
                    setSecurity(e.target.value);
                  }}
                  type="number"
                  placeholder="* * *"
                />
              </FormControl>
            </Flex>
            <Center>
              <Button
                bg="green"
                colorScheme="black"
                w="200px"
                onClick={validation}
              >
                Kiểm tra
              </Button>
            </Center>
            <Center>
              <PaymentPopup
                bg="blackAlpha.900"
                colorScheme="white"
                w="200px"
                val={dis}
              >
                Hoàn tất đặt hàng
              </PaymentPopup>
            </Center>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};
export default PaymentDetail;
