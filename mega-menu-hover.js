    function jackMousein(x){
        let nodd = x.parentElement;
        nodd.setAttribute('megaopen', true)
    }
    function jackMouseout(x){
        let  nodd = x.parentElement;
        nodd.removeAttribute('megaopen')
    }
    let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
    items.forEach(item => {
        
        item.addEventListener("mouseover", () => {
            item.setAttribute("open", true);
            item.querySelector("ul").addEventListener("mouseleave", () => {
                setTimeout(function(){
                    if(item.hasAttribute('megaopen')){
                        item.setAttribute("open", true);
                    }
                    else{
                        
                        item.removeAttribute("open");
                    }
                }, 500);
            });
            item.addEventListener("mouseleave", () => {
                
                setTimeout(function(){
                    if(item.hasAttribute('megaopen')){
                        item.setAttribute("open", true); 
                    }
                    else{
                        
                        item.removeAttribute("open");
                    }
                }, 100);
            });
        }); 
    });
