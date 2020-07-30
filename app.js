function submit(){
    var name  = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var CNIC  = document.getElementById("CNIC").value;
    var quiz = document.getElementsByTagName("div");
    quiz[0].style.visibility = "hidden";
    var Questions = document.getElementById("Questions")
    Questions.className += " aa"
    






//    var A1 = document.getElementsByName("A1").length
//    for( var i =0;i<<A1.length;i++){
//        if(A1[i].checked) 
//                document.getElementById("result").innerHTML
//                        = "Gender: "+A[i].value;
//    }







    //console.log(quiz[0].getAttribute("class"))
}