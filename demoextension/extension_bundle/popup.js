function summarize() {
	chrome.tabs.executeScript(null, { file: "jquery-2.2.js" }, function() {
		chrome.tabs.executeScript(null, { file: "content.js" });
		chrome.tabs.insertCSS(null,{file:"bootstrap.min.css"});
		chrome.tabs.executeScript(null, { file: "bootstrap.min.js" });
	});
}
document.getElementById('clickme').addEventListener('click', summarize);