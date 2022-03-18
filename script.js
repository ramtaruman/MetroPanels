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
const nextdark = document.getElementById('textdark');
const xicon=document.getElementById('nexticon');
const label=document.getElementById('label');
const ball = document.getElementById('ball');

checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('dark');
    nextdark.classList.toggle('dark');
    xicon.classList.toggle('xray');
    label.classList.toggle('white');
    ball.classList.toggle('black');
})