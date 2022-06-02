export const getPlayer = ()=>{
    let dataLs = localStorage.getItem('players');
    return JSON.parse(dataLs)

}

export const getQuestion = ()=>{
    let dataLs = localStorage.getItem('questions');
    return JSON.parse(dataLs)

}
export const restart = ()=>{
    window.location.reload()
}
