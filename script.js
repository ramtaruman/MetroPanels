const panels = document.querySelectorAll('.panel')
panels.forEach((panel)=>{
    panel.addEventListener('mouseenter',()=>{
        remove_active()
        panel.classList.add('active')
    }

    )
})

function remove_active(){
    panels.forEach(panel=>{
        panel.classList.remove('active')
    })
}

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark');
})