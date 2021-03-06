module.exports = {
    entry  : './app/app.jsx',
    output : {
        path : __dirname,
        filename : './public/bundle.js'
    } ,
    resolve : {
        modules:[__dirname,'node_modules'],
        extensions : ['.js','.jsx'],
        //alias : {} uncomment this if you want to using an alias modules name
    },module:{
        loaders:[
            {
                'loader':'babel-loader',
                query:{
                    presets:['react','es2015']
                },
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/
            }
        ]
    }
}