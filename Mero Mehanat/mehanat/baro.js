var tu=gsap.timeline();

function time(){
    let a=0;
    setInterval(() => {
      a=a+Math.floor(Math.random()*15)
      if(a<100){
        document.querySelector("#loader h1").innerHTML=a+"%"
      }
      else{
        a=100
        document.querySelector("#loader h1").innerHTML=a+"%"
      }
    }, 100);
    }
    
    tu.to("loader h1",{
        scale:1.5,
        onStart:time(),
    })

    
tu.to("#loader",{
    top:"-100%",
})

