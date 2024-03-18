const API_KEY = 'KwZw04bXJbdR8UA59T1xmKhX9LnaciX4'

async function search(){
    let keyword = document.getElementById("keyword").value
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`)
    let giphyList = await response.json();
    let htmls = giphyList?.data?.map((giphy) => {
        return `<img src='${giphy?.images?.original?.url}' alt=''/> `
    })

    document.getElementById('result').innerHTML = htmls.join("")
}