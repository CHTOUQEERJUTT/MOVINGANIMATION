function mainfunction(){
    var rect = document.querySelector("#center");
function movinganimation(){
    window.addEventListener("mousemove",function(details){
       var xval =  gsap.utils.mapRange(0,window.innerWidth,
            100+ rect .getBoundingClientRect().width/2,
            window.innerWidth- (100+ rect.getBoundingClientRect().width/2),
            details.clientX);
            gsap.to(rect,{
                left:xval,
                ease:Power4,
                backgroundColor:"black",
                color:"white",
                fontSize:"30px",
                fontFamily:"ablglarmo" ,
                
    
            })
    
    
    })
}
function mouseleaveoptional(){
    window.addEventListener("mouseleave",function(){
        gsap.to(rect,{
            backgroundColor:"white",
            color:"black",
            fontFamily:"italic",
        })
    })
}
movinganimation();
}
mainfunction();