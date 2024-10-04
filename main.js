
let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]
const table = document.createElement('table');
const tableheader = document.createElement('thead');
table.appendChild(tableheader);
const tableheaderRow = document.createElement('tr');
tableheader.appendChild(tableheaderRow);

const lastname = document.createElement('th');
lastname.innerHTML = "Vezetéknév";
const firstname = document.createElement('th');
firstname.innerHTML = "Keresztnév";
const married = document.createElement('th');
married.innerHTML = "Házasság";
const pet = document.createElement('th');
pet.innerHTML = "Állat";

document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);

tableheaderRow.appendChild(firstname);
tableheaderRow.appendChild(lastname);
tableheaderRow.appendChild(married);
tableheaderRow.appendChild(pet);


for (person of array) {
    const row = document.createElement('tr');
    const fn = document.createElement('td');
    const marriedTableBodyRow = document.createElement('td');
    const petTableBodyRow = document.createElement('td');

    fn.innerHTML = person.firstname1
    if (person.firstname2){
        fn.innerHTML += " " + person.firstname2;
    }
    const ln = document.createElement('td');
    ln.innerHTML = person.lastname;

    marriedTableBodyRow.innerHTML = person.married? 'Igen':'Nem';
    petTableBodyRow.innerHTML = person.pet;


    row.appendChild(ln);
    row.appendChild(fn);
    tbody.appendChild(row);
    row.appendChild(marriedTableBodyRow);
    row.appendChild(petTableBodyRow);
    

    
    row.addEventListener('click', function(e)
    {
        let professzionalisValtozoAmitHasznalokUgyseTalalodKiMireHasznalomHahaha = tbody.querySelector('.selected');
        console.log("clicked:" + lastname);
        
        if(professzionalisValtozoAmitHasznalokUgyseTalalodKiMireHasznalomHahaha)
            professzionalisValtozoAmitHasznalokUgyseTalalodKiMireHasznalomHahaha.classList.remove('selected');

        e.currentTarget.classList.add('selected');
        
    });

};

const form = document.getElementById('form');
form.addEventListener('submit', function(e)
{
    e.preventDefault();
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');
    
    const LastnameVale = lastname.value;
    const FirstnameValue1 = firstname1.value;
    const FirstnameValue2 = firstname2.value;
    const MarriedValue = married.value;
    const PetValue = pet.value;

    array.push(
        {
            lastname: LastnameVale, firstname1: FirstnameValue1, 
            firstname2: FirstnameValue2, married: MarriedValue,
            pet: PetValue
        });
    console.log('array');
});


