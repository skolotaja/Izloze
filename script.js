const vardi = ['Jana Krūmiņa', 'Jānis Bērziņš', 'Dace Priede', 'Atis Roze', 'Oto Egle'];
const balvas = ['Dators', 'Leduskapis', 'Tālrunis', 'Auto', 'Fotoaparāts'];
const naudaKopa = 100000;//kopeja summa
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';
//rindas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuSkaits;i++) {
    let rand = Math.random() * vardi.length;
    rand = Math.floor(rand);//noapaļo uz leju


    let uzvaretajs = vardi[rand];//izvada konsolē
    let laimesti = balvas[rand];
    
    
        rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretajs}</td>
<td>${laimesti}</td>
</tr>`
    }
