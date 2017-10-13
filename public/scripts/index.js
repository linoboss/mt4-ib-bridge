$(document).ready(function(){
    $("button").click(function(){
        symbol = $(".symbol")[0].value
        price = parseFloat($(".price")[0].value);
        take_profit = parseFloat($(".take_profit")[0].value);
        stop_loss = parseFloat($(".stop_loss")[0].value);
        $.post("http://localhost:3000",
        {
            symbol: symbol,
            price: price,
            take_profit: take_profit,
            stop_loss: stop_loss
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});