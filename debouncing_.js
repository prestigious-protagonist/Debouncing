
let timeout;
        function debounce(){
            clearTimeout(timeout)
            timeout = setTimeout(()=>{
                calc()
            },300)
        }
        async function calc(){
            let p=document.getElementById("p").value;
            let r=document.getElementById("r").value;
            let t=document.getElementById("t").value;
            
            let x=await fetch("https://sum-server.100xdevs.com/interest?principal=" + p+"&rate="+r+"&time="+t)

            let y=await x.json()
            document.querySelector(".output1").innerHTML=y.total
            document.querySelector(".output2").innerHTML=y.interest
            
        }