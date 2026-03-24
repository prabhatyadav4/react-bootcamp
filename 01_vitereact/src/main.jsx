import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom React!</h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const AnotherElement = (
    <a href='https://google.com' target='_blank'>Visit Google</a>
)

const user = "Prabhat"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit Google',
    user
)

createRoot(document.getElementById('root')).render(
   
    // <App />

    // <MyApp />
    // MyApp() also works
    
    // ReactElement // It is object so it is written directly

    // AnotherElement

    reactElement
)