var replace = function(sentence){
  var output = [];
  var letters = sentence.split("");
  letters.forEach(function(letter){
    if(letter =="a" || letter == "e" || letter =="i" || letter == "o"|| letter == "u"){
      letter = "-";
    }
  output.push(letter);
  });
  return output.join("");
}

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var sentence = $("#sentence").val();
    sentence = replace(sentence);
    $("#results").children().remove();
    $("#results").append("<p>" + sentence + "</p>");
  });
});
