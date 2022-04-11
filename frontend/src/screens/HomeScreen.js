import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
/*
Axios is a promise based HTTP client for the browser and Node. js. 
Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. 
It can be used in plain JavaScript or with a library such as Vue or React
*/
// import axios from 'axios'

const HomeScreen = () => {
  const dispatch = useDispatch()

  // From productReducer
  // useSelector grab it from the state
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  // fire the function from productActions
  // send it to the reducer
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Product</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
