const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'order get route'
  })
})

router.post('/', (req, res, next) => {
  const order = {
    productId : req.body.productId,
    quantity: req.body.quantity
  }
  res.status(201).json({
    message: 'order post route',
    order: order
  })
})

router.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'order details',
    orderId: req.params.orderId
  })
})


router.patch('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'order patch details',
    orderId: req.params.orderId
  })
})

router.put('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'order put details',
    orderId: req.params.orderId
  })
})

router.delete('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'order delete details',
    orderId: req.params.orderId
  })
})


module.exports = router;
