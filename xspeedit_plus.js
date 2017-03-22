
// L'algorithme implémenté fait au début le tri de façon décroissante de la chaine des items en entre, 
// ensuite il crée un carton pour le premier element
// puis il va parcourir la chaine et regarde si l'item peut être mis dans un carton déjà existant
// sinon il va créer un carton pour cet element
// Enfin l'arrangement est affiché dans le format demandé

const CAPACITE=10;
const TAILLE=3;

// Recuperer la chaine d'entréé depuis la console
var input_items_chaine = process.argv.slice(2)[0];

console.log('Xspeedit-Plus');

xspeedIt_plus(input_items_chaine, function (output_array){
	// Donner le format et afficher le résultat
	console.log(formatOutputChaine(output_array));
})

function xspeedIt_plus(input_chaine, callback){
   
    // Array pour stocker les cartons
    var stock_items_array=[];
    // Flag pour signaler si un item a pu être placé dans un carton
    var isItemPlaced=false;
    // Array pour représenter un carton 
    var currentCarton=[];
	// Variable pour représenter un item
	var currentItem;
	// Variable pour parcourir l'array des cartons
	var index_cartons=0;
    // Convertir la chain d'entrée en array et la trier de façon décroissante
    var input_items_array=input_items_chaine.split("").sort().reverse();

    console.log("Articles:" + input_items_chaine);

    // Créer un carton pour le premier item
    stock_items_array.push(new Array(input_items_array[0]));
    
    // Parcourir les éléments de la chaine en entrée
    for (i = 1; i < input_items_array.length; i++){
    
     	isItemPlaced=false
        index_cartons=0;
		
		// Parcourir l'array des cartons poue essayer de placer l'objet
		while (index_cartons < stock_items_array.length && isItemPlaced==false){
			
			// Carton current
			currentCarton=stock_items_array[index_cartons];
            // Item current
			currentItem=Number(input_items_array[i]);
            
			// Regarder si l'item peut être placé dans le carton current en évaluant les conditions données
			if ((getCartonWeight(currentCarton) + currentItem ) <= CAPACITE && (currentCarton.length <= TAILLE - 1)){
                // Si oui, arranger l'item dans le carton, changer le flag pour arrêter la recherche
				stock_items_array[index_cartons].push(currentItem);
                isItemPlaced=true;
            }
	
			index_cartons++;
		}
		        
		// Si l'item n'a pas pu être placé dans un carton on crée un pour lui
        if (isItemPlaced == false){
            stock_items_array.push(new Array(input_items_array[i]));
        }

     }
     
     // Retourner l'array contenant les cartons
	 callback(stock_items_array);
    
}

// Fonction pour faire l'addition des items dans un array
function getCartonWeight(carton) {
   var cartonWeight=0;
   for (l = 0; l < carton.length; l++)
       cartonWeight+=Number(carton[l]); 
   return cartonWeight;            
}

function formatOutputChaine(arrayOut) {
    return  arrayOut.join('/').replace(/,/g,'') + ' => ' + arrayOut.length + ' cartons utilisés';
}

