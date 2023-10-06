
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Center,
  Flex,
  Input,
  FormLabel,

} from '@chakra-ui/react'
import React, { useReducer, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, getAllData } from '../../redux/Admin/action'

let initialData = {
  title: "",
  image: [],
  description: "",
  color: [],
  price: 0,
  category: "",
  brand: ""
}

let reducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case 'title':
      return { ...state, title: payload }
    case 'image':
      return { ...state, image: [payload] }
    case 'description':
      return { ...state, description: payload }
    case 'color':
      return { ...state, color: payload }
    case 'price':
      return { ...state, price: payload }
    case 'category':
      return { ...state, category: payload }
    case 'brand':
      return { ...state, brand: payload }
    default:
      return state

  }
}

function AddProduct({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)


  const dispatch = useDispatch()
  const [form, setForm] = useReducer(reducer, initialData)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addProduct(form)).then(() =>{
       dispatch(getAllData())
       alert('product added successfully...')
       setForm(initialData)
      })

  }

  const { title, category, image, price, gender, color, description } = form
  return (
    <>

      <Button onClick={onOpen} bg='blackAlpha.900' colorScheme='white' >
        {children}
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
<<<<<<< HEAD
          <ModalHeader w='100%' fontWeight={'bolder'} >Thêm sản phẩm mới</ModalHeader>
          <ModalBody>
            <Flex direction={'column'} gap='8px'>
              <Flex direction={'column'}>
                <FormLabel fontWeight="bold">Tên sản phẩm</FormLabel>
=======
          <ModalHeader w='100%' fontWeight={'bolder'} >New Product</ModalHeader>
          <ModalBody>
            <Flex direction={'column'} gap='8px'>
              <Flex direction={'column'}>
                <FormLabel fontWeight="bold">title</FormLabel>
>>>>>>> Suong
                <Input onChange={(e)=>setForm({type:'title',payload:e.target.value})} value={title} name="title" />
              </Flex>
              <Flex direction={'column'}>
                <FormLabel fontWeight="bold">Image</FormLabel>
                <Input onChange={(e)=>setForm({type:'image',payload:e.target.value})} value={image} name="image" />
              </Flex>
              <Flex gap='15px'>
                <Flex direction={'column'}>
<<<<<<< HEAD
                  <FormLabel fontWeight="bold">Giá</FormLabel>
                  <Input onChange={(e)=>setForm({type:'price',payload:e.target.value})} value={price} name="price" />
                </Flex>
                <Flex direction={'column'}>
                  <FormLabel fontWeight="bold">Color</FormLabel>
=======
                  <FormLabel fontWeight="bold">price</FormLabel>
                  <Input onChange={(e)=>setForm({type:'price',payload:e.target.value})} value={price} name="price" />
                </Flex>
                <Flex direction={'column'}>
                  <FormLabel fontWeight="bold">color</FormLabel>
>>>>>>> Suong
                  <Input onChange={(e)=>setForm({type:'color',payload:e.target.value})} value={color} name="color" />
                </Flex>
              </Flex>
              <Flex direction={'column'}>
<<<<<<< HEAD
                <FormLabel fontWeight="bold">Mô tả</FormLabel>
=======
                <FormLabel fontWeight="bold">description</FormLabel>
>>>>>>> Suong
                <Input onChange={(e)=>setForm({type:'description',payload:e.target.value})} value={description} name="description" />
              </Flex>
              <Flex gap='15px'>
                <Flex direction={'column'}>
<<<<<<< HEAD
                  <FormLabel fontWeight="bold">Loại sản phẩm</FormLabel>
                  <Input onChange={(e)=>setForm({type:'category',payload:e.target.value})} value={category} name="category" />
                </Flex>
                <Flex direction={'column'}>
                  <FormLabel fontWeight="bold">Thương hiệu</FormLabel>
=======
                  <FormLabel fontWeight="bold">category</FormLabel>
                  <Input onChange={(e)=>setForm({type:'category',payload:e.target.value})} value={category} name="category" />
                </Flex>
                <Flex direction={'column'}>
                  <FormLabel fontWeight="bold">brand</FormLabel>
>>>>>>> Suong
                  <Input onChange={(e)=>setForm({type:'brand',payload:e.target.value})} value={gender} name="brand" />
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Flex justify={'flex-end'} w='100%'>
              <Button variant={'ghost'} mr={3} onClick={onClose}>
<<<<<<< HEAD
                Hủy
=======
                cancel
>>>>>>> Suong
              </Button>
              <Button onClick={(e)=>{ 
              handleSubmit(e);
              onClose()
<<<<<<< HEAD
              }} variant={'ghost'}>Thêm sản phẩm</Button>
=======
              }} variant={'ghost'}>Add Product</Button>
>>>>>>> Suong
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddProduct