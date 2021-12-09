const mongoose = require( 'mongoose' );

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minlength : 4, 
        maxlength : 20
    },
    price : {
        type : Number,
        required : true,
    },
    image : {
        type : String,
    }


    
}, { timestamps: true });

const Product = mongoose.model( 'products', ProductSchema );

const ProductModel = {
    createProduct : function( newProduct ){
        return Product.create( newProduct );
    },

    getAllProducts : function( ){
        return Product.find().sort( { created_at: -1 } );
    },

    getProductByName : function( productName ){
        return Product.findOne( {productName : productName} );
    },

    getProductById : function( id ){
        return Product.findOne( { _id : id } );
    },

    updateProduct: function( id, productToUpdate ){
        return Product.findOneAndUpdate( { _id : id },{ $set:productToUpdate }, { new:true } )
    },

    destroyProduct : function( id ){
        return Product.deleteOne({ _id : id });
    },

};

module.exports = {ProductModel};