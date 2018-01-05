$(document).ready(function(){
    $(".card").click(function(event){
        event.preventDefault();
        //Get clicked link href
        		var image_href = $(this).attr("href");

        		/*
        		If the lightbox window HTML already exists in document,
        		change the img src to to match the href of whatever link was clicked

        		If the lightbox window HTML doesn't exists, create it and insert it.
        		(This will only happen the first time around)
        		*/

        		if ($('#lightbox').length > 0) { // #lightbox exists

        			//place href as img src value
        			$('#content').html('<iframe src="' + image_href + '" ></iframe>');

        			//show lightbox window - you could use .show('fast') for a transition
        			$('#lightbox').show();
        		}
                else { //#lightbox does not exist - create and insert (runs 1st time only)

                			//create HTML markup for lightbox window
                			var lightbox =
                			'<div id="lightbox">' +
                				'<p>Click to close</p>' +
                				'<div id="content">' + //insert clicked link's href into img src
                					'<iframe src="' + image_href +'" ></iframe>' +
                				'</div>' +
                			'</div>';

                			//insert lightbox HTML into page
                			$('body').append(lightbox);
                		}
	});

	//Click anywhere on the page to get rid of lightbox window
$(document).on('click', '#lightbox', function() {
		$("#lightbox").hide();
	});
});
