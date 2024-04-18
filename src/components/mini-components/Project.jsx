
export default function Project({app}) {

    return(
        <div className="card">
            <div>
                <h3 className='title'>{app.title}</h3>
                <a target="_blank" href={app.appUrl}>
                    <img src={app.imageUrl} alt={app.imgAlt}/>
                </a>
            </div>
            
            <p>{app.desc}</p>
            <a target="_blank" href={app.repoUrl}>
                <button>Repo Link</button>
            </a>
            <a target="_blank" href={app.appUrl}>
                <button>App Link</button>
            </a>
                        
        </div>
        
    )
}