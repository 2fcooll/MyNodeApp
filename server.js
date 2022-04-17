const express = require('express');
const { sequelize } = require('./models');
const storages = require('./storage');

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/avatars', express.static(__dirname + '/avatars'));

app.post('/users'); // create
app.post('/users/rating/:id'); // create
app.get('/users'); // get all
app.get('/users/:id'); // get by id
app.put('/users/:id');  // update by id
app.post('/users/login'); // login
app.post('/users/reset_password'); // reset password
app.post('/users/upload_avatar', storages.avatarUpload.single('avatar')); // upload avatar

app.post('/products'); // create
app.get('/products'); // get all
app.get('/products/:id'); // get by id
app.put('/products/:id');  // update by id
app.post('/products/upload_images', storages.productUpload.array('images')); // upload product images
app.put('/products/raise_to_top/:id'); // raise_to_top - update time creation and get row position - or field auto incrementing
app.put('/products/pause/:id'); // pause
app.put('/products/resume/:id'); // resume
app.delete('/products/:id') // delete
app.post('/products/to_favorites/:id') // to_favorites ?? - additional table
app.delete('/products/from_favorites/:id') // from_favorites ?? - additional table and create field inFavorites

app.get('/products/search') // tag, category, price from, price to, town - search by tags - and then create request to get products
// pagination also

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    console.log('We are live on ' + PORT);
});