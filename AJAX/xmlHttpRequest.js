function getPostList() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://js-post-api.herokuapp.com/api/posts')
    xhr.send()
    xhr.onload = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            const postList = JSON.parse(xhr.responseText)
            let htmls = ""
            for (let post of postList) {
                htmls += "<tr>"
                htmls += `
                    <td>${post.title}</td>
                    <td>${post.author}</td>
                    <td>${post.description}</td>
                    <td>
                        <img src='${post.imageUrl}' />
                    </td>
                `
                htmls += "</tr>"
            }
            document.getElementById('post-list').innerHTML = htmls
        }
    }
}

getPostList()

// JSON.Parse
// JSON.Stringify