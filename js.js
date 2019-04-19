
    var i=0;
    var d=0;
    print
    function calis(){
        
        var r=["linear-gradient(to right, #dce35b, #45b649)","linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)","linear-gradient(to right, #ffd89b, #19547b)","linear-gradient(to right, #b92b27, #1565c0)","linear-gradient(to right, #f4791f, #659999)"];
        
    if(i<r.length)
    {
       
        document.getElementById("btn").style.background=r[i];
        document.body.style.background=r[i];
        
        i++;
    }
    else
    {
    i=0;
    calis();
    
    }

    }

//Evet kral burası denemeler topluluğu


  
