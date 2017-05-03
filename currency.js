const $  = require('jquery');

var currency = function(currency, callback){
  $.getJSON(`http://api.fixer.io/latest?base=${currency}`, (data)=>{
    callback(data);
  });
};



module.exports = currency;
