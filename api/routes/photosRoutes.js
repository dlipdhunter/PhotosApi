module.exports = function(app){

    var photos = require('../controllers/photosController');

    app.route('/photos').get(photos.getPhoto);

    app.route('/photos/all').get(photos.getPhotoNames);
    
};