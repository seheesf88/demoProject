const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'get route'
  })
})

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  }
  res.status(201).json({
    message: 'post route',
    createdProduct: product
  })
})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if(id === 'special'){
    res.status(200).json({
      message: 'single get route',
      id: 'id'
    })
  }else{
    res.status(200).json({
      message: 'single get else'
    })
  }
})


router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'patch'
  });
})

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'delete'
  });
})

router.put('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'put route'
  })
})

module.exports = router;
