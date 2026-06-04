export default function Resume () {
    return(
        <div id='resumepage'>

            <h2>Resume</h2>
            <aside id='resume'>
                <div id="resume-preview">
                    {/* place resume preview here */}
                    <h2>
                        Kurtis Zirkle Resume
                    </h2>
                    <iframe src="Kurtis-Zirkle-Resume.pdf"  width="100%" height="600px"></iframe>
                </div>
                <div>
                    {/* place resume download here */}
                    <p>Download Here</p>
                    
                        <a className="download" href='Kurtis-Zirkle-Resume.pdf' download>Kurtis Zirkle Resume</a>
                </div>
            </aside>
        </div>
    )
}