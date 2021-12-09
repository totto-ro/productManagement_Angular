const express = require( 'express' );
const ProductRouter = express.Router();
const { ProductsController } = require( '../controllers/productsController' );

ProductRouter
    .route( '/' )
    .post( ProductsController.createProduct )
    .get( ProductsController.getAllProducts );

ProductRouter
    .route( '/:id' )
    .get( ProductsController.getOneProduct )
    .put( ProductsController.updateProduct)
    .delete( ProductsController.deleteProduct );


module.exports = { ProductRouter };