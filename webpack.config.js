const path = require('path');

module.exports = {
    entry:"./js/index.js",
    module:{rules:[]},
    plugins:[],
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    }
}