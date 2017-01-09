var everyKid = 
    '<div class="kid">' +
        '<div class="panel panel-info">' +
          '<div class="panel-heading">' +
            '<h3>nameKid</h3>' +
          '</div>' +
          '<div class="panel-body">' +
            '<div class="col-sm-4">' +
              '<img class="img-responsive" src="imageKid">' +
            '</div>'+
            '<div class="col-sm-8">' +
              '<ul>' +
                '<li><h5>Години: yearsKid</h5></li>' +
                '<li><h5>Любим цвят: eyeKid</h5></li>' +
                '<li><h5>Любима игра: gameKid</h5></li>' +
                '<li><h5>Лъбима храна: foodKid</h5></li>' +
              '</ul>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>' ;

$.getJSON("js/kids.json", function(kid){
    var kids = kid;
    // console.log(kids);
    kids.forEach(function(oneKid){
        var putKid = everyKid.replace("nameKid", oneKid.name)
                            .replace("imageKid", oneKid.img)
                            .replace("yearsKid", oneKid.age)
                            .replace("eyeKid", oneKid.color)
                            .replace("gameKid", oneKid.game)
                            .replace("foodKid", oneKid.food);
        $('#kids').append(putKid);
    });

});