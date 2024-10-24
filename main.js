
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


CreateTableCell('th', 'Vezetéknév', tableheaderRow);
CreateTableCell('th', 'Keresztnév', tableheaderRow);
CreateTableCell('th', 'Házasság', tableheaderRow);
CreateTableCell('th', 'Állat', tableheaderRow);

document.body.appendChild(table);
const tbody = document.createElement('tbody');
table.appendChild(tbody);




const form = document.getElementById('form');
form.addEventListener('submit', function(e)
{

    tbody.innerHTML = ''
    e.preventDefault();
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');
    
    const LastnameVale = lastname.value;
    const FirstnameValue1 = firstname1.value;
    const FirstnameValue2 = firstname2.value;
    const MarriedValue = married.checked;
    const PetValue = pet.value;

    

    if(ValidétFíldsz(lastname, firstname1, pet))
    {
        array.push( {lastname: LastnameVale, firstname1: FirstnameValue1, 
            firstname2: FirstnameValue2, married: MarriedValue,
            pet: PetValue});
    }

    console.log(array);
    RendelTéböl();

});

RendelTéböl();

function RendelTéböl()
{
    for (person of array) {
        const row = document.createElement('tr');
        tbody.appendChild(row);
        const fn = document.createElement('td');
        const fn1 = document.createElement('td');
        const marriedTableBodyRow = document.createElement('td');
        const petTableBodyRow = document.createElement('td');
    
        fn.innerHTML = person.firstname1
        fn1.innerHTML = person.firstname2
        if (person.firstname2){
            fn.innerHTML += " " + person.firstname2;
        }
        const ln = document.createElement('td');
        ln.innerHTML = person.lastname;
    
        marriedTableBodyRow.innerHTML = person.married? 'Igen':'Nem';
        petTableBodyRow.innerHTML = person.pet;
    
    
        row.appendChild(ln);
        row.appendChild(fn);
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

}
/**
 * 
 * @param {'td'| 'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parent 
 */
function CreateTableCell(tagName, innerHTML, parent)
{
    const cella = document.createElement(tagName);
    cella.innerHTML = innerHTML;
    parent.appendChild(cella);
    return cella;
}



function ValidétFíldsz(lastname, firstname1, pet)
{
    const errorMessages = form.querySelectorAll('.error');
    for(const error of errorMessages)
    {
        error.innerHTML = '';
    }
    let result = true;
    if(lastname.value === '')
    {
        let error = lastname.parentElement.querySelector('.error');
        error.innerHTML = "A vezeteknev kotelezo :D"
        result = false;
    }
    if(firstname1.value === '')
    {
        let error = firstname1.parentElement.querySelector('.error');
        error.innerHTML = "A firstname kotelezo, IRD MAR ODA EMBER!!!."
        result = false;
    }
    if(pet.value === '')
    {
        let error = pet.parentElement.querySelector('.error');
        error.innerHTML = "A pet kotelezo, tudom hogy van allatod, latlak."
        result = false;
    }    
    return result;

}
