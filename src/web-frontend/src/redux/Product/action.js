
import axios from 'axios';
import {
  SINGLE_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from './actionType';

export const getProducts = (paramObj, page) => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  axios

    .get(`http://localhost:8080/api/v1/product/paged?page=${page}&limit=8`, paramObj)

    .then(res => {
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data.data.data,
        totalProducts: res.data.data.total,
      });
      console.log(res.data.data.data)
      console.log(res.data.data.total)
      // let value = res.headers['x-total-count'];
      // console.log(value)
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//https://gopi.onrender.com/products

export const singleProductfunc = id => dispatch => {
  dispatch({ type: PRODUCT_REQUEST });
  console.log('sghdgassdj');
  return axios
    .get(`http://localhost:8080/api/v1/product/${id}`)
    .then(res => {
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: res.data.data });
      console.log(res.data.data);
    })
    .catch(err => {
      dispatch({ type: PRODUCT_FAILURE });
      console.log("Loi");
    });
};
