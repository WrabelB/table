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


/**
 * 
 * @param {*} tag 
 * @param {number} id
 * @param {HTMLElement} parent
 */
function createHTMLElement(tag, id, parent)
{
    const tag_HTML = document.createElement(tag);
    tag_HTML.id = id;
    parent.appendChild(tag_HTML)
}

function createHTMLElementWithParentID(tag, id, parentid)
{
    const parent = document.getElementById(parentid);
    if(parent != undefined)
       createHTMLElement(tag, id, parent);
}

function renderTableHeader()
{
    const render = document.getElementById('persontr');
    CreateTableCell('th', 'Vezetéknév', render);
    const keresztnev = CreateTableCell('th', 'Keresztnév', render);
    keresztnev.colSpan;
    CreateTableCell('th', 'Házasság', render);
    CreateTableCell('th', 'Állat', render);
}

function RendelTéböl(personArray)
{
    const tbody = document.getElementById('persontbody')
    for (person of personArray) 
        {
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
            let x = tbody.querySelector('.selected');
            console.log("clicked:" + lastname);
            
            if(x)
                x.classList.remove('selected');
    
            e.currentTarget.classList.add('selected');
            
        });
    
    };

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



// Hazi: Functions.js osszes parameteret a csillagos cuccba 