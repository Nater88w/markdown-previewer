
export default function Editor({set,text}){
    
    function type(e){
        set(e.target.value);
       }
    return(
        <div className="edit">
            <div className="header"><b>Editor</b></div>
            <textarea id='editor' defaultValue={text} onInput={type} rows='10' cols='40'></textarea>
        </div>
    )
}