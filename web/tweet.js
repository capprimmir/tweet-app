$.ajax({
    type: "GET",
    url: "/ajax",
    success: function(data) {
        for (var i = 0; i < data.tweets-list.length; i++){
            appendNewTweet(data.tweets-list[i]);
        }
    }
});

//function to generate a new div to append on webpage
function appendNewTweet(tweet){
    var newTweet = "<div class='tweet-container'>" +
    "<div class='tweet-time'>" + new Date(tweet.time).toLocaleDateString() + "</div>" +
    "<div class='tweet-body'>" + tweet.text + "</div>" +
    "</div>"

    // prepend will add latest tweet to the top
    $('#target-tweet').prepend(newTweet);
}

$('#tweet').click(function() {
    $.ajax({
        type: "POST",
        url: "/ajax",
        contentType: 'application/json',
        data: JSON.stringify({tweet: $('#new-tweet').val()}),
        success: function(data) {
            appendNewTweet(data);
            //clears the value in the input box
            $('#new-tweet').val('');
        }
    })
});