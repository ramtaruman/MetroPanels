# MetroPanels

## How it works

#### Expands the panel on hover
```javascript
panel.addEventListener('mouseenter',()=>
{
        remove_active()
        panel.classList.add('active')
}
```

#### Contracts the remaining panels
```javascript
function remove_active()
{
    panels.forEach(panel=>
    {
        panel.classList.remove('active')
    }
}
```
## Usage

#### This transition property governs the animations
```CSS
transition: opacity 0.3s ease-in 0.4s;
```
#### Minimal border radius and margin for metro feel
```CSS
border-radius: 1px;
margin: 0.5px;
```
#### Can be scaled to include more panels
```HTML
<div class="container">
     <div class="panel active"></div>
     <div class="panel"></div>
     .
     .
     .
     nth <div class="panel"></div>
</div>
