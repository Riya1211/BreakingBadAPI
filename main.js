const container = document.getElementById('charContainer');
const id = 116;

const fetchChars = async () => {
    for (let i = 1; i <= id; i++) {
        await getChars(i);
    }
}

const getChars = async (char_id) => {
    const url = `https://www.breakingbadapi.com/api/characters/${char_id}`;
    const res = await fetch(url);
    const data = await res.json();
    createCard(data);
}

const createCard = data =>{
    const el = document.createElement('div');
    el.classList.add('data');
    const { name, birthday, nickname, status, img } = data;
    const charInnerHTML = `
        <div class="img-container">
            <img src="${img}" alt="${name}" />
        </div>
        <div class="info">
            <h4 class="name">Name: ${name}</h4>
            <h4 class="name">Nickname: ${nickname}</h4>
            <h4 class="name">Birthday: ${birthday}</h4>
            <h4 class="name">Status: ${status}</h4>    
        </div>
    `
    // el.classList.add('cards');
    // const { name, birthday, nickname, status, img, portrayed } = data;
    // const charInnerHTML = `
    // <div class='card'>
    //     <div class='card-inner'>
    //         <div class='card-front'>
    //             <img src=${img} alt='' />
    //         </div>
    //     <div class='card-back'>
    //         <h1>${name}</h1>
    //         <ul>
    //             <li>
    //                 <strong>Actor Name:</strong> ${portrayed}
    //             </li>
    //             <li>
    //                 <strong>Nickname:</strong> ${nickname}
    //             </li>
    //             <li>
    //                 <strong>Birthday:</strong> ${birthday}
    //             </li>
    //             <li>
    //                 <strong>Status:</strong> ${status}
    //             </li>
    //         </ul>
    //     </div>
    // </div>
    // `
    el.innerHTML = charInnerHTML;
    container.appendChild(el);
}
fetchChars();