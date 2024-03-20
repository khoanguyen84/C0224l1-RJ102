import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// function component
// class component

function App() {
    // logic (data)
    // UI
    return (
        // JSX
        <div>
            {/* <h1 style={{
                color: "red",
                backgroundColor: 'yellow'
            }}>Xin chào anh em</h1>
            <h5 style={{
                fontSize: '30px',
                textDecoration: 'underline'
            }}>Learing ReactJs</h5> */}
            <h1 className='display-1'>Xin chào anh em</h1>
            <h5 className='display-5'>Learing ReactJs</h5>
            <p>Exercitation proident incididunt duis proident aliquip fugiat. Aliqua veniam dolor ullamco elit ipsum proident cupidatat est qui et magna. Pariatur reprehenderit sunt non qui non ipsum commodo do ex est aliqua. Fugiat ullamco ea ex ut in quis pariatur laborum eiusmod aliquip eu nisi magna ex. Proident cillum velit aute minim ullamco dolor incididunt sint.</p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// ReactDOM.render(<App/> , document.getElementById('root'))