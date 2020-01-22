alert("Generating Images Map Of This Site. This may take up to 30 seconds depending on site");
debugger;
function unicodeToChar(text) {
	return text.replace(/\\u[\dA-F]{4}/gi, 
	      function (match) {
	           return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
	      });
}

// called the collect_images function to get html generated which contains images.

item_embedded_in_body = collect_images(document.images)
document.body.innerHTML = item_embedded_in_body;


// written function to collect images of the site.
// uses concepts of Array collect site images into it by grabbing it from web document

function collect_images(images){
	debugger;
	imagestrings = ''
	image_elements = Array.from(images)
	$.each(image_elements,function(key,value){
		imagestrings += '<div class="class=" carousel carousel-item""><img class="mr-100" src="'+value.src+'"" alt="Italian Trulli"></div>'
	})

	return imagestrings
}