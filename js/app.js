var carService = require('./carService.js');
var seRegister = require('./swRegister.js');
window.pageEvents = {
    loadCarPage: function(carId){
        carService.loadCarPage(carId);
    },
    loadMore: function () {
        carService.loadMoreRequest();
    }
};
carService.loadMoreRequest();