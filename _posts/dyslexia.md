---
layout: post
category: Programming
tags: [dyslexia, typoglycemia, Javascript]
title: Dsxyliea
---

#### Poniższa strona jest polskim tłumaczeniem posta ze strony [https://geon.github.io](https://geon.github.io/programming/2016/03/03/dsxyliea).

Koleżanka, która ma dysleksję opisała mi swoje doświadczenia z czytania. _Potrafi_ czytać, ale wymaga to od niej dużo koncentracji, a litery zdają się "zamieniać miejscami".

Pamiętam, że czytałem o [typoglokemi](https://en.wikipedia.org/wiki/Typoglycemia). Czy nie dałoby się zrobić tego interaktywnie na stronie internetowej przy pomocy Javascript? Oczywiście, że by sie dało.

Chcersz zrobić zakłakę tej storny czy coś w tym stylu? Zapraszam do [forkowania](https://github.com/geon/geon.github.com/blob/master/_posts/2016-03-03-dsxyliea.md) na github.

> Dysleksja charakteryzuje się trudnością w nauce płynnego czytania i rozumienia czytanego tekstu przy przeciętnym poziomie inteligencji. Do owych trudności zaliczamy problemy ze świadomością fonologiczną, dekodowaniem fonologicznym, prędkością przetwarzania, kodowaniem ortograficznym, słuchową pamięciom krutkotrwałą, umiejętnościami językowymi/rozumieniem werbalnym, oraz/lub szybkim nazywaniem.

> Specyficzne zaburzenia czytania są najczęstszym objawem dysleksji. Chociaż dysleksję rozpoznaje się najczęściej przez problemy w czytaniu, nie wyszystkie z nich są oznaką dysleksji.

> Niektórzy postrzegają dysleksję jako odrębną od trudności w czytaniu wynikających z innych przyczyn takich jak nieneurologiczne zaburzenie wzroku lub słuchu, albo słabe lub niewystarczające nauczenie czytania. Proponowane są trzy podtypy dysleksji poznawczej (słuchowa, wzrokowa oraz integracyjna), jednakże poszczególne przypadki łatwiej opisać poprzez podanie konkretnych podstawowych neuropsychologicznych deficytów i współwystępujących trudności w uczeniu się (np. deficyt uwagi/nadruchliwość, trudności z matematyką itp.). Naukowcy z MIT odkryli, że dyslektycy wykazują trudności w rozpoznawaniu głosu.

_Źródło: [Wikipedia](http://en.wikipedia.org/wiki/Dyslexia)_

<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script type="text/javascript">

"use strict";

$(function(){

	var getTextNodesIn = function(el) {
	    return $(el).find(":not(iframe,script)").addBack().contents().filter(function() {
	        return this.nodeType == 3;
	    });
	};

	// var textNodes = getTextNodesIn($("p, h1, h2, h3"));
	var textNodes = getTextNodesIn($("*"));



	function isLetter(char) {
		return /^[\d]$/.test(char);
	}


	var wordsInTextNodes = [];
	for (var i = 0; i < textNodes.length; i++) {
		var node = textNodes[i];

		var words = []

		var re = /\w+/g;
		var match;
		while ((match = re.exec(node.nodeValue)) != null) {

			var word = match[0];
			var position = match.index;

			words.push({
				length: word.length,
				position: position
			});
		}

		wordsInTextNodes[i] = words;
	};


	function messUpWords () {

		for (var i = 0; i < textNodes.length; i++) {

			var node = textNodes[i];

			for (var j = 0; j < wordsInTextNodes[i].length; j++) {

				// Only change a tenth of the words each round.
				if (Math.random() > 1/10) {

					continue;
				}

				var wordMeta = wordsInTextNodes[i][j];

				var word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
				var before = node.nodeValue.slice(0, wordMeta.position);
				var after  = node.nodeValue.slice(wordMeta.position + wordMeta.length);

				node.nodeValue = before + messUpWord(word) + after;
			};
		};
	}

	function messUpWord (word) {

		if (word.length < 3) {

			return word;
		}

		return word[0] + messUpMessyPart(word.slice(1, -1)) + word[word.length - 1];
	}

	function messUpMessyPart (messyPart) {

		if (messyPart.length < 2) {

			return messyPart;
		}

		var a, b;
		while (!(a < b)) {

			a = getRandomInt(0, messyPart.length - 1);
			b = getRandomInt(0, messyPart.length - 1);
		}

		return messyPart.slice(0, a) + messyPart[b] + messyPart.slice(a+1, b) + messyPart[a] + messyPart.slice(b+1);
	}

	// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	function getRandomInt(min, max) {
		
		return Math.floor(Math.random() * (max - min + 1) + min);
	}


	setInterval(messUpWords, 50);
});


</script>
