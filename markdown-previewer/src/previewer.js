import Markdown from 'react-markdown';
export default function Previewer({text}){
    
    return(
        <div id="preview">
            <Markdown>{text}</Markdown>
        </div>
    )
}