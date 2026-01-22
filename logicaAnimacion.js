gsap.registerPlugin(ScrollTrigger);
    
// ELEMENTOS 
    let korn = document.getElementById('Korn');
    let ready = document.getElementById('ready');
    let jhon = document.getElementById('jhon');
    let disp = document.getElementById('dispara');
        const barra = gsap.timeline({
    scrollTrigger: {
        scrub: 1,
        markers: true
    },
})

/*  ANIMACIÓN 1  */

        barra.to(korn, {
             scale: 50,
             x: 300,
             duration: 3000,
             start: "top 800px",
             ease: "power4.inOut",
             opacity: 0,
        });  
        
        barra.to(ready, {
             opacity: 1,
             duration: 3000,
             trigger: korn,
        });
        
        barra.to(jhon, {
            opacity: 1,
            duration: 3000,
        });
        
        barra.to(korn, {
            opacity: 1,
            scale: 1, 
            x: 0,
            duration: 3000,
            trigger: jhon, 
        });
        
        barra.to(ready, {
            opacity: 0,
            duration: 3000,
            trigger: disp,
        });
  
/*  ANIMACIÓN 2  */     
     
         barra.to(korn, {
             scale: 50,
             x: 300,
             duration: 3000,
             start: "top 800px",
             ease: "power4.inOut",
             opacity: 0,
        });  
        
        barra.to(ready, {
             opacity: 1,
             duration: 3000,
             trigger: korn,
        });
        
        barra.to(jhon, {
            opacity: 1,
            duration: 3000,
        });
        
        barra.to(korn, {
            opacity: 1,
            scale: 1, 
            x: 0,
            duration: 3000,
            trigger: jhon, 
        });
        
        barra.to(ready, {
            opacity: 0,
            duration: 3000,
            trigger: disp,
        });
       
/*  ANIMACIÓN 3  */        
        
         barra.to(korn, {
             scale: 50,
             x: 300,
             duration: 3000,
             start: "top 800px",
             ease: "power4.inOut",
             opacity: 0,
        });  
        
        barra.to(ready, {
             opacity: 1,
             duration: 3000,
             trigger: korn,
        });
        
        barra.to(jhon, {
            opacity: 1,
            duration: 3000,
        });
        
        barra.to(korn, {
            opacity: 1,
            scale: 1, 
            x: 0,
            duration: 3000,
            trigger: jhon, 
        });
        
        barra.to(ready, {
            opacity: 0,
            duration: 3000,
            trigger: disp,
        });
        