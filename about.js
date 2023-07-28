console.log('about.js imported');

//For whatever reason whenever I tried to use the fetch API with about.json it would have a seizure and say some dumb BS
//Thus I have chosen to minify about.json
//I hate JavaScript

const raw = '[{"id":1,"name":"Sean Carawan","role":"Founder & President","desc":"Sean is a rising junior at Dulles. As the club founder and president, Sean is the reason why this club exists, and is excited to share his passion for neuroscience.","mail":"None","linkedin":"https://www.linkedin.com/in/sean-carawan-1ab28a284"},{"id":2,"name":"Musir Merani","role":"Vice President - Education","desc":"Musir is a rising junior at Dulles. As the Vice President of Education, he works with Sean to create an efficient curriculum designed to teach students about neuroscience.","mail":"None","linkedin":"None"},{"id":3,"name":"Ritvik Mangire","role":"Vice President - Operations","desc":"Ritvik is a rising Junior at Dulles. Ritvik works a vital part of this club as he foresees all club operations & finances.","mail":"ritvikmangire@hotmail.com","linkedin":"https://www.linkedin.com/in/ritvik-mangire-00b93526b"},{"id":4,"name":"Nidhi Vankadaru","role":"Secretary","desc":"Nidhi is a rising Junior at Dulles.","mail":"None","linkedin":"None"},{"id":5,"name":"Allen Jacob","role":"Secretary","desc":"Allen is a rising Junior at Dulles.","mail":"None","linkedin":"None"},{"id":6,"name":"Miraj Parikh","role":"Marketing Director & Web Developer","desc":"Miraj is a rising Sophomore at Dulles.","mail":"None","linkedin":"None"},{"id":7,"name":"Natalie Lam","role":"Event Coordinator","desc":"Natalie is a rising Junior at Dulles.","mail":"None","linkedin":"None"},{"id":8,"name":"Sammith Krishna","role":"Communications Officer","desc":"Sammith is a rising Junior at Dulles.","mail":"None","linkedin":"None"},{"id":4,"name":"Nakshatra (Nikki) Kothapalli","role":"Student Life Lead","desc":"Nidhi is a rising Sophomore at Dulles.","mail":"None","linkedin":"None"}]'
const members = JSON.parse(raw);

console.log('const raw parsed into const members');

let placeholder = document.querySelector('#members');
let out = "";

console.log('placeholder constructed');

for(let member of members){
    out += `
    <div class="gridtext-div">
        <h3 class="gridtext-role">${member.role}</h3>
        <h2 class="gridtext-name">${member.name}</h2>
    </div>
    `;
}
console.log('out constructed');

placeholder.innerHTML = out;

console.log('completed');