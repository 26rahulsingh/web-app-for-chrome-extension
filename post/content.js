
$('body').append('<img id="test" src="http://shoppingpost.in/Trophy.png"  height="25" width="25" style="display: none"/>');
//$('body').append('<img id="test" src="http://shoppingpost.in/Trophy.png" />');
$("#test").css("display", "none");

var url1='';

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}


$("a img").mouseenter(function(){

	$('#test').css('display','block');
	//$('#test').attr('style', 'width: 20px !important');
	//console.log({top: $(this).offset().top, left: $(this).offset().left});
	$('#test').css({top: $(this).offset().top, left: $(this).offset().left, position:'absolute'});
	//$('#test').css({top: parseInt($(this).offset().top + 5), left: parseInt($(this).offset().left + 5), position:'absolute'});
	console.log("image", $(this));
	var url = $(this);
	url1 = url.prop('src');
	//url1 = url.attr('src');
	console.log(url1);
	// if ($(this).width()<10) {
	// 	$('#test').css('display','none');
	// }
}).mouseout(function () {
	$('#test').css('display','none');
	console.log('mouse out');
});




$("#test").click(function(){
	//var url = $(this).attr('href');
	//var url = $(this).prop('href');
	//var url1 = url.prop('src');
	console.log(url1);

	var encodedString = Base64.encode(url1);
	console.log('encode', encodedString);

	// Decode the String
	var decodedString = Base64.decode(url1);
	console.log('decode', decodedString);

	//console.log($(this));
	//window.open(url,'window','toolbar=no, menubar=no, resizable=no width=200,height=100');
	
	//window.open("http://localhost/extension/upload.php?image=*" + url1, "window", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=400,width=500,height=500");
	window.open("http://fb.code-b.in/extension/upload.php?image=*" + url1, "window", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=400,width=500,height=500");


	//w.document.write('<h1>Popup Test!</h1>');

	//window.open("http://localhost/extension?image=" + url1, "window");

    //window.location.href = url1;
    //$(location).attr('href',url1);


    // $.post("http://localhost/extension?image="+url1, function(data, status){
    //         alert("Data: " + data + "\nStatus: " + status);
    //     });



    //window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=400,width=500,height=500");


 // 	var link = document.createElement('a');
	// link.href = url1;  // use realtive url 
	// link.download = 'image.jpeg';
	// document.body.appendChild(link);
	// link.click();

});




// $('img').mousemove(function(){
//     // var x = e.pageX - this.offsetLeft;
//     // var y = e.pageY - this.offsetTop;
//     $('#test').css('display','block');
//     //$('#test').html("X: " + x + " Y: " + y); 
//     //$(this).offset.left(this).offsetTop
//     $('#test').css({top: $(this)offset.top, left: $(this)offset.left, position:'absolute'});
// });



$("#test").mouseover(function() {
	$("#test").css("display", "block");
	console.log("show image");
}).mouseout(function () {
	$('#test').css('display','none');
	console.log("mouseout 1");
});


