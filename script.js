let lastImage = document.getElementsByClassName('matahari')[0];
let awans = document.getElementsByClassName('awan')[0];
let button = document.querySelector(".btn");
let warna = document.querySelector('.nav');

window.addEventListener('scroll',function(){

    let value = window.scrollY;

    awans.style.left = value * 0.9 + 'px';
    lastImage.style.top = value * 0.9 + 'px';
    button.style.marginTop = value * 0.2 + 'px';
   
    
})


function cetak(){
    let frm = window.document.getElementById("formulir");
    let namaDepan = frm.nama.value;
    let namaBelakang = frm.jumlah.value;
    let masukan = frm.textArea.value;

    


    alert("nama : " + namaDepan + '' + namaBelakang +
    "\nMasukan : " + masukan +
    "\n" +
    "\n" +
    "\n Terimakasih telah memberi masukan"
     
   );
   document.location.href='index.html';


   
}







   
