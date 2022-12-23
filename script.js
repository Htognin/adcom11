// cek apakah sudah terkoneksi
// alert("oke berhasil terhubung")

// ambil elemen
const getUsername = document.querySelector("#username");
const getPassword = document.querySelector("#password");
const getForm = document.querySelector("form");

// buat user dan password
const USERS = [
 {
    name: "burungterbang",
    password: "garpusomay",
 },
]



// testing console.log('user')
console.log(USERS);

//lakukan perulangan dari data base
USERS.forEach( (user) => {
    console.log(user)
});

// tambahkan event ketika user klik login form
getForm.addEventListener("submit", (event)=>{
     // agar ketika user klik login tidak terload browsernya
   event.preventDefault();
   
   // ambil value dari input username
   // alert(getUsername.value)

   //lakukan percabangan dan perulangan 
   USERS.forEach((user) => {
    //precabangan
    if (getUseername.value == user.name && getPassword.value) {
        alert("oke berhasil");
    
    }else{
        alert("zong");
    }

   });
  

});
   
   

