let Btn = document.getElementById('btn');
let URLinput = document.querySelector('.inputURL');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

Btn.addEventListener('click', () => {
	if (!URLinput.value) {
		alert('Enter YouTube URL');
	} else {
		if (select.value == 'mp3') {
			redirectMp3(URLinput.value);
		} else if (select.value == 'mp4') {
			redirectMp4(URLinput.value);
		}
	}
});

function redirectMp3(query) {
    var url = `${serverURL}/downloadmp3?url=${query}`;
        console.log(url);
        xmlhttpConnetion(`${serverURL}/downloadmp3?url=${query}`);
        
	//window.location.href = `${serverURL}/downloadmp3?url=${query}`;
}

function redirectMp4(query) {
	window.location.href = `${serverURL}/downloadmp4?url=${query}`;
}


function xmlhttpConnetion(url) {
    var name = document.getElementById('idName').value;
    console.log(name);
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    };
    xmlhttp.open("GET", "phpfunction/file_to_server.php?action=mp3&u="  + url+ "&t=" + name, true);
    xmlhttp.send();
}
