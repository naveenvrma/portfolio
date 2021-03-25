import './PageContent.css'

function PageContent({title,content}){
    return (
        <div>
            <h1>{title}</h1>
            <p>{content || "This is default content"}</p>
        </div>
    )
}

export default PageContent