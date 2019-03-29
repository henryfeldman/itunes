$(document).ready(function(){


    $("#go").click(function(){
        $("#songs").empty();
        var artist = $("#artist").val();

        $.ajax({
            url: "https://itunes.apple.com/search?term=" + artist,
            dataType: "jsonp",
            success: myCallback
        });


    });
    $("#reset").click(function(){
       $("#songs").empty();
    });



});


function myCallback(myData) {

    $("#songs").append("<br><br>" + $("#artist").val() + "'s top " + $("#typeOfSearch").val() + " hits: " +"<br><br>");
    var newTable = "<table id='table'>";
    for(var i = 0; i < $("#typeOfSearch").val(); i++){

        newTable += "<tr>";
        newTable += ("<td>" +"Rank: "+ (i+1) +"</td>");
        newTable += ("<td>" +"<img src = " + myData.results[i].artworkUrl100 + ">" +"</td>");
        newTable+= ("<td>" +"<audio controls='true' src =" + myData.results[i].previewUrl + "></audio>" +"<br><br>"+"</td>" );
        newTable+= ("<td>" +"Song Name: " + myData.results[i].trackName + ",");
        newTable+= ("<td>" +"Album Name: " + myData.results[i].collectionName +" "+"</td>" );
        newTable+= "<td>" + "<a href= 'detail.html?artist=" + myData.results[i].artistName + "&song=" + i + "'>" +"More Info" + "</a>" +"</td>";
        newTable+="</tr>";
    }
    newTable+="</table>";
    $("#songs").append(newTable);




console.log(myData);
console.log(myData.results)


}

