$(document).ready(function(){
    $("button").click(function(){
        price = parseInt($(".entrada")[0].value);
        date = "22000";
        console.log(price, date)
        $.post("http://localhost:3000",
        {
            price: price,
            date: date
        },
        function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
});