function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});


// function myfunc(){
//     var x = $('#options option:selected').text();
//     chrome.extension.sendMessage({sel_text: x});
// }

// $(document).ready(function(){
//     $('#options').change(myfunc);
// });



