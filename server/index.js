const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config.js');
const sequelize = require('./config/database');
const path = require('path');

const app = express();
const compiler = webpack(webpackConfig);

// Webpack middleware
if (process.env.NODE_ENV !== 'production') {
    app.use(webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath
    }));
    app.use(webpackHotMiddleware(compiler));
}

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files from public directory
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// Database connection and server start
const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log('📦 Database connection established.');
        
        await sequelize.sync();
        console.log('🔄 Database synchronized.');
        
        app.listen(PORT, () => {
            console.log(`🚀 LCARS Timeline running at http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Unable to start server:', error);
    }
}

startServer(); 
