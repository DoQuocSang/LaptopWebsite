import {
  Box,
  Heading,
  Text,
  Flex,
  Img,
  Input,
  border,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import delivery from '../../Assets/delivery.svg';
import { useDispatch } from 'react-redux';
import { postSingleProductItem } from '../../redux/CartReducer/action';
import { useNavigate } from 'react-router-dom';
import { calculateDiscountedPrice, toThousandFormat } from '../../Utils/Utils';
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const NewRight = ({ spData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roundedRating = Math.round(spData.rating);

  const handleAddToCart = () => {
    dispatch(postSingleProductItem({ ...spData, quantity: 1 })).then(res =>
      navigate('/cart')
    );
  };

  const handleBuySingleProduct = () => {
    dispatch(postSingleProductItem({ ...spData, quantity: 1 })).then(res =>
      navigate('/payment')
    );
  };

  return (
    <Box textAlign={'left'} margin={['5%', '5%', '10%', '10%']}>
      <Box>
        <Heading
          size="1000px"
          fontSize="xl"
          fontWeight={'extrabold'}
          fontFamily={'sans-serif'}
        >
          {spData.name}
        </Heading>

        <Text
          fontSize={'md'}
          textAlign={'left'}
          opacity="70%"
          paddingY={'1.5%'}
        >
          {spData.description}
        </Text>
        <Box display={'flex'} fontSize={'15px'}>
          {Array.from({ length: 5 }).map((_, index) => {
            const isFilled = index < roundedRating;
            return isFilled ? (
              <FaStar key={index} color="green" className="stroke-1 " />
            ) : (
              <FaRegStar key={index} color="gray" />
            );
          })}
        </Box>
      </Box>

      <Box paddingY={'1%'}>
        <Box display="flex" alignItems="center">
          <Box paddingRight={'3%'}>
            <Text fontSize={'xl'} display={'flex'} >
              Giá:
              <Text paddingLeft={'5px'} fontWeight={'semibold'} textDecoration={'line-through'}>
                {toThousandFormat(spData.price)} VNĐ
              </Text>
            </Text>
          </Box>
          <Box
            backgroundPosition="center"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            height="40px"
            width="150px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            background={'#ff5757'}
            borderBottomRightRadius={'15px'}
            borderTopLeftRadius={'15px'}
          >
            <Text color={'white'} fontWeight={'bold'} paddingLeft={'4px'}>
              Giảm đến
            </Text>
            <Heading color={'white'} paddingLeft={'5px'} size="lg" fontWeight="bold">
            {spData.discount}%
            </Heading>
          </Box>
        </Box>
        <Box fontWeight={'5px'}>
          <Heading display={'flex'} color={'#ff5757'}>
            <Heading paddingRight={'2px'}></Heading>
            {toThousandFormat(calculateDiscountedPrice(spData.price, spData.discount))}
          </Heading>
        </Box>
      </Box>

      <Box>
        <Heading size={'md'}>Thông số kỹ thuật</Heading>

        <Box
          spac
          paddingLeft={'2%'}
          marginY={'3%'}
          borderLeft={'3px solid #03fcd3'}
          fontSize={'md'}
          opacity={'70%'}
        >
          <Text>Thương hiệu: None</Text>
          <Text>Phân loại: None</Text>
          <Text>Năm sản xuất: {spData.time_release}</Text>
        </Box>
      </Box>

      <Table variant="simple" marginY={'3%'}>
      <Thead>
        <Tr bgColor="orange.200">
          <Th width="30%">Thành phần</Th>
          <Th>Thông số</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td width="30%">CPU</Td>
          <Td>{spData.cpu}</Td>
        </Tr>
        <Tr bgColor="gray.100">
          <Td width="30%">RAM</Td>
          <Td>{spData.ram}</Td>
        </Tr>
        <Tr>
          <Td width="30%">Ổ cứng</Td>
          <Td>{spData.disk}</Td>
        </Tr>
        <Tr bgColor="gray.100">
          <Td width="30%">Card màn hình</Td>
          <Td>{spData.graphic_card}</Td>
        </Tr>
        <Tr>
          <Td width="30%">Hệ điều hành</Td>
          <Td>{spData.operating_system}</Td>
        </Tr>
        <Tr bgColor="gray.100">
          <Td width="30%">Card màn hình</Td>
          <Td>{spData.graphic_card}</Td>
        </Tr>
        <Tr>
          <Td width="30%">Hệ điều hành</Td>
          <Td>{spData.operating_system}</Td>
        </Tr>
        <Tr bgColor="gray.100">
          <Td width="30%">Kích thước</Td>
          <Td>{spData.size}</Td>
        </Tr>
        <Tr>
          <Td width="30%">Khối lượng</Td>
          <Td>{spData.weight}</Td>
        </Tr>
        <Tr bgColor="gray.100">
          <Td width="30%">Cổng kết nối</Td>
          <Td>{spData.connector}</Td>
        </Tr>
        <Tr>
          <Td width="30%">Thiết kế</Td>
          <Td>{spData.design}</Td>
        </Tr>
      </Tbody>
    </Table>

      <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
        <Button
          onClick={handleAddToCart}
          bg={'black'}
          textColor={'white'}
          fontSize={'17px'}
          width={'250px'}
          border={'2px solid black'}
          colorScheme="white"
        >
          Thêm vào giỏ hàng
        </Button>
        <Button
          onClick={handleBuySingleProduct}
          backgroundColor={'black'}
          textColor={'white'}
          fontSize={'17px'}
          width={'250px'}
          border={'2px solid black'}
          colorScheme="white"
        >
          Mua ngay
        </Button>
      </Box>

      <Box>
        <Box display={'flex'} marginY={'1.5'} justifyItems={'center'}>
          <Img maxWidth={'30px'} src={delivery} />
          <Text fontWeight={'semibold'}>Miễn phí giao hàng</Text>
        </Box>
        <Text
          fontSize={'sm'}
          fontWeight={'semibold'}
          opacity={'80%'}
          paddingBottom={'3%'}
        >
          Nhập mã ZipCode của bạn để kiểm tra vị trí giao hàng
        </Text>

        <InputGroup size="md">
          <Input pr="4.5rem" placeholder="Nhập mã" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              Check
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>

      <Box marginY={'3'}>
        <Text fontWeight={'medium'}>Chính sách hoàn trả</Text>
        <Text fontSize={'md'} opacity={'70%'}>
          Đổi trả trong vòng 7 ngày
        </Text>
      </Box>
      <Box>
        <Text
          cursor={'pointer'}
          _hover={{ opacity: '70%' }}
          textDecoration={'underline'}
          fontWeight={'medium'}
        >
          Điều khoản & Điều kiện
        </Text>
      </Box>
    </Box>
  );
};

export default NewRight;
