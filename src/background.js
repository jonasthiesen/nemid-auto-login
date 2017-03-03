const Tesseract = require('tesseract.js');

Tesseract.recognize("icon.png")
		 .progress(function (p) { console.log('progress', p) })
		 .then( function (result) { console.log('result', result) })

chrome.browserAction.onClicked.addListener(function(tab) { alert("test")});