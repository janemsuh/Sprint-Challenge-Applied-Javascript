// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = 'SMARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98';

    temp.appendChild(document.createTextNode('\u00B0'));
    headerDiv.appendChild(date);
    headerDiv.appendChild(h1);
    headerDiv.appendChild(temp);

    return headerDiv;
};

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
