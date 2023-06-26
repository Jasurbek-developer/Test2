var netStatus=document.querySelector("#checker")
        var checkBtn=document.querySelector("button")
        var konta=document.querySelector(".matn")

        document.addEventListener("DOMContentLoaded",()=>{
            netScan()

        })

        checkBtn.addEventListener("click",()=>{
            netScan();
         
        })
        function netScan(){
            var net=navigator.onLine
            netStatus.innerText=(net)?"Online":"Offline";
            konta.style.borderColor=(net)? "rgb(7, 220, 7)":"red";
            // if (net) {
            //     netStatus.innerText="Online"
        
            //         konta.style.borderColor=" rgb(7, 220, 7)"
                
            // }
            // else{
            //     netStatus.innerText="Offline"
            //     konta.style.borderColor="red"
        }
        // }