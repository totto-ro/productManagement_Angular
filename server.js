const express = require( 'express' );
const app = express();
const path = require( 'path' );
const { ProductRouter } = require( './server/routes/productRouter' );


const cors = require( 'cors' );

require( './server/config/database' );
app.use( express.static(__dirname + '/public/dist/public') );

app.use( express.urlencoded({ extended: true }) );
app.use(express.json());

app.use( cors() );
app.use( '/pro', ProductRouter );

app.all( '*', function( request, response ){
    response.sendFile( path.resolve( './public/dist/public/index.html' ) )
});


app.listen(7077, function() {
    console.log("running on port 7077");
});