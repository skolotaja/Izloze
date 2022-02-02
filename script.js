const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Dace Priede', 'Atis Roze', 'Oto Egle'];
const balvas = ['Dators', 'Leduskapis', 'Tālrunis', 'Auto', 'Fotoaparāts'];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;
//let balvuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
//rindas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuSkaits;i++) {
    let rand = Math.random() * vardi.length;
    let rand1 = Math.random()*balvas.length;
    rand = Math.floor(rand);//noapaļo uz leju

    let uzvaretajs = vardi[rand];//izvada konsolē
    let balvas= balvas[rand1]:
    
        rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretajs}</td>
<td>${balvas}</td>
</tr>`
    }
