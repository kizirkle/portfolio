import Nav from './mini-components/Nav'
//import Nav from 'react-bootstrap/Nav'
export default function Header() {

    return(
        <>
            <header class="header">
                <h1>Kurtis Zirkle</h1>
                <Nav />
            </header>
            <div id="header-img-container">
                <img id='header-img' src="face.png" />
            </div>

            <aside id="hello">
                <h2>Hello from Kurtis Zirkle! 
                    <br />
                    <span className="small">Welcome to my Portfolio.</span>
                </h2>
            </aside>
        </>
        
    )
}