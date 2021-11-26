let push = document.getElementById('push')

let isopen = false

push.addEventListener('click', ()=>{
    let pbm = document.getElementById('pbm')
    let pbs = document.getElementById('pbs')
    let links = document.getElementsByClassName('links')[0]
    let button = document.getElementsByClassName('button')[0]
    if (isopen) {
        isopen = false
        pbs.style.display = 'none'
        pbm.style.display = 'block'
        links.style.display = 'none'
        button.style.display = 'none'
    }
    else {
        isopen = true
        pbs.style.display = 'block'
        pbm.style.display = 'none'
        links.style.display = 'block'
        button.style.display = 'block'
    }
})