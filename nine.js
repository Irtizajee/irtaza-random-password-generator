//++++++++++++++++++++++ THIS IS RANDOM PASSWROD GENERATOR ++++++++++++++++++++++
//++++++++++++++++++++++ THIS IS RANDOM PASSWROD GENERATOR ++++++++++++++++++++++
let plus_length = document.getElementById("plus_length");
let minus_length = document.getElementById("minus_length");

minus_length.addEventListener("click" , ()=>{
    let range_len = document.getElementById("range")
    range_len.value--
    document.getElementById("range_viewer").innerHTML = range_len.value +  "&nbsp;length"
})
plus_length.addEventListener("click" , ()=>{
    let range_len = document.getElementById("range")
    range_len.value++
    document.getElementById("range_viewer").innerHTML = range_len.value + "&nbsp;length"
})
function range_up(){
    let range_len = document.getElementById("range")
    document.getElementById("range_viewer").innerHTML = range_len.value + "&nbsp;length"
}

function label_lower(){
    let lower = document.getElementById("lower");
    let check_ball_lower = document.getElementById("check_ball_lower");
    lower.checked == true ? check_ball_lower.style.transform = "translateX(20px)" : check_ball_lower.style.transform = "translateX(0px)";
    let check_ball_track = document.querySelector(".check_ball_track");
    
        !lower.checked  ? check_ball_track.style.backgroundColor = "grey" : check_ball_track.style.backgroundColor = "#6a75bb" 
   
    
}
function label_upper(){
    let upper = document.getElementById("upper");
    let check_ball_upper = document.getElementById("check_ball_upper");
    upper.checked == true ? check_ball_upper.style.transform = "translateX(20px)" : check_ball_upper.style.transform = "translateX(0px)";
    let check_ball_track_upper = document.querySelector("#check_ball_track_upper");
    
    !upper.checked  ? check_ball_track_upper.style.backgroundColor = "grey" : check_ball_track_upper.style.backgroundColor = "#6a75bb" 
}
function label_symbol(){
    let symbol = document.getElementById("symbol");
    let check_ball_symbol = document.getElementById("check_ball_symbol");
    symbol.checked == true ? check_ball_symbol.style.transform = "translateX(20px)" : check_ball_symbol.style.transform = "translateX(0px)";
    let check_ball_track_symbol = document.querySelector("#check_ball_track_symbol");
    
    !symbol.checked  ? check_ball_track_symbol.style.backgroundColor = "grey" : check_ball_track_symbol.style.backgroundColor = "#6a75bb" 
}
function label_number(){
    let number = document.getElementById("number");
    let check_ball_number = document.getElementById("check_ball_number");
    number.checked == true ? check_ball_number.style.transform = "translateX(20px)" : check_ball_number.style.transform = "translateX(0px)";
    let check_ball_track_number = document.querySelector("#check_ball_track_number");
    
    !number.checked  ? check_ball_track_number.style.backgroundColor = "grey" : check_ball_track_number.style.backgroundColor = "#6a75bb" 
}




function generate() {
    let val = ""
    // let lower = document.getElementById("lower").checked;
// let upper = document.getElementById("lower").checked;
// let number = document.getElementById("lower").checked;
// let symbol = document.getElementById("lower").checked;
    let lower = document.getElementById("lower").checked;
    let upper = document.getElementById("upper").checked;
    let number = document.getElementById("number").checked;
    let symbol = document.getElementById("symbol").checked;
    if (lower && upper && number && symbol) {
        val = "abcdrfghijklmnopqrstuvxsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=?/"
    }
    else if (lower && upper && number) {
        val = "abcdrfghijklmnopqrstuvxsyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    }
    else if (lower && upper && symbol) {
        val = "abcdrfghijklmnopqrstuvxsyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=?/"
    }
    else if (lower && number && symbol) {
        val = "abcdrfghijklmnopqrstuvxsyz1234567890!@#$%^&*()_+-=?/"
    }
    else if (upper && number && symbol) {
        val = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=?/"
    }
    else if (lower && upper) {
        val = "abcdrfghijklmnopqrstuvxsyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else if (lower && number) {
        val = "abcdrfghijklmnopqrstuvxsyz1234567890"
    }
    else if (upper && number) {
        val = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    }
    else if (symbol && number) {
        val = "!@#$%^&*()_+-=?/1234567890"
    }
    else if (symbol && upper) {
        val = "!@#$%^&*()_+-=?/ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else if (symbol && lower) {
        val = "!@#$%^&*()_+-=?/abcdrfghijklmnopqrstuvxsyz"
    }
    else if (upper) {
        val = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    else if (number) {
        val = "1234567890"
    }
    else if (lower) {
        val = "abcdrfghijklmnopqrstuvxsyz"
    }
    else if (symbol) {
        val = "!@#$%^&*()_+-=?/"
    }
   
    else if(!(lower && upper && number && symbol) )
    {
        document.getElementById("output").value = "please check atleast one"
        
        return
    }
    // else {
    //     // console.log("please check atleast one")
    //     document.getElementById("output").value = "please check atleast one"
    //     // random_val = "please check atleast one"
    //     return
    // }

    let random_val = ""
    let range_len = document.getElementById("range")
    let len = range_len.value

    // if(range_len.value == 0)
    // {
    //     document.getElementById("length_zero").innerHTML = "please increase length"
    //     return
    // }

  

     for (let i = 1; i <= len; i++) { 
        random_val += val[Math.floor(Math.random() * val.length)]
    }
    const val_string = random_val
    // console.log(val_string)
    document.getElementById("output").value =  val_string;


    return random_val
}
// generate()
 let btn_random = document.getElementById("random");
 btn_random.addEventListener("click" ,generate )


// let range_len = document.getElementById("range")
// let output = document.getElementById("output");
// let btn_random = document.getElementById("random");
// let lower = document.getElementById("lower").checked;
// let upper = document.getElementById("lower").checked;
// let number = document.getElementById("lower").checked;
// let symbol = document.getElementById("lower").checked;
