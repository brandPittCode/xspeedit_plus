# xspeedit_plus

L'algorithme implémenté fait au début le tri de façon décroissante de la chaine des items en entre, ensuite il crée un carton pour le premier element puis il va parcourir la chaine et regarde si l'item peut être mis dans un carton déjà existant sinon il va créer un carton pour cet élément. Chaque carton doit contenir maximum 3 éléments avec une valeur de 10 en total comme somme.Enfin l'arrangement est affiché de façon que chaque carton est resprésenté par un "/".

Pour tester le script exécuter:

node xspeedit_plus.js "chaine_items"

Par exemple l'exécution de: 

node xspeedit_plus.js 163841689525773

Donne comme résultat:

Xspeedit-Plus

Articles:163841689525773

91/82/81/73/73/64/6/55 => 8 cartons utilisés
