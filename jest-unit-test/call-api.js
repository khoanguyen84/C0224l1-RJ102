async function fetchStaffList(){
    let res = await fetch('https://jsonserver-vercel-api.vercel.app/staffs?_page=10&_limit=100')
    let data = await res.json()
    return data;
}

async function createStaff(staff){
    let res = await fetch('https://jsonserver-vercel-api.vercel.app/staffs', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(staff)
    })

    let data = res.json()
    return data
}

module.exports = {
    fetchStaffList,
    createStaff
}