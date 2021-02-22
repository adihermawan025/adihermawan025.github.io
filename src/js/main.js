// buat sebuah method / function
const handleSubmit = (event)=>{
    // kita buat form static
    event.preventDefault()

    // tangkap nilai input dari user
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let address = document.getElementById("address").value
    let birthday = document.getElementById("birthday").value
    let age = 2021 - birthday.split("-")[0]


    //  mengecek apakah usia akan cukup

    if (age >= 20 && age <= 60){
        alert("terimakasih sudah mendaftar")
    }
    // else if (age > 60){
    //     alert ("usia anda tidak sesuai")
    
    
    else {
        alert("usia tidak sesuai dul")
    }
    
    console.log(
        `
        nama : ${username}
        email : ${email}
        phone : ${phone}
        address : ${address}
        birthday : ${birthday}

        
        age : ${2021 - birthday.split("-")[0]+" tahun"}

        `)
        // array [0] ke nol , karena 0, 1, 2

}

