import React from 'react'
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

function Greeting(){
    return <h1>Este es un componente</h1>
}

root.render(<div>
    <Greeting/>
</div>)