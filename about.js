console.log('about.js imported');

/*For whatever reason whenever I tried to use the fetch API with the actual about.json file it would have a seizure
Thus I have chosen to minify about.json and throw it into the javascript lol
I hate JavaScript*/

//update July 28 2023: So when using mode: no-cors with the fetch, it may return nothing at all. that's what i believe happens
//im just gonna stick to minifying.


/*var aboutjson;

fetch('about.json')
.then(res=>res.json())
.then(data=>);

console.log(aboutjson);
*/

const raw = '[{"name":"Sean Carawan","role":"Founder & President","desc":"Sean is a rising junior at Dulles. As the club founder and president, Sean is the reason why this club exists, and is excited to share his passion for neuroscience.","mail":false,"linkedin":"https://www.linkedin.com/in/sean-carawan-1ab28a284","pic":"seanC.jpg"},{"name":"Musir Merani","role":"Vice President - Education","desc":"Musir is a rising junior at Dulles. As the Vice President of Education, he works with Sean to create an efficient curriculum designed to teach students about neuroscience.","mail":false,"linkedin":false,"pic":"musirM.jpg"},{"name":"Ritvik Mangire","role":"Vice President - Operations","desc":"Ritvik is a rising Junior at Dulles. Ritvik works a vital part of this club as he foresees all club operations & finances.","mail":"ritvikmangire@hotmail.com","linkedin":"https://www.linkedin.com/in/ritvik-mangire-00b93526b","pic":"ritvikM.jpg"},{"name":"Nidhi Vankadaru","role":"Secretary","desc":"Nidhi is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"nidhiV.jpg"},{"name":"Allen Jacob","role":"Secretary","desc":"Allen is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"allenJ.jpg"},{"name":"Miraj Parikh","role":"Marketing Director & Web Developer","desc":"Miraj is a rising Sophomore at Dulles.","mail":false,"linkedin":false,"pic":false},{"name":"Natalie Lam","role":"Event Coordinator","desc":"Natalie is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"natalieL.jpg"},{"name":"Sammith Krishna","role":"Communications Officer","desc":"Sammith is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"sammithK.jpg"},{"name":"Nakshatra (Nikki) Kothapalli","role":"Student Life Lead","desc":"Nikki is a rising Sophomore at Dulles.","mail":false,"linkedin":false,"pic":"nikkiK.jpg"}]'
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
        <p class="gridtext-desc">${member.desc}</p>
    `;
    
    if (member.pic) out += `<img class="gridtext-img" src="media/officers/${member.pic}" alt="A photo of ${member.name}">`;
    
    out += `
    </div>`;
}
console.log('out constructed');

placeholder.innerHTML = out;

console.log('completed');