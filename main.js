
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

createHTMLElement('table', 'persontable', document.body);
createHTMLElementWithParentID('thead', 'personthead', 'persontable');
createHTMLElementWithParentID('tr', 'persontr', 'personthead');
createHTMLElementWithParentID('tbody', 'persontbody', 'persontable');
renderTableHeader();


const form = document.getElementById('form');
form.addEventListener('submit', function(e)
{
    const tbody = document.getElementById('persontbody')
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
    RendelTéböl(array);

    form.reset();

});

RendelTéböl(array);
