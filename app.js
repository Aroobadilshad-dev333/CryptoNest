
let btc = document.getElementById("Bitcoin");
let eth = document.getElementById("ethereum");
let doge = document.getElementById("dogecoin");

let settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
  "method": "GET",
  "headers": {},
  "error": function(xhr, status, error) {
    console.log("Error: " + error);
  }
};

$.ajax(settings).done(function(response) {
  btc.innerHTML = response.bitcoin.usd;
  eth.innerHTML = response.ethereum.usd;
  doge.innerHTML = response.dogecoin.usd;
});

