const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

var query = '';



app.use(cors());

app.listen(4000, () => {
	console.log('Server Works !!! At port 4000');
});



app.get('/downloadmp3', async (req, res, next) => {
	try {
		var url = req.query.url;
		var YoutubeMp3Downloader = require("youtube-mp3-downloader");
		//Configure YoutubeMp3Downloader with your settings
		var YD = new YoutubeMp3Downloader({
			"outputPath": "C:/xampp/htdocs/leeleelookupphp/youtubeDownloader/Audio",    
			"ffmpegPath": "C:/ffmpeg/bin/ffmpeg.exe",        // Where is the FFmpeg binary located?
			
			// Where should the downloaded and encoded files be stored?
			"youtubeVideoQuality": "highest",       // What video quality should be used?
			"queueParallelism": 2,                  // How many parallel downloads/encodes should be started?
			"progressTimeout": 2000                 // How long should be the interval of the progress reports
		});
		//Download video and save as MP3 file
		YD.download(url);
		YD.on("finished", function(err, data) {
			//console.log(JSON.stringify(data));
			console.log("Finished");
		});
		YD.on("error", function(error) {
			console.log(error);
		});
		YD.on("progress", function(progress) {
			console.log(JSON.stringify(progress));
		});

		

	} catch (err) {
		console.error(err);
	}
});

app.get('/downloadmp4', async (req, res, next) => {
	try {
		let URL = req.query.url;
		let title = 'video';

		await ytdl.getBasicInfo(URL, {
			format: 'mp4'
		}, (err, info) => {
			title = info.player_response.videoDetails.title;
		});

		res.header('Content-Disposition', `attachment; filename="${title}.mp4"`);
		ytdl(URL, {
			format: 'mp4',
		}).pipe(res);
	} catch (err) {
		console.error(err);
	}
});