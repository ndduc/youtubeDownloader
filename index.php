<!DOCTYPE html>
<html lang='en'>

<head>
	<link rel='stylesheet' href='./style.css' />
        
	<title>Youtube Parser</title>
</head>

<body>
    <div class='div-Parent'>
	<h1 class='heading'>Paste URL Link Here</h1>
        <div class='div-Top'>
            <div class='div-Top-Sub'><a>URL:</a><input class='inputURL' placeholder='' /></div>
            <div class='div-Top-Sub'><a>Title:</a><input class='inputName' id='idName'/></div>
        </div>
        
        <div class='div-Bot'>
            <select class='opt'>
                    <option value='mp3'>mp3</option>
                    <!--<option value='mp4'>mp4</option>-->
            </select>
            <button class='convert-button' id='btn'>Convert</button>
            <script src='./script.js'></script>
        </div>
    </div>
</body>

</html>