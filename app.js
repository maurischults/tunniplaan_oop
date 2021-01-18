// tunniplaani objekt
let opetaja;
let kuupaev;

function Andmed() {
  tunniplaan.opetaja = document.getElementById("opetajaid").value;
  tunniplaan.kuupaev = document.getElementById("kuupaevid").value;
  valjastaTunniplaan();
}
// opetaja = 346;
// kuupaev = "2021-01-11";
const tunniplaan = new Tunniplaan(opetaja, kuupaev);

// kasutajaliidese objekt
const kl = new Kasutajaliides();

// tuinniplaani väljastamine
document.addEventListener("DOMContentLoaded", valjastaTunniplaan);
function valjastaTunniplaan() {
  tunniplaan
    .opetajaTunniplaaniAndmed()
    .then((tunnid) => {
      kl.printNadalaKuupaevad(kl.nadalaKuupaevad(tunnid));
      kl.print(tunnid);
    })
    .catch((viga) => console.log(viga));
}
