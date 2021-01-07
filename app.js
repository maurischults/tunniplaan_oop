// tunniplaani objekt
const tunniplaan = new Tunniplaan(346, "2019-04-01");

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
