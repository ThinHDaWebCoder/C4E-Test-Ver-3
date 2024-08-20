function triangle(x){
    for (input = 1; input <= x; input++) {
        var a = "*";
        for (var j = 2; j <= input; j++) {
          var a = a + '' + "*";
        }
        console.log(a);
    }
}
// var toAdd = document.createDocumentFragment();
// for(var i=0; i < 11; i++){
//    var newDiv = document.createElement('div');
//    newDiv.id = 'r'+i;
//    newDiv.className = 'ansbox';
//    toAdd.appendChild(newDiv);
// }

// document.appendChild(toAdd);

triangle(4)