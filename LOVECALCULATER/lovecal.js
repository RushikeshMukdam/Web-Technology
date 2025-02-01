function calculatelove() {
    const name1=document.getElementById("name1").value.trim();
    const name2=document.getElementById("name2").value.trim();
    
    if(name1 === "" || name2 === ""){
        alert("Please Enter both name !!!")
    }
    else{
        const lovepercentage = Math.floor(Math.random()*101);
        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2} 's love Percentage :${lovepercentage}`;

        if(lovepercentage < 30){
            
            result.innerHTML += `Not Great match keep Looking`;
            
        }
        else if(lovepercentage >=30 && lovepercentage <=70){
                result.innerHTML +=  ` There is potential give it and try`;
        }
        else{
            result.innerHTML +=  ` Great Match! <br> Love is in the Air!!`
        }
    }
    
}
