$(document).ready(function(){
    var url='https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url,function(data){
        console.log(data);
        var currentQuote=''
        var quotes=data.hits;
        $('.read').on('click',function(){
            currentQuote=quotes[Math.floor(Math.random())*quotes.length]
        });


    });

});
