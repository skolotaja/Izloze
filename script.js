const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Dace Priede', 'Atis Roze', 'Oto Egle'];
const balvas = ['Dators', 'Leduskapis', 'Tālrunis', 'Auto', 'Fotoaparāts'];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
//rindas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju

    let uzvaretajs = vardi[rand];//izvada konsolē
<<<<<<< HEAD
    let balvas = balvas[rand];

rindas.innerHTML += `
=======
    rindas.innerHTML += `
>>>>>>> 03965ffe922d39ba4b160b6ee16953f3b4809110
<tr>
<td>${i+1}</td>
<td>${uzvaretajs}</td>
<td>${balvas}</td>
</tr>`
}
