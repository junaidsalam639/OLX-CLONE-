function product(){
     window.location.href = "sell.html"
}
function product1(){
     window.location.href = "product.html"
}
function product2(){
    window.location.href = "t-shirt.html"
}

// model
let model = document.getElementById("model");
console.log(model);
function email() {
    model.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
        <!-- <h2 class="modal-title text-center fw-bold text-capitalize" id="staticBackdropLabel">login page</h2> -->
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container text-center">
            <div class="row model">
                <img src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" alt="" width="150px" height="70px">
                <h5 class="mt-4 mb-4">Enter your login</h5>
                <div class="input-group flex-nowrap">
                <input type="text" class="form-control" id="email" placeholder="Enter your email"
                    aria-label="Username" aria-describedby="addon-wrapping" required>
            </div>
            <div class="input-group flex-nowrap">
                <input type="password" class="form-control" id="password" placeholder="Enter your password"
                    aria-label="UserEmail" name="email"  aria-describedby="addon-wrapping" required>
            </div>
            <div class="input-group flex-nowrap">
            <button class="form-control" placeholder="login" aria-label="UserSumit" aria-describedby="addon-wrapping" id="subMore" onclick="check()">log in</button>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
`
}

var getItem1 = localStorage.getItem("UserData"); 
console.log(getItem1);
var mT;
if (getItem1) {
  mT = JSON.parse(getItem1);
} else {
  mT = [];
}
function check() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
     console.log(email.value , password.value);

     let obj = {
          email : email.value,
          password : password.value,
     }
     mT.push(obj);
     console.log(mT);
    var stringify = JSON.stringify(mT);  // convert array ko string me
    localStorage.setItem("UserData", stringify);

    if (password.value != "" && email.value != "") {
        model.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <!-- <h2 class="modal-title text-center fw-bold text-capitalize" id="staticBackdropLabel">login page</h2> -->
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container text-center">
                <div class="row model">
                    <img src="https://www.olx.com.pk/assets/brandIconLogin_noinline.93e8a1a9cf50902ba5250814f57810ff.svg" alt="" width="150px" height="70px">
                    <h5 class="mt-4 mb-4">Enter your Sing In</h5>
                    <div class="input-group flex-nowrap">
                    <input type="text" class="form-control" id="name" placeholder="Username"
                        aria-label="Username" aria-describedby="addon-wrapping" required>
                        </div>
                <div class="input-group flex-nowrap">
                    <input type="email" class="form-control" id="email1" placeholder="UserEmail"
                    aria-label="UserEmail" name="email"  aria-describedby="addon-wrapping" required>
                    </div>
                    <div class="input-group flex-nowrap">
                    <input type="password" class="form-control" id="password1" placeholder="UserPassword"
                        aria-label="UserPassword" aria-describedby="addon-wrapping" required>
                </div>
                <div class="input-group flex-nowrap">
                <button style class="form-control" placeholder="login" aria-label="UserSumit" aria-describedby="addon-wrapping" id="subMore" onclick="sing()">sing in</button>
                </div>
                </div>
            </div>
            </div>
    </div>
    </div>
    </div>
    `
    }
    else {
        alert("Please fill the Input");
    }

}


var getItem = localStorage.getItem("UserData1"); 
console.log(getItem);
var mT;
if (getItem) {
  mT = JSON.parse(getItem);
} else {
  mT = [];
}


function sing() {
    let email1 = document.getElementById("email1");
    let password1 = document.getElementById("password1");
    let name = document.getElementById("name");
    console.log(email1.value, password1.value);

    let obj1 = {
     email : email1.value,
     password : password1.value,
     name : name.value,
}
mT.push(obj1);
console.log(mT);
var stringify = JSON.stringify(mT);  // convert array ko string me
localStorage.setItem("UserData1", stringify);


    if(email1.value != "" && password1.value != "" && name.value != ""){
        alert("Welcome To OLX website \n Login Sucssecfully");
        email1.value = ""
        password1.value = ""
        name.value = ""
        let picture = document.getElementById("picture");
    
        picture.innerHTML = `<img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" onclick="pic()" style="border-radius: 50%; cursor: pointer;" width="70px" data-bs-toggle="modal" data-bs-target="#staticBackdrop">`
    }else{
        alert("Please Fill the Input")
    }
}

function pic(){
    alert("Ap login Hoo Bhai!")
}














































// let textarea = document.getElementById("textarea");
// console.log(textarea);
// let text = document.getElementById("text");
// function result(){
//     if(textarea.value.length <= 50){
//        text.innerHTML = textarea.value;
//     }else{
//         text.innerHTML = textarea.value.slice(0,50) +
//         `<button onclick="more()">ShowMore</button>`
//     }
// } 

// function more(){
//     text.innerHTML = textarea.value +
//     `<button onclick="less()">ShowLess</button>`
// }

// function less(){
//     text.innerHTML = textarea.value.slice(0,50) +
//     `<button onclick="more()">ShowMore</button>`
// }

// calculator
// let text1 = document.getElementById("text");
// function a(e){
//    text1.value += e; 
// }


// function eva(){
//    text1.value = eval(text1.value);
// }

// function cle(){
//     text1.value = "";
// }


// function cut(){
//     text1.value = text1.value.slice(0,-1);
// }

// ``

