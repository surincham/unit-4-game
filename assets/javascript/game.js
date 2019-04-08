$(document).ready(function() {


	var randomNum = Math.floor(Math.random() * 101) + 11; 
		console.log("randomNum: " + randomNum); 
		$(".randomNumber").text(randomNum); 

	var pikachuVal = Math.floor(Math.random() * 11) + 1; 
		console.log("pikachu: " + pikachuVal); 
		$("#pikachu").text(pikachuVal); 

	var charmanderVal = Math.floor(Math.random() * 11) + 1; 
		console.log("charmander: " + charmanderVal); 
		$("#charmander").text(charmanderVal); 

	var squirtleVal = Math.floor(Math.random() * 11) + 1; 
		console.log("squirtle: " + squirtleVal); 
		$("#squirtle").text(squirtleVal);
	
	var bulbasaurVal = Math.floor(Math.random() * 11) + 1; 
		console.log("bulbasaur: " + bulbasaurVal); 
		$("#bulbasaur").text(bulbasaurVal);
		
	var wins = 0; 
		console.log("wins: " + wins); 

	var losses = 0; 
		console.log("losses: " + losses); 

	var score = 0; 
		console.log("score: " + score); 



// When pokemon is clicked

		$("#pikachu").on("click", function () {
			score += pikachuVal;
			console.log(score);
			$('#scoreDisplay').text(score);
			checkScore();
		})
	
		$("#charmander").on("click", function () {
			score += charmanderVal;
			console.log(score);
			$('#scoreDisplay').text(score);
			checkScore();
		})
	
		$("#squirtle").on("click", function () {
			score += squirtleVal;
			console.log(score);
			$('#scoreDisplay').text(score);
			checkScore();
		})
	
		$("#bulbasaur").on("click", function () {
			score += bulbasaurVal;
			console.log(score);
			$('#scoreDisplay').text(score);
			checkScore();
		})
	
		function checkScore(){

			if(score === randomNum) { 
				alert('YOU WIN!')
				wins++ ; 
				$(".wins").text("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			} 
	
			else if(score > randomNum) {
				alert('YOU LOSE!')
				losses++ ; 
				$(".losses").text("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
			}
		}


	// Reset
	function reset () {
		randomNum = Math.floor(Math.random() * 101) + 11; 
		console.log("randomNum: " + randomNum); 
		$(".randomNumber").text(randomNum); 

		score = 0; 
		$(".scoreDisplay").text(score); 

		pikachuVal = Math.floor(Math.random() * 11) + 1; 
		console.log("pikachu: " + pikachuVal); 
		$("#pikachu").text(pikachu); 

		charmanderVal = Math.floor(Math.random() * 11) + 1; 
		console.log("charmander: " + charmanderVal); 
		$("#charmander").text(charmander); 

		squirtleVal = Math.floor(Math.random() * 11) + 1; 
		console.log("squirtle: " + squirtleVal); 
		$("#squirtle").text(squirtle);
	
		bulbasaurVal = Math.floor(Math.random() * 11) + 1; 
		console.log("bulbasaur: " + bulbasaurVal); 
		$("#bulbasaur").text(bulbasaur);
	

		$("img").on("click", function () {
				console.log("New Score: " + score); 
			$(".scoreDisplay").text(score); 

			if(score === randomNum) { 
				wins++ ; 
				$(".wins").text("Wins: " + wins); 
					console.log("Wins: " + wins); 
					reset(); 
			
			} 

			else if(score > randomNum) {
				losses++ ; 
				$(".losses").text("Losses: " + losses); 
					console.log("Losses: " + losses); 
					reset(); 
				
			}
		}); 
	};
})
		




