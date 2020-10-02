import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	m_tableauRelationnel = [
		["Dominant·e","Soumis·e",1],
		["Soumis·e","Dominant·e",0],
		["Esclave","Maître·sse",22],
		["Switch","Switch",3],
		["Sadique","Masochiste",5],
		["Masochiste","Sadique",4],
		["Fetichiste","Fetichiste",6],
		["Humilié·e","Humiliation",21],
		["Attacheur","Attaché·e",9],
		["Attaché·e","Attacheur",8],
		["Daddy/Mommy","Boy/Girl",11],
		["Boy/Girl","Daddy/Mommy",10],
		["Brat (sale gosse)","Brat Tamer",19],
		["Propriétaire de Petgirl/Petboy","Pet (animal de compagnie)",14],
		["Pet (animal de compagnie)","Propriétaire de Petgirl/Petboy",13],
		["Primal Prey","Primal Predator",18],
		["Fréquence","Fréquence",16],
		["Poly","Poly",17],
		["Primal Predator","Primal Prey",15],
		["Brat Tamer","Brat (sale gosse)",12],
		["Expérimentaliste","Expérimentaliste",20],
		["Humiliation","Humilié·e",7],
		["Maître·sse","Esclave",2]
	];
	
	m_profilA = [
		{
		  "average" : 22,
		  "role" : "Dominant·e"
		}, {
		  "average" : 68,
		  "role" : "Soumis·e"
		}, {
		  "average" : 59,
		  "role" : "Esclave"
		}, {
		  "average" : 34,
		  "role" : "Switch"
		}, {
		  "average" : 28,
		  "role" : "Sadique"
		}, {
		  "average" : 51,
		  "role" : "Masochiste"
		}, {
		  "average" : 47,
		  "role" : "Fetichiste"
		}, {
		  "average" : 41,
		  "role" : "Humilié·e"
		}, {
		  "average" : 25,
		  "role" : "Attacheur"
		}, {
		  "average" : 22,
		  "role" : "Attaché·e"
		}, {
		  "average" : 0,
		  "role" : "Daddy/Mommy"
		}, {
		  "average" : 46,
		  "role" : "Boy/Girl"
		}, {
		  "average" : 71,
		  "role" : "Brat (sale gosse)"
		}, {
		  "average" : 22,
		  "role" : "Propriétaire de Petgirl/Petboy"
		}, {
		  "average" : 23,
		  "role" : "Pet (animal de compagnie)"
		}, {
		  "average" : 93,
		  "role" : "Primal Prey"
		}, {
		  "average" : 39,
		  "role" : "Fréquence"
		}, {
		  "average" : 0,
		  "role" : "Poly"
		}, {
		  "average" : 15,
		  "role" : "Primal Predator"
		}, {
		  "average" : 40,
		  "role" : "Brat Tamer"
		}, {
		  "average" : 96,
		  "role" : "Expérimentaliste"
		}, {
		  "average" : 31,
		  "role" : "Humiliant·e"
		}, {
		  "average" : 75,
		  "role" : "Maître·sse"
		}
	]

	m_profilB =[
		{
		  "average" : 75,
		  "role" : "Dominant·e"
		}, {
		  "average" : 20,
		  "role" : "Soumis·e"
		}, {
		  "average" : 10,
		  "role" : "Esclave"
		}, {
		  "average" : 72,
		  "role" : "Switch"
		}, {
		  "average" : 67,
		  "role" : "Sadique"
		}, {
		  "average" : 18,
		  "role" : "Masochiste"
		}, {
		  "average" : 0,
		  "role" : "Fetichiste"
		}, {
		  "average" : 1,
		  "role" : "Humilié·e"
		}, {
		  "average" : 74,
		  "role" : "Attacheur"
		}, {
		  "average" : 62,
		  "role" : "Attaché·e"
		}, {
		  "average" : 0,
		  "role" : "Daddy/Mommy"
		}, {
		  "average" : 0,
		  "role" : "Boy/Girl"
		}, {
		  "average" : 32,
		  "role" : "Brat (sale gosse)"
		}, {
		  "average" : 58,
		  "role" : "Propriétaire de Petgirl/Petboy"
		}, {
		  "average" : 0,
		  "role" : "Pet (animal de compagnie)"
		}, {
		  "average" : 61,
		  "role" : "Primal Prey"
		}, {
		  "average" : 23,
		  "role" : "Fréquence"
		}, {
		  "average" : 0,
		  "role" : "Poly"
		}, {
		  "average" : 60,
		  "role" : "Primal Predator"
		}, {
		  "average" : 60,
		  "role" : "Brat Tamer"
		}, {
		  "average" : 56,
		  "role" : "Expérimentaliste"
		}, {
		  "average" : 0,
		  "role" : "Humiliant·e"
		}, {
		  "average" : 25,
		  "role" : "Maître·sse"
		}
	]
	
	m_pourcentageMatching = 0;
	
	public comparePourcent(pourc1, pourc2)
	{
		pourc1 = ((pourc1 === 0) ? 0.1 : pourc1);
		pourc2 = ((pourc2 === 0) ? 0.1 : pourc2);
		
		var resultat = pourc1/pourc2;
		
		if(resultat > 1)
			resultat = Math.pow(resultat, -1);
		
		resultat = Math.round((resultat * 100));
		
		return resultat;
	}
	
	public matching(profilA, profilB)
	{
		var valeurPourcentageFinale = 0;
		var valeurPourcentage = 0;
		
		for(var i=0;i<profilA.length;++i)
		{
			var a = profilA[i].average;
			var b = profilB[this.m_tableauRelationnel[i][2]].average;
			
			valeurPourcentage = this.comparePourcent(a, b);
			valeurPourcentageFinale += valeurPourcentage;
		}
		
		return valeurPourcentageFinale;
	}
	
	public exec()
	{
		this.m_pourcentageMatching = this.matching(this.m_profilA, this.m_profilB);
	}
}
