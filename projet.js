const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
  ]
  // 
  //
const prompt = require("prompt-sync")()


let tickets = []
let ticketId = 1
let choix



do {
 
  console.log("           Bienvenue aux voyageurs dans la liste de sélection .");
  console.log("pour votre commodité , veuillez choisir un nuléro pour votre service de commonde .");
  console.log("  ")
  console.log("         RAILWAY MANAGER         ");
  console.log("  ")
  console.log("1. Afficher les trajets ");
  console.log("2. Acheter un ticket ");
  console.log("3. Afficher les tickets ");
  console.log("4. Annuler un ticket ");
  console.log("5. Rechercher un ticket ");
  console.log("6. Filtrer les trajets ");
  console.log("7. Trier les trajets ");
  console.log("0. Quitter ");
  console.log("  ");
    choix = Number(prompt("Enter Votre Choix : "))

    switch (choix) {
        case 1: {
            console.log("    TRAJETS DISPONIBLES    ");
            afficherTrajets()
            break;
        }
        case 2: {
            console.log("    L'utilisateur saisit :    ");
            console.log("   ");
            
            acheterTikicket ()
            break;
        }
        case 3: {
            console.log("    TICKETS    ");
            afficherTickets()
            break;
        }
         case 4: {
             annuler ()
            break;
        }
        case 5: {
            rechercherTicket ()
            break;
        }
        case 6: {
            filtrerTrajets()
            break;
        }
            case 7: {
            fin()
            break;
        }
        case 0: {
            console.log("Quitter");
            break;
        }
        default: {
            console.log("ce numbre n'exicet pas ");
            break;
        }
    }

} while (choix !== 0);


//cet fonction pour afficher les trajets disponibles avec for of
function afficherTrajets(){

    for(let i of trips){
        console.log("#"+ i.id+ i.departure + "→" + i.destination );
     console.log("Départ : " + i.departureTime );
     console.log("Arrivée : " + i.arrivalTime);
     console.log("Prix : " + i.price);
     console.log("Places disoniples : " + i.availableSeats);
    }
}
//cet fonction pour acheter les Tikicket
function acheterTikicket (){
    let name = prompt( "Nom du passagerr : ");
    let id = Number(prompt("Identifiant du trajet : "));
    // rechercher le trajet correspondant avec for of 
    let trip = null ;
    for(let element of trips ){
        if(element.id === id){
            trip = element ;
            break;
        }
    }
    // vérifier que le trajet existe
if(!trip){
    console.log("Trajet introuvable");
    return;
}
// vérifier qu'il reste au moins une place disponible
if( trip === 0){
    console.log("Trajet introuvable");
    return;
}
//attribuer automatiquement un numéro de place
let seatNumber = calculerSeatNumber(id);

// créer un ticket
let ticket = {
    id : ticketId ,
    name : name ,
    tripId : id ,
    seatNumber : seatNumber ,
    price : trip.price , 
}
// ajouter le tikcket 
tickets.push(ticket) ; 
// augmenter l'id du ticket 
ticketId++
// adinuer les places disponibles 
trip.saets--
console.log((`\nTicket acheté avec succés`));
console.log(`Ticket #${ticket.id}`);
console.log(`Passger : ${ticket.name}`);
console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
console.log(`Place : ${ticket.seatNumber}`);
console.log(`Prix : ${ticket.price} DH`);
}
// calculer le numero de place 
function calculerSeatNumber(tripId){
    for(let seat = 1 ; seat <=50 ; saet++){
        let occupied = false ;
        // on regarde tous les tickets
        for (let ticket of tickets ){
            if(ticket.tripId === tripId && ticket.seatNumber === seat ){
                occupied = true ;
                break;
            }
        }
        if ( !occupied ){
            return seat
        }
    }
}
function afficherTickets(){
    if(tickets.length === 0 ){
        console.log("Accun ticket ");
        return;
    }
    for(let ticket of tickets){
        let trip = null ;
        // chercher le trajet du ticket 
        for (let element of trips){
            if (element.id === ticket.tripId){
                trip=element;
                break;
            }
        }

            console.log((`\nTicket acheté avec succés`));
            console.log(`Ticket #${ticket.id}`);
            console.log(`Passger : ${ticket.name}`);
            console.log(`Trajet : ${trip.departure} → ${trip.destination}`);
            console.log(`Place : ${ticket.seatNumber}`);
            console.log(`Prix : ${ticket.price} DH`);

    }
}


function annuler (){
    let id = Number(prompt("Identifiant du ticket : "));
    let ticket = null ;
    // rechercher le ticket
    for (let element of tickets){
        if (element.id === id ){
            ticket = element;
            break;
        }
    }
    if (!ticket){
        console.log("Si le ticket n'existe pas ");
        return;
    }
    // retrouver le trajet associé
    for (let trip of trips ){
        if (!ticket){
        console.log("Ticket introuvable")
            if (trip.id === ticket.tripId){
                trip.saet++ ;
                break;
            }
        }
    } 
     //  supprimer le ticket 
    for ( let i = 0 ; i<tickets.length ; i++ ){
        if (tickets[i].id === id){
            tickets.splice(i,1);
            break;
        }
    }
    console.log("Ticket annulé avec succès.")
    }
    

 

function rechercherTicket (){
    let name = prompt ("Nom du passager : ");
    let found = false ;
    for (let ticket of tickets ){
        if ( ticket.name === name ){
            console.log(`Ticket #${ticket.id}`);
            console.log(`Passger : ${ticket.name}`);
            console.log(`Prix : ${ticket.price} DH`);
            found= true
        }
    }
   
}  


function filtrerTrajets(){
    let city = prompt("Ville de départ : ");
    for (let trip of trips ){
        if (trip.departure === city ){
            console.log(`${trip.departure} → ${trip.destination} : ${trip.price} DH`);
        }
    }

}


function  fin(){
    const temp=[...trips]
    for (let i = 0 ; i<temp.length-1 ; i++){
        for (j=0 ; j <temp.length-1 ; j++ ){
            if(temp[j].price > temp[j+1].price ){
                let swap = 0
                swap = temp[j+1] ;
                temp[j+1] = temp[j] ;
                temp[j] = swap ;
            }
        }
    }
    for (let i=0;i< temp.length;i++ ){
        console.log(`${temp[i].departure} → ${temp[i].destination} :  ` + `${temp[i].price} DH`)
    }
}
