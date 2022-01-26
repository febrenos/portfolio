// remove id content in 650px

// remove propriedades
// el.style.zoom = "";
// el.style.removeProperty('zoom');

//Removendo um nó a partir do pai
// var node = document.getElementById("content");
//     if (node.parentNode) {
//         // node.parentNode.removeChild(node);
//         // element.setAttribute(class.box);
//     }

    // document.getElementById("content").innerHTML = "novo conteudo da div";
//     document.getElementById('conteudo').remove();
// function abrirMenu() {
//     document.getElementById('menu').style.width = '210px';
//     document.getElementById('content').style.marginLeft = '210px';
// }

//resposive menu
function abrirMenu() {
    if(window.matchMedia("(min-width: 700px)").matches)
    {
        document.getElementById('menu').style.width = '210px';
        document.getElementById('content').style.marginLeft = '210px';
    }
    else{
        document.getElementById('menu').style.width = '210px';
    }
}
function fecharMenu() {
    document.getElementById('menu').style.width = '0px';
    document.getElementById('content').style.marginLeft = '0px';
}

// alert on + sobre
function alerta(){
    alert("I am a committed professional, I always seek results!");
    alert("Open to proposals and opportunities.");
}

//links redirect new window
function softskill(){
    window.open('https://www.16personalities.com/br/teste-de-personalidade');
}
function project1(){
    window.open('https://github.com/felipesugisawa/Inova-Vagas');
}
function project2(){
    window.open('https://github.com/felipesugisawa/Rocket');
}
function project3(){
    window.open('https://github.com/felipesugisawa/reactFilmes');
}
function project4(){
    window.open('https://github.com/felipesugisawa/2s-2019-t1-role_top');
}
function project5(){
    window.open('https://github.com/felipesugisawa/2s-2019-t1-role_top');
}

//links buttons (execute button after 0.8s)
// setTimeout(function, 800);
function curriculum (){
    setTimeout(function(){
        window.open('./pdf/CV Felipe Sugisawa Altran En.pdf');
    }, 800);
}
function linkIn(){
    setTimeout(function(){
        window.open('https://www.linkedin.com/in/felipe-sugisawa-3aa5b217a/');
    }, 800);
}
function linkTwt(){
    setTimeout(function(){
        window.open('https://twitter.com/lipecks_');
    }, 800);
}
function linkInsta(){
    setTimeout(function(){
        window.open('https://www.instagram.com/lipecks_/');
    }, 800);
}
function linkGit(){
    setTimeout(function(){
        window.open('https://github.com/felipesugisawa');
    }, 800);
}

    //skroll
    const debounce = function(func, wait, immediate) {
        let timeout;
        return function(...args) {
          const context = this;
          const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';
    
    function animeScroll() {
      const windowTop = window.pageYOffset + ((window.innerHeight * 4.7) / 4);
      target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
          element.classList.add(animationClass);
        } else {
          element.classList.remove(animationClass);
        }
      })
    }
      
      animeScroll();
      
      if(target.length) {
        window.addEventListener('scroll', debounce(function() {
          animeScroll();
        }, 100));
      }
    
    //white mode without localstorage
    // document.documentElement.style.setProperty('--solid', '#191622',);
    // //add htmml
    // const $html = document.querySelector('html')
    // //add checkbox id
    // const $checkbox = document.querySelector('#aparenciab')
    // // div aparenciab
    // $checkbox.addEventListener('change', function(){
    //     $html.classList.toggle('aparenciab') 
    // })

    //White mode with localstorage
    //get id checkbox in html
    const toggleSwitch = document.getElementById('checkbox');
    //get data-theme in css
    const currentTheme = localStorage.getItem('data-theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }  

    function switchTheme(e) {
        if (!e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'white');
            localStorage.setItem('data-theme', 'white');
        } else{
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('data-theme', 'dark');  
        }
    } 

    toggleSwitch.addEventListener('change', switchTheme, false);
