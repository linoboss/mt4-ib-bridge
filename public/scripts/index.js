$(document).ready(function(){
    $("button").click(function(){
        symbol = $(".symbol")[0].value
        price = parseInt($(".price")[0].value);
        date = "22000";
        console.log(price, date)
        $.post("http://localhost:3000",
        {
            symbol: symbol,
            price: price,
            date: date
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});