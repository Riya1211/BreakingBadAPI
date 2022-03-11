const card_container = document.getElementById('card-container');
const id = 57;

const getChars = async () => {
    const url = `https://www.breakingbadapi.com/api/characters`;
    const res = await fetch(url);
    const data = await res.json();
    for (let i = 0; i <= id; i++) {
        createCard(data[i]);
    }
    // createCard(data);
    // console.log(data);
}


const createCard = data =>{
    const el = document.createElement('div');
    el.classList.add('card');
    const charInnerHTML = `
        <div class='card-inner'> 
            <div class='card-front'>
                <img src=${data.img} alt='' />
            </div>
    
            <div class='card-back'>
                <h1 id='name'>${data.name}</h1>
                <ul>
                    <li>
                        <strong>Actor Name:</strong> ${data.portrayed}
                    </li>
                    <li>
                        <strong>Nickname:</strong> ${data.nickname}
                    </li>
                    <li>
                        <strong>Birthday:</strong> ${data.birthday}
                    </li>
                    <li>
                        <strong>Status:</strong> ${data.status}
                    </li>
                </ul>
            </div>
        </div>
    `
    el.innerHTML = charInnerHTML;
    card_container.appendChild(el);
}
getChars();

// Filter search

document.getElementById('filterInput').addEventListener('keyup',() => {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    let heading = document.getElementById('name');


    
    heading.forEach(item => {
        let a = item.getElementsByTagName('a')[0];
        item.style.display = a.innerHTML.toUpperCase().startsWith(filterValue) ? "block" : "none";
    })
    
})  