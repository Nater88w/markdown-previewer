
export default function Editor({set}){
    function type(e){
        set(e.target.value)
    }
    return(
        <div id='editor'>
            <textarea onInput={type} rows='10' cols='40'></textarea>
        </div>
    )
}