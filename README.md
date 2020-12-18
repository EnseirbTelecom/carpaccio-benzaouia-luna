# carpaccio-benzaouia-luna

## Team member : Doha Benzaouia & Joanie Luna

## Description : 
API de calcul de prix

Rend l'id sur la page /id 

Calcul le prix en fonction des paramètres donné par l'utilisateur, prix, quantité, tva, promotion et devise, la promotion et la devise sont des paramètres facultatif. Avec la requete /bill

## Installation de l'app :

- *npm install* au niveau ./carpaccio-benzaouia-luna

## Lancer l'app : 

- *npm start* pour lancer le serveur à la racine du répertoire, ./carpaccio-benzaouia-luna
- locahost:8080/Nom_de_la_route pour faire une requete : 
     localhost:8080/bill et passer en body de la requete les paramètres obligatoire : prices, quantities, tva et les paramètre facultatif : discount et currency. 
- *npm test* pour lancer les tests

**prices** : un tableau de valeur contenant les prix des articles

**quantities** : un tableau de valeur contentant le nombre de chaque article

**tva** : le code du pays dans lequel on calcul la note, ex "FR" si on se trouve en France

**discount** : le code de la promotion à appliquer : "PROGRESSIVE_DISCOUNT" pour un % de réduction en fonction du montant total, "FLAT_DISCOUNT" pour un pourcentage de réduction peu importe le montant total, "FIXED_DISCOUNT" pour un montant de réduction en fonction du prix total

**currency** : pour donner la devise dans laquelle on souhaite payer. La valeur par defaut est l'euro, "EUR", ex : si l'on veut payer en couronne islandaise : "ISK".

