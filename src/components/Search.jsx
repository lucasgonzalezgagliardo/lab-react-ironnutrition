
const Search = (({search})=>{
    const filtroHandler = (e) => {
        search(e.target.value);
    }
    return(
    <div>
        <input type="text" placeholder="Search" id="name" onChange={filtroHandler}/>
    </div>)
})

export default Search;