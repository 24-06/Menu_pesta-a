const target= document.querySelectorAll('[data-target]')
const content=document.querySelectorAll('[ data-content]')
target.forEach(target=>{
    target.addEventListener('click',()=>{
        content.forEach(c=>{
            c.classList.remove('active') /*remover al dar click la clase que está activa en el menú*/
        })
        const t=document.querySelector(target.dataset.target) /*selecciono un unico elemento del target */
        t.classList.add('active')
    })

})