const {ProductModel} = require( '../models/productModel' );

const ProductsController = {


    getOneProduct: function (request, response) {
        let id = request.params.id;

        ProductModel
        .getProductById( id )
            .then(data => {
                if( data === null ){
                    throw new Error( "That product doesn't exist" );
                }
                else{
                    ProductModel
                        .getProductById( id )
                        .then( result => {
                            response.status( 200 ).json( result );
                        });
                }
            })
            .catch( error => {
                response.statusMessage = error.message;
                response.status( 404 ).end();
            })
    },

    getAllProducts : function( request, response ){
        ProductModel.getAllProducts()
            .then( products => {
                let productsMap = products.map( product => {
                    // Map through comments here if you need to include comments too
                    return {
                        id : product._id,
                        title : product.title,
                        price : product.price,
                        image : product.image
                    }
                } )
                response.status( 200 ).json( productsMap );
            });
    },
    createProduct : function( request, response ){
        let { title } = request.body;
        let { price } = request.body;
        let { image } = request.body;

        if( title && price ){
            let newProduct = {
                title,
                price,
                image
            };
            console.log(newProduct);
            ProductModel
                .createProduct( newProduct)
                .then( product => {
                    response.status( 201 ).json( product );
                })
                .catch(error => {
                    console.log("Error to create product: ", error);
                    response.statusMessage = "The products name most be at least 4 characters long! Try again!";
                    response.status( 404 ).end();
                }); 
        }
        else{
            response.statusMessage = "You are missing a field to create a new Product";
            response.status( 406 ).end();
        }      
    },

    updateProduct : function( request, response ){
        if (request.body.title.length < 4 || request.body.price == null ){
            response.statusMessage =  "The products name most be at least 4 characters long and/or provide a valid value for price" ;
            response.status( 406 ).end();
            } 
            else{
                let title = request.body.title;
                let price = request.body.price;
                let image = request.body.image;
                let id = request.params.id;
                let newProduct = { 
                    title,
                    price,
                    image 
                };
                ProductModel
                .updateProduct(id, newProduct)
                .then(data => {
                    response.status( 201 ).json( data );
                })
                .catch(error => {
                    response.statusMessage = error.message;
                    response.status( 404 ).end();
                });
            }
        },

    deleteProduct : function( request, response ){
        ProductModel
            .destroyProduct(request.params.id)
            .then(data => {
                response.json(data);
            })
            .catch(error => {
                response.json( "Product does not exist" );
            }); 
    },
    

}

module.exports = {ProductsController};