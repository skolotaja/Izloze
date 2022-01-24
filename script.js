const vardi=['Jana Krūmiņa','Jānis Bērziņš','Dace Priede','Atis Roze','Oto Egle'];
const balvas=['Dators','Leduskapis','Tālrunis','Auto','Fotoaparāts'];
const naudaKopa=100000;//kopeja summa
let uzvaretajuSkaits=5;
let rindas= document.querySelector('.rindas');
rindas.innerHTML=' ';
for(let i=0;i<uzvaretajuSkaits;i++){
let rand= Math.random()*vardi.length;
rand= Math.floor(rand);//noapaļo uz leju
console.log(vardi[rand]);//izvada konsolē
}
rindas.innerHTML=
<tr>
    <td>i</td>
    <td>uzvarētājs</td>
</tr>
