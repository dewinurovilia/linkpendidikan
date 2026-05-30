/* =========================
JAM & TANGGAL REALTIME
========================= */

function updateJam() {

const sekarang = new Date();

const opsiTanggal = {
weekday: 'long',
year: 'numeric',
month: 'long',
day: 'numeric'
};

const tanggal =
sekarang.toLocaleDateString(
'id-ID',
opsiTanggal
);

const jam =
sekarang.toLocaleTimeString(
'id-ID'
);

const elTanggal =
document.getElementById("tanggal");

const elJam =
document.getElementById("jam");

if(elTanggal){
elTanggal.innerHTML = tanggal;
}

if(elJam){
elJam.innerHTML = jam;
}

}

setInterval(updateJam,1000);
updateJam();


/* =========================
TOTAL APLIKASI
========================= */

function hitungAplikasi(){

const total =
document.querySelectorAll(
'.menu-card'
).length;

const el =
document.getElementById(
'totalAplikasi'
);

if(el){
el.innerHTML = total;
}

}

hitungAplikasi();


/* =========================
PENCARIAN APLIKASI
========================= */

const cari =
document.getElementById(
'cariAplikasi'
);

if(cari){

cari.addEventListener(
'keyup',
function(){

const keyword =
this.value.toLowerCase();

const cards =
document.querySelectorAll(
'.menu-card'
);

cards.forEach(card=>{

const text =
card.innerText.toLowerCase();

if(
text.includes(keyword)
){

card.style.display =
'flex';

}else{

card.style.display =
'none';

}

});

});

}


/* =========================
NOTIFIKASI
========================= */

window.addEventListener(
'load',
()=>{

const notif =
document.getElementById(
'notif'
);

if(notif){

notif.innerHTML =
'Selamat Datang di Portal Operator SD';

notif.style.display =
'block';

setTimeout(()=>{

notif.style.display =
'none';

},4000);

}

});


/* =========================
SCROLL TO TOP
========================= */

const btnTop =
document.getElementById(
'btnTop'
);

if(btnTop){

window.addEventListener(
'scroll',
()=>{

if(
window.scrollY > 300
){

btnTop.style.display =
'block';

}else{

btnTop.style.display =
'none';

}

});

btnTop.addEventListener(
'click',
()=>{

window.scrollTo({

top:0,
behavior:'smooth'

});

});

}


/* =========================
FAVORIT
Klik kanan menu
========================= */

document
.querySelectorAll(
'.menu-card'
)
.forEach(card=>{

card.addEventListener(
'contextmenu',
function(e){

e.preventDefault();

const nama =
this.innerText.trim();

let favorit =
JSON.parse(
localStorage.getItem(
'favorit'
)
) || [];

if(
!favorit.includes(nama)
){

favorit.push(nama);

localStorage.setItem(
'favorit',
JSON.stringify(
favorit
)
);

tampilkanFavorit();

alert(
nama +
' ditambahkan ke favorit'
);

}

});

});


function tampilkanFavorit(){

const box =
document.getElementById(
'favoritContainer'
);

if(!box) return;

const favorit =
JSON.parse(
localStorage.getItem(
'favorit'
)
) || [];

if(
favorit.length === 0
){

box.innerHTML =
'Belum ada favorit';

return;

}

box.innerHTML = '';

favorit.forEach(item=>{

box.innerHTML += `
<div style="
padding:10px;
margin:5px 0;
background:#f4f7fb;
border-radius:10px;
">
⭐ ${item}
</div>
`;

});

}

tampilkanFavorit();


/* =========================
ANIMASI CARD
========================= */

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(
entry.isIntersecting
){

entry.target.style.opacity =
'1';

entry.target.style.transform =
'translateY(0)';

}

});

});

document
.querySelectorAll(
'.menu-card'
)
.forEach(card=>{

card.style.opacity =
'0';

card.style.transform =
'translateY(20px)';

card.style.transition =
'.5s';

observer.observe(card);

});


/* =========================
DARK MODE
========================= */

const darkBtn =
document.getElementById(
'toggleDark'
);

if(darkBtn){

darkBtn.addEventListener(
'click',
()=>{

document.body.classList.toggle(
'dark-mode'
);

localStorage.setItem(
'darkMode',
document.body.classList.contains(
'dark-mode'
)
);

});

}

if(
localStorage.getItem(
'darkMode'
) === 'true'
){

document.body.classList.add(
'dark-mode'
);

}


/* =========================
SIDEBAR ACTIVE
========================= */

const menuSidebar =
document.querySelectorAll(
'.sidebar nav a'
);

menuSidebar.forEach(item=>{

item.addEventListener(
'click',
()=>{

menuSidebar.forEach(i=>{

i.classList.remove(
'active'
);

});

item.classList.add(
'active'
);

});

});

