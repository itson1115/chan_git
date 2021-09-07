const MAX_PLASTIC_SIZE = 200;

    function generatePlasticInRandomPosition() {
      const plastic_colors = ["red", "blue", "yellow", "cyan", "green", "pink", "orange", "purple"];
      const plastic = document.querySelector("section .plastic");    
      
      const x = Math.random()*100-1;
      const y = Math.random()*65-10;
      const color = plastic_colors[Math.floor((Math.random()*plastic_colors.length))];
      const z_index = Math.floor(Math.random()*6)+995;
      const ani_duration = (Math.random()*3+2);
      const opacity = Math.random()*0.6+0.3;
      
      let plasticClone = plastic.cloneNode(true);
      plasticClone.style.backgroundColor = color;
      plasticClone.style.left = x+"vw";
      plasticClone.style.bottom = y+"px";
      plasticClone.style.zIndex = z_index;
      plasticClone.style.animation = "whale "+ani_duration+"s linear infinite";
      plasticClone.style.opacity = opacity;
      
      document.querySelector("section").appendChild(plasticClone);
    } 
    
    document.addEventListener("DOMContentLoaded", function(){
      Array(MAX_PLASTIC_SIZE).fill(0).map( () => {
        const delay = Math.random()*1232;
        window.setTimeout(generatePlasticInRandomPosition, delay); 
      });
    });