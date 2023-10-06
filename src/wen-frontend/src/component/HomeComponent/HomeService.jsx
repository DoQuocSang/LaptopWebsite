import {
  Box,
  Center,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const data = [
  {
    image:
      'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png',
    text: 'Câu hỏi thường gặp',
  },
  {
    image:
      'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png',
    text: 'Quy trình thanh toán trực tuyến',
  },
  {
    image:
      'https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png',
    text: 'Giao hàng tận nơi',
  },
];

const HomeService = () => {
  return (
    <Flex direction={'column'} gap="50px" px="3%" mt="20px">
      <Center>
        <Heading fontSize={{ base: '25px', md: '32px' }}>
          Dịch vụ trợ giúp cửa hàng
        </Heading>
      </Center>
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(3,1fr)',
        }}
        gap="20px"
      >
        {data.map((el, ind) => (
          <Flex
            key={ind}
            direction={'column'}
            boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
            borderBottomRadius={'20px'}
            bg="red.50"
          >
            <Stack
              mt="6"
              spacing="4"
              p="30px"
              pr="150px"
              color="blackAlpha.900"
            >
              <Heading fontSize={{ base: '18px', sm: '20px', md: '25px' }}>
                {el.text}
              </Heading>
              <Text>
                Thông tin cập nhật về Mua sắm an toàn tại Cửa hàng của chúng tôi
              </Text>
            </Stack>
            <Box
              bgImage={el.image}
              w="100%"
              h="250px"
              className="homecard"
            ></Box>
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default HomeService;
