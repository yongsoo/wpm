var randParagraph = function() {
	var paragraphs = ["I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation. Five score years ago, a great American, in whose symbolic shadow we stand today, signed the Emancipation Proclamation. This momentous decree came as a great beacon light of hope to millions of Negro slaves who had been seared in the flames of withering injustice. It came as a joyous daybreak to end the long night of their captivity. But one hundred years later, the Negro still is not free. One hundred years later, the life of the Negro is still sadly crippled by the manacles of segregation and the chains of discrimination. One hundred years later, the Negro lives on a lonely island of poverty in the midst of a vast ocean of material prosperity. One hundred years later, the Negro is still languished in the corners of American society and finds himself an exile in his own land. And so we've come here today to dramatize a shameful condition.",
					  				"This is a day of national consecration. And I am certain that on this day my fellow Americans expect that on my induction into the Presidency, I will address them with a candor and a decision which the present situation of our people impels. This is preeminently the time to speak the truth, the whole truth, frankly and boldly. Nor need we shrink from honestly facing conditions in our country today. This great Nation will endure, as it has endured, will revive and will prosper. So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself -- nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance. In every dark hour of our national life, a leadership of frankness and of vigor has met with that understanding and support of the people themselves which is essential to victory. And I am convinced that you will again give that support to leadership in these critical days.",
					  				"Of course, in one sense, the first essential for a man’s being a good citizen is his possession of the home virtues of which we think when we call a man by the emphatic adjective of manly. No man can be a good citizen who is not a good husband and a good father, who is not honest in his dealings with other men and women, faithful to his friends and fearless in the presence of his foes, who has not got a sound heart, a sound mind, and a sound body; exactly as no amount of attention to civil duties will save a nation if the domestic life is undermined, or there is lack of the rude military virtues which alone can assure a country’s position in the world. In a free republic the ideal citizen must be one willing and able to take arms for the defense of the flag, exactly as the ideal citizen must be the father of many healthy children.",
					  				"I have, myself, full confidence that if all do their duty, if nothing is neglected, and if the best arrangements are made, as they are being made, we shall prove ourselves once again able to defend our Island home, to ride out the storm of war, and to outlive the menace of tyranny, if necessary for years, if necessary alone. At any rate, that is what we are going to try to do. That is the resolve of His Majesty’s Government-every man of them. That is the will of Parliament and the nation. The British Empire and the French Republic, linked together in their cause and in their need, will defend to the death their native soil, aiding each other like good comrades to the utmost of their strength. Even though large tracts of Europe and many old and famous States have fallen or may fall into the grip of the Gestapo and all the odious apparatus of Nazi rule, we shall not flag or fail.",
					  				"I decline to accept the end of man. It is easy enough to say that man is immortal because he will endure: that when the last ding-dong of doom has clanged and faded from the last worthless rock hanging tideless in the last red and dying evening, that even then there will still be one more sound: that of his puny inexhaustible voice, still talking. I refuse to accept this. I believe that man will not merely endure: he will prevail. He is immortal, not because he alone among creatures has an inexhaustible voice, but because he has a soul, a spirit capable of compassion and sacrifice and endurance. The poet’s, the writer’s, duty is to write about these things. It is his privilege to help man endure by lifting his heart, by reminding him of the courage and honor and hope and pride and compassion and pity and sacrifice which have been the glory of his past. The poet’s voice need not merely be the record of man, it can be one of the props, the pillars to help him endure and prevail.",
					  				"To assail the great and admitted evils of our political and industrial life with such crude and sweeping generalizations as to include decent men in the general condemnation means the searing of the public conscience. There results a general attitude either of cynical belief in and indifference to public corruption or else of a distrustful inability to discriminate between the good and the bad. Either attitude is fraught with untold damage to the country as a whole. The fool who has not sense to discriminate between what is good and what is bad is well-nigh as dangerous as the man who does discriminate and yet chooses the bad. There is nothing more distressing to every good patriot, to every good American, than the hard, scoffing spirit which treats the allegation of dishonesty in a public man as a cause for laughter. Such laughter is worse than the crackling of thorns under a pot, for it denotes not merely the vacant mind, but the heart in which high emotions have been choked before they could grow to fruition."];

	return paragraphs[Math.floor(Math.random() * paragraphs.length)];
}

var startTimer = function(counter) {
	var hasStarted = false;

	if (!hasStarted) {
		setInterval(function() {
			if ($('#typefield').val() !== '' && !hasStarted) {
				hasStarted = true;
        counter.start();
			}
		}, 100);
	}
}

var wordsToObj = function(array) {
  var resultObj = {};

  for (var i = 0; i < array.length; i++) {
    if (resultObj[array[i]]) {
      resultObj[array[i]] += 1;
    } else {
      resultObj[array[i]] = 1;
    }
  }

  return resultObj;
}

var computeMistypedWords = function(userInputObj, actParaObj) {
	var mistypedWords = [];

  for (var key in userInputObj) {
  	if (actParaObj[key] === undefined && key !== "") {
  		mistypedWords.push(key);
  	}
  }

  return mistypedWords;
}