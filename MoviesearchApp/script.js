const getMovie=async()=>{
    let result=""
    const movies=omdb.value
    const res=await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=512f1980${movies}`)
    const jsres=await res.json()
    console.log(res)
    result=`
    <h3>${jsres.Title}</h3>
    <h3>${jsres.Director}</h3>
    <h3>${jsres.writer}</h3>
    <h4>${jsres.Actors}</h4>
    <h4>${jsres.Language}</h4>
    <h4><${jsres.Awards}</h4>
    <h4>${jsres.Ratings.source},${jsres.Ratings.value}</h4>
    <img src=${jsres.Poster} alt="icon">`


    cnt.innerHTML=result
}

