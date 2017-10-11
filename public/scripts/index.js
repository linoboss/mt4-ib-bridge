$(document).ready(function(){
    $("button").click(function(){
        symbol = $(".symbol")[0].value
        price = parseInt($(".price")[0].value);
        $.post("http://localhost:3000",
        {
            symbol: symbol,
            price: price
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});