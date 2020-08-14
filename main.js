
    const acess = new XMLHttpRequest()
    acess.open('GET', 'https://api.github.com/users/ElenC/repos')
    
    acess.onreadystatechange = function(){

        if(this.status == 200 && this.readyState == 4){

            const main = document.querySelector('main')
            const conteudo = JSON.parse(acess.responseText)
            
            for(let i =0; i<conteudo.length; i++){

                main.innerHTML += "<div id='container'><div id='nomeG'>" + conteudo[i].name + 
                "</div><div><a href='"+ conteudo[i].html_url + " target='_blank'><input type='button'id='link' n value='LINK'></a></div><b> <div><img src= 'https://professor-falken.com/wp-content/uploads/2017/07/Como-redirigir-o-redireccionar-a-otra-pagina-web-en-HTML-professor-falken.com_.jpg'" 
                + conteudo[i].language + "'></div><b><div><a href='"
                + conteudo[i].clone_url + "' target='_blank'><input type='button'id='clone'  value='CLONE'></a></div><b></div>"
            }
        }
      
    }

    acess.send()

    function linkAcess(){

        var linkA = Element.setAttribute( )
       
    }   

    function linkClon(url){
        const input = document.createElement("input");
        input.value = url;
        input.id = "input";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
    }