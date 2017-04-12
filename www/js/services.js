angular.module('starter.services', [])

	.factory('News', function() {
		var news = [{
			id: 0,
			title: "Notícia 01",
			text: "Facebook Porcaria ponto ORG",
			img: "http://blogosfera-panrotas.s3.amazonaws.com/traveltech/wp-content/uploads/2016/10/de47dfaf373635406d20781c4ebc7d9d.png",
			textFull: "Uma ideia roubada, aliena e une um conjunto de babacas (brinks)"
		}, {
			id: 1,
			title: "Notícia 02",
			text: "Volta Orkut Feminista",
			img: "https://imgnzn-a.akamaized.net/2016/02/24/24134356542699.jpg",
			textFull: "Saudades"

		}, {
			id: 2,
			title: "Notícia 03",
			text: "Outra Porcaria 2.0 ponto ORG",
			img: "https://lh3.googleusercontent.com/aYbdIM1abwyVSUZLDKoE0CDZGRhlkpsaPOg9tNnBktUQYsXflwknnOn2Ge1Yr7rImGk=w300",
			textFull: "kkkkkkkkkk"
		}, {
			id: 3,
			title: "Notícia 04",
			text: "Em terra de WhatsApp, santinha vira safadinha",
			img: "http://blog.jovempan.uol.com.br/radioatividade/wp-content/uploads/2015/06/whatsapp.png",
			textFull: "Manda"
		}];
	return {
		all: function() {
			return news;
		},

		get: function(noticiaId) {
			for (var i =0; i < news.length; i++) {
				if (news[i].id === parseInt(noticiaId)) {
					return news[i];
				}
			}
			return null;
		}
	}

	});












