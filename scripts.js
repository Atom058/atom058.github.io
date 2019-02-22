$.when( $.ready ).then(function() {

	var qnum = -1;

	$("#alts").on("click", "button", function() {

		if (qnum == -1) {

			qnum += 1;

			$("h1").replaceWith("<h2 class='flexrow' id='question'></h2>");
			generateQuestion(qnum);

		} else {

			if($(this).attr("data") == "false"){

				$(this).addClass("wrong");
				$("#fact").append(data[qnum].fact);
				$("#alts").off("click");

			} else {

				if (qnum == data.length - 1) {
					$("#question").replaceWith("<h1>You MIGHT need a blockchain...</h1>");
					$("#alts").empty();
					$("#alts").off("click");
				} else {
					qnum += 1;
					generateQuestion(qnum);
				}	
			}

		}
		
	});

} );

function generateQuestion(id){

	$("#question").empty();
	$("#question").append(data[id].question);
	$("#alts").empty();

	for (let choice of data[id].choices){
		$("#alts").append('<button data="'+choice.answer+'">'+choice.item+'</button>');
	}

}