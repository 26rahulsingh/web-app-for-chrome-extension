<?php

if(isset($_POST['Submit'])){
//if($_POST){
//get the url
$url = $_POST['url'];
echo 'image_url:'.$url;


	$servername = "localhost";
	$username = "rdb";
	$password = "*_4xpA#gPqX#";
	$dbname = "rahulDB";

	try {
	    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	    // set the PDO error mode to exception
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	    $sql = "INSERT INTO url (url) VALUES ('$url')";
	    // use exec() because no results are returned
	    $conn->exec($sql);
	    echo "New record created successfully";
	    }
	catch(PDOException $e)
	    {
	    echo $sql . "<br>" . $e->getMessage();
	    }

	$conn = null;





//echo 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];


//add time to the current filename
$name = basename($url);
list($txt, $ext) = explode(".", $name);
$name = $txt.time();
$name = $name.".".$ext;

//check if the files are only image / document

//if($ext == "jpg" or $ext == "png" or $ext == "gif" or $ext == "doc" or $ext == "docx" or $ext == "pdf"){

//here is the actual code to get the file from the url and save it to the uploads folder
//get the file from the url using file_get_contents and put it into the folder using file_put_contents


// $url1 = $url;
// $curl = curl_init();
// curl_setopt($curl, CURLOPT_URL, $url1);
// curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
// curl_setopt($curl, CURLOPT_HEADER, false);
// curl_setopt($curl, CURLOPT_ENCODING ,"");
// $data = curl_exec($curl);
// curl_close($curl);

//$json_link = urlencode($url);
// $protocol = strtolower(substr($_SERVER["SERVER_PROTOCOL"],0,strpos( $_SERVER["
// SERVER_PROTOCOL"],'/'))).'://';



//$upload = file_put_contents("uploads/$name",file_get_contents($url));
$upload = file_put_contents("uploads/$name",file_get_contents($url));
//check success

if($upload)echo "Success: <a href='uploads/".$name."' target='_blank'>Check Uploaded</a>";
else "please check your folder permission";
//}
//else{
//echo "Please upload only image/document files";
//}
}
?>

<html>
<head><title>File Upload</title>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
	<script>

	var url = window.location.href;
	//var url1 = $(location).attr('href'); // Returns full URL
	//console.log(url1);   

	var arr = url.split('*')[1];
	//$.post('upload.php', {url: arr});


	//<?php $url = "<script>document.write(arr)</script>"?>

    $(document).ready(function() {
    	document.getElementById("getImg").defaultValue = arr;
    	console.log(document.getElementById("getImg").defaultValue);
        document.getElementById("img").src = arr;
        document.getElementById("getImg").style.display = 'none';
    });


    $(document).ready(function (){
        $.ajax({
        	url: 'getURL.php',
        	type: "post",
        	success: function(response) {
	        	// .. do something
	        	console.log(response);
	      	},
            error: function(jqXHR, textStatus, errorMessage) {
            	console.log(errorMessage); // Optional
            }
       	});
    });

   
	</script>
</head>
<body>
<h3>Upload image to Web Server</h3>
    <img src = "" id = "img" height="350" width="400" /><br><br>
	<form action="" method="post">
		Upload image:
		<input type="text" name="url" id="getImg" />
        <input type="submit" name="Submit"/>
        <!-- <input type="text" name="url" /> -->

	</form>
</body>
</html>