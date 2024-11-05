/** 
 * Creates a table cell with specified tag name, innerHTML content, and appends it to a parent row.
 * 
 * @param {'td'| 'th'} tagName | Specifies if the cell is a 'td' or 'th' element.
 * @param {string} innerHTML | The content to display inside the cell.
 * @param {HTMLTableRowElement} parent | The parent row to which the cell will be appended.
 */
function CreateTableCell(tagName, innerHTML, parent)
{
    const cella = document.createElement(tagName);
    cella.innerHTML = innerHTML;
    parent.appendChild(cella);
    return cella;
}


/**
 * Creates an HTML element with a specific tag, assigns it an ID, and appends it to a parent element.
 * 
 * @param {*} tag | The HTML tag name for the element (e.g., 'div', 'span').
 * @param {number} id | The ID to assign to the created element.
 * @param {HTMLElement} parent | The parent element to which the new element will be appended.
 */
function createHTMLElement(tag, id, parent)
{
    const tag_HTML = document.createElement(tag);
    tag_HTML.id = id;
    parent.appendChild(tag_HTML)
}

/**
 * Creates an HTML element with a specified tag and ID, then appends it to a parent element identified by its ID.
 * 
 * @param {string} tag | The HTML tag name for the element.
 * @param {number} id | The ID to assign to the created element.
 * @param {string} parentid | The ID of the parent element to append the new element to.
 */
function createHTMLElementWithParentID(tag, id, parentid)
{
    const parent = document.getElementById(parentid);
    if(parent != undefined)
       createHTMLElement(tag, id, parent);
}

// Renders a table header with specified column names in a row with the ID 'persontr'.
function renderTableHeader()
{
    const render = document.getElementById('persontr');
    CreateTableCell('th', 'Vezetéknév', render);
    const keresztnev = CreateTableCell('th', 'Keresztnév', render);
    keresztnev.colSpan;
    CreateTableCell('th', 'Házasság', render);
    CreateTableCell('th', 'Állat', render);
}

/**
 * Renders a table body with information from an array of person objects.
 * 
 * @param {Array<Object>} personArray | Array of objects, each representing a person's details.
 */
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
            const x = tbody.querySelector('.selected');
            console.log("clicked:" + lastname);
            
            if(x)
                x.classList.remove('selected');
    
            e.currentTarget.classList.add('selected');
            
        });
    
    };

}

/**
 * Validates that specified form fields are not empty and displays error messages if necessary.
 * 
 * @param {HTMLInputElement} lastname | The input field for the last name.
 * @param {HTMLInputElement} firstname1 | The input field for the first name.
 * @param {HTMLInputElement} pet | The input field for the pet.
 */
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
