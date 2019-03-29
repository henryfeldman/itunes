
    $.ajax({
        url: "http://itunes.apple.com/search?term=" + getQueryParameter("artist"),
        dataType: "jsonp",
        success: secondCallback
    });

function secondCallback(detailedData) {
    var date = new Date(detailedData.results[getQueryParameter("song")].releaseDate);
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    var milliseconds = detailedData.results[getQueryParameter("song")].trackTimeMillis;
    var totalSeconds = Math.round(milliseconds / 1000);
    var numMinutes = Math.floor(totalSeconds / 60);
    var numSeconds = totalSeconds - (60 * numMinutes);


    $("#details").append("<img src = " + detailedData.results[getQueryParameter("song")].artworkUrl100 + "><br><br>");
    $("#details").append("Artist: " + detailedData.results[getQueryParameter("song")].artistName + "<br>");
    $("#details").append("Song Name: " + detailedData.results[getQueryParameter("song")].trackName + "<br>");
    $("#details").append("Album Name: " + detailedData.results[getQueryParameter("song")].collectionName + "<br>");
    $("#details").append("Genre: " + detailedData.results[getQueryParameter("song")].primaryGenreName + "<br>");
    $("#details").append("Release Date: " + month + "/" + day + "/" + year + "<br>");
    $("#details").append("Price of Album: $" + detailedData.results[getQueryParameter("song")].collectionPrice + "<br>");
    $("#details").append("Price of Song: $" + detailedData.results[getQueryParameter("song")].trackPrice + "<br>");
    if (numSeconds < 10) {
        $("#details").append("Time: " + numMinutes + ":0" + numSeconds + "<br>");
    } else {
        $("#details").append("Time: " + numMinutes + ":" + numSeconds + "<br>");
    }

    if (detailedData.results[getQueryParameter("song")].collectionExplicitness = "Explicit") {
        $("#details").append("Explicit" + "<br>");
    } else {
        $("#details").append("Not Explicit" + "<br>");
    }

}


function getQueryParameter(name) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == name){return pair[1];}
    }
    return false;
}
