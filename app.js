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



function Answers(){

        var Q1= document.getElementById("Q1");
        var Q2 = document.getElementById("Q2");
        var Q3 = document.getElementById("Q3");
        var Q4 = document.getElementById("Q4");
        var count =0;
        
        
        for(var i=0;i<Q1.childNodes.length;i++){
            if( Q1.childNodes[i].nodeType == 1){
                //Question 1 answer
                if (Q1.childNodes[i].checked == true){
                    if(Q1.childNodes[i].value == "Quadi-e-Azam"){
                        count++
                    }
                }

                //Question 2 answer
                if (Q2.childNodes[i].checked == true){
                    if(Q2.childNodes[i].value == "Charles Babage"){
                        count++
                    }
                }

                //Question 3 answer
                if (Q3.childNodes[i].checked == true){
                    if(Q3.childNodes[i].value == "63"){
                        count++
                    }
                }
                
                //Question 4 answer
                if (Q4.childNodes[i].checked == true){
                    if(Q4.childNodes[i].value == "Arouse Great curiosity in someone"){
                        count++
                    }
                }
                    console.log(count)       
            }
        }
}