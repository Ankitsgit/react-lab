// understanding how react works under the hood
function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    // */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


// jaise hum aap.jsx  me likhte hai wo default react use karenge to likhna padega

//hamara custom react me kuch aise hoga
const reactElement= {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',

    },
    children:'click me to visit google'


}

// to isko render karne ke liye hume ek function banani padegi

 
const mainContainer =document.querySelector('#root')
customRender(reactElement,mainContainer)