console.log('about.js imported');

/*For whatever reason whenever I tried to use the fetch API with the actual about.json file it would have a seizure
Thus I have chosen to minify about.json and throw it into the javascript lol
I hate JavaScript*/

//update July 28 2023: So when using mode: no-cors with the fetch, it may return nothing at all. that's what i believe happens
//im just gonna stick to minifying.


var aboutjson;

fetch('about.json')
.then(res=>res.json());

console.log(aboutjson);


const raw = '[{"name":"Sean Carawan","role":"Founder & President","desc":"Sean is a rising junior at Dulles. As the club founder and president, Sean is the reason why this club exists, and is excited to share his passion for neuroscience.","mail":false,"linkedin":"https://www.linkedin.com/in/sean-carawan-1ab28a284","pic":"seanC.jpg"},{"name":"Musir Merani","role":"Vice President - Education","desc":"Musir is a rising junior at Dulles. As the Vice President of Education, he works with Sean to create an efficient curriculum designed to teach students about neuroscience.","mail":false,"linkedin":false,"pic":"musirM.jpg"},{"name":"Ritvik Mangire","role":"Vice President - Operations","desc":"Ritvik is a rising Junior at Dulles. Ritvik works a vital part of this club as he foresees all club operations & finances.","mail":"ritvikmangire@hotmail.com","linkedin":"https://www.linkedin.com/in/ritvik-mangire-00b93526b","pic":"ritvikM.jpg"},{"name":"Nidhi Vankadaru","role":"Secretary","desc":"Nidhi is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"nidhiV.jpg"},{"name":"Allen Jacob","role":"Secretary","desc":"Allen is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"allenJ.jpg"},{"name":"Miraj Parikh","role":"Marketing Director & Web Developer","desc":"Miraj is a rising Sophomore at Dulles. As the Web Developer, he works on this very website that you\'re looking at. He works on marketing elements and develops the campaign of the club.","mail":false,"linkedin":false,"pic":false},{"name":"Natalie Lam","role":"Event Coordinator","desc":"Natalie is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"natalieL.jpg"},{"name":"Sammith Krishna","role":"Communications Officer","desc":"Sammith is a rising Junior at Dulles.","mail":false,"linkedin":false,"pic":"sammithK.jpg"},{"name":"Nakshatra (Nikki) Kothapalli","role":"Student Life Lead","desc":"Nikki is a rising sophomore at Dulles. As the Student Life Lead, she oversees the recruitment process and the publicizing of collaborations. She is a catalyst of communication, working with members in voicing their feedback to further improve the curriculum with the rest of the team.","mail":false,"linkedin":false,"pic":"nikkiK.jpg"}]';
const members = JSON.parse(raw);

console.log('const raw parsed into const members');

let placeholder = document.querySelector('#members');
let out = "";

for(let member of members){
    
    out += `
    <div class="gridtext-div">
        <h3 class="gridtext-role">${member.role}</h3>
        <h2 class="gridtext-name">${member.name}</h2>
        <p class="gridtext-desc">${member.desc}</p>
    `;
    if (member.mail) out += `<a href = "${member.mail}" class="gridtext-link" target="_blank"><p class="gridtext-contact">E-Mail: ${member.mail}</p></a>`;
    if (member.linkedin) out += `<a href = "${member.linkedin}" class="gridtext-link" target="_blank"><p class="gridtext-contact">LinkedIn: ${member.linkedin}</p></a>`
    if (member.pic) out += `<img class="gridtext-img" src="media/officers/${member.pic}" alt="A photo of ${member.name}">`;
    
    out += `
    </div>`;
}

placeholder.innerHTML = out;

console.log('out constructed');

const about = document.getElementById("about");

about.addEventListener("mouseleave", async () => {
    for (let i = 10; i > 0; i--) {
        about.style.textShadow = "#fff 0 0 "+String(i)+"px";
        await new Promise(r => setTimeout(r, 15));
    }
}, false);
about.addEventListener("mouseenter", async () => {
    for (let i = 0; i < 10; i++) {
        about.style.textShadow = "#fff 0 0 "+String(i)+"px";
        await new Promise(r => setTimeout(r, 15));
    }
}, false);