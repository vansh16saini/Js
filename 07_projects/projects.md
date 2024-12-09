# Projects related to Dom
## Projects
The following is an example of how to use the `dom` to Colour changer
```javascript
const buttons = document.querySelectorAll('.buttton');
const body = document.querySelector("body")
buttons.forEach(button => {
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='black'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id==='yello'){
            body.style.backgroundColor = e.target.id;
        }
    })    
});

```