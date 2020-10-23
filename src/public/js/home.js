const menu = document.getElementById('menu')
const options = document.getElementById('options')

const menu_oc = ()=>{

    if(options.style.height === '200px'){
        
        options.style.height = '0px'

    }else{

        options.style.height = '200px'

    }

}

menu.addEventListener('click', ()=> menu_oc())