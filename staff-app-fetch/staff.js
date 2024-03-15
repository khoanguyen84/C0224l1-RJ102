// function renderStaffList() {
// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://jsonserver-vercel-api.vercel.app/staffs')
// xhr.send()
// xhr.onload = function () {
//     if (xhr.status === 200 && xhr.readyState === 4) {
//         let staffList = JSON.parse(xhr.responseText);
//         let htmls = staffList.map(function (staff) {
//             return `
//             <div class="col-md-3 mb-4">
//                 <div class="card">
//                     <img src="${staff.avatarUrl}" alt="">
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">
//                             Name: ${staff.fullname}
//                         </li>
//                         <li class="list-group-item">
//                             Gender: ${staff.gender ? 'Male' : 'Famale'}
//                         </li>
//                         <li class="list-group-item">
//                             Email: ${staff.email}
//                         </li>
//                         <li class="list-group-item">
//                             Dob: ${dayjs(staff.dob).format('DD MMM YYYY')}
//                         </li>
//                         <li class="list-group-item">
//                             Moblie: ${staff.mobile}
//                         </li>
//                     </ul>
//                     <div class="card-footer">
//                         <button class="btn btn-danger btn-sm"
//                             onclick='removeStaff("${staff.id}")'
//                         >Delete</button>
//                         <button class='btn btn-warning btn-sm'
//                             onclick='getStaff(${JSON.stringify(staff)})'
//                         >Modify</buton>
//                     </div>
//                 </div>
//             </div>
//             `
//         })
//         document.getElementById('staff-list').innerHTML = htmls.join('')
//     }
// }

// fetch('https://jsonserver-vercel-api.vercel.app/staffs', {
//     method: "GET"
// }).then(function (response) {
//     return response.json()
// }).then(function (staffList) {
//     let htmls = staffList.map(function (staff) {
//         return `
//             <div class="col-md-3 mb-4">
//                 <div class="card">
//                     <img src="${staff.avatarUrl}" alt="">
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">
//                             Name: ${staff.fullname}
//                         </li>
//                         <li class="list-group-item">
//                             Gender: ${staff.gender ? 'Male' : 'Famale'}
//                         </li>
//                         <li class="list-group-item">
//                             Email: ${staff.email}
//                         </li>
//                         <li class="list-group-item">
//                             Dob: ${dayjs(staff.dob).format('DD MMM YYYY')}
//                         </li>
//                         <li class="list-group-item">
//                             Moblie: ${staff.mobile}
//                         </li>
//                     </ul>
//                     <div class="card-footer">
//                         <button class="btn btn-danger btn-sm"
//                             onclick='removeStaff("${staff.id}")'
//                         >Delete</button>
//                         <button class='btn btn-warning btn-sm'
//                             onclick='getStaff(${JSON.stringify(staff)})'
//                         >Modify</buton>
//                     </div>
//                 </div>
//             </div>
//             `
//     })
//     document.getElementById('staff-list').innerHTML = htmls.join('')
// })

// fetch('https://jsonserver-vercel-api.vercel.app/staffs', {
//     method: "GET"
// })
//     .then((response) => response.json())
//     .then((staffList) => {
//         let htmls = staffList.map(function (staff) {
//             return `
//             <div class="col-md-3 mb-4">
//                 <div class="card">
//                     <img src="${staff.avatarUrl}" alt="">
//                     <ul class="list-group list-group-flush">
//                         <li class="list-group-item">
//                             Name: ${staff.fullname}
//                         </li>
//                         <li class="list-group-item">
//                             Gender: ${staff.gender ? 'Male' : 'Famale'}
//                         </li>
//                         <li class="list-group-item">
//                             Email: ${staff.email}
//                         </li>
//                         <li class="list-group-item">
//                             Dob: ${dayjs(staff.dob).format('DD MMM YYYY')}
//                         </li>
//                         <li class="list-group-item">
//                             Moblie: ${staff.mobile}
//                         </li>
//                     </ul>
//                     <div class="card-footer">
//                         <button class="btn btn-danger btn-sm"
//                             onclick='removeStaff("${staff.id}")'
//                         >Delete</button>
//                         <button class='btn btn-warning btn-sm'
//                             onclick='getStaff(${JSON.stringify(staff)})'
//                         >Modify</buton>
//                     </div>
//                 </div>
//             </div>
//             `
//         })
//         document.getElementById('staff-list').innerHTML = htmls.join('')
//     })
// }

const API_URL = 'https://jsonserver-vercel-api.vercel.app/staffs';
var current_page = 1
var pageSize = 4;
var totalPage = 0

function changePageSize(){
    pageSize = Number(document.getElementById('page-size').value)
    renderStaffList(current_page, pageSize)
}

async function getTotalPage() {
    let response = await fetch(API_URL, {
        method: "GET"
    })
    let data = await response.json() // total row: 33 pagesize = 4 33/4 > 8 9
    totalPage = Math.ceil(data?.length / pageSize)
}

async function renderStaffList(page = current_page, limit = pageSize) {
    let response = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`, {
        method: "GET"
    })
    if (!response.ok) {
        alert('Something went wrong, please try again')
    }
    let staffList = await response.json()
    let htmls = staffList?.map(function (staff) {
        return `
                <div class="col-md-3 mb-4">
                    <div class="card">
                        <img src="${staff.avatarUrl}" alt="">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                Name: ${staff.fullname}
                            </li>
                            <li class="list-group-item">
                                Gender: ${staff.gender ? 'Male' : 'Famale'}
                            </li>
                            <li class="list-group-item">
                                Email: ${staff.email}
                            </li>
                            <li class="list-group-item">
                                Dob: ${dayjs(staff.dob).format('DD MMM YYYY')}
                            </li>
                            <li class="list-group-item">
                                Moblie: ${staff.mobile}
                            </li>
                        </ul>
                        <div class="card-footer">
                            <button class="btn btn-danger btn-sm"
                                onclick='removeStaff("${staff.id}")'
                            >Delete</button>
                            <button class='btn btn-warning btn-sm'
                                onclick='getStaff(${JSON.stringify(staff)})'
                            >Modify</buton>
                        </div>
                    </div>
                </div>
                `
    })
    document.getElementById('staff-list').innerHTML = htmls.join('')
    getTotalPage()
}

function nextPage() {
    if (current_page < totalPage) {
        current_page += 1
        renderStaffList(current_page)
        document.getElementById('btn-previous').classList.remove('disabled')
        document.getElementById('btn-previous').classList.remove('active')
        document.getElementById('btn-next').classList.add('active')
    }
    else {
        document.getElementById('btn-next').classList.add('disabled')
        document.getElementById('btn-previous').classList.add('active')
    }
}

function previousPage() {
    if (current_page > 1) {
        current_page -= 1
        renderStaffList(current_page)
        document.getElementById('btn-previous').classList.add('active')
        document.getElementById('btn-next').classList.remove('active')
        document.getElementById('btn-next').classList.remove('disabled')
    }
    else {
        document.getElementById('btn-previous').classList.add('disabled')
        document.getElementById('btn-next').classList.add('active')
    }
}

async function removeStaff(staffId) {
    let confirm = window.confirm('Are you sure to remove?')
    if (confirm) {
        let response = await fetch(`${API_URL}/${staffId}`, {
            method: "DELETE"
        })
        if (!response.ok) {
            alert('Can not remove staff')
        }
        let result = await response.json()
        renderStaffList()
        alert('Staff removed success')
    }
}

async function createStaff() {
    let fullname = document.getElementById('fullname').value
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let avatarUrl = document.getElementById('avatarUrl').value
    let dob = document.getElementById('dob').value
    let gender = document.getElementById('gender').value
    let staff = {
        fullname: fullname,
        email: email,
        mobile: mobile,
        avatarUrl: avatarUrl,
        dob: Date(dob),
        gender: Boolean(gender)
    }

    let response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(staff)
    })
    if (!response.ok) {
        alert('Can not create staff')
    }
    let result = await response.json()
    renderStaffList()
    cleanForm()
    alert(`Staff: ${result.fullname} created success`)
}

function cleanForm() {
    document.getElementById('fullname').value = null
    document.getElementById('email').value = null
    document.getElementById('mobile').value = null
    document.getElementById('avatarUrl').value = null
    document.getElementById('dob').value = null
    document.getElementById('gender').value = true
    document.getElementById('staffId').value = 0
}


function getStaff(staff) {
    document.getElementById('btn-create').classList.add('d-none')
    document.getElementById('btn-update').classList.remove('d-none')
    document.getElementById('btn-cancel').classList.remove('d-none')
    document.getElementById('form-title').innerHTML = 'Update Staff'


    document.getElementById('fullname').value = staff.fullname
    document.getElementById('email').value = staff.email
    document.getElementById('dob').value = dayjs(staff.dob).format('YYYY-MM-DD')
    document.getElementById('avatarUrl').value = staff.avatarUrl
    document.getElementById('gender').value = staff.gender
    document.getElementById('mobile').value = staff.mobile
    document.getElementById('staffId').value = staff.id
}

function resetCreateStaffForm() {
    document.getElementById('btn-create').classList.remove('d-none')
    document.getElementById('btn-update').classList.add('d-none')
    document.getElementById('btn-cancel').classList.add('d-none')
    document.getElementById('form-title').innerHTML = 'Create Staff'

    cleanForm()
}

async function updateStaff() {
    let fullname = document.getElementById('fullname').value
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile').value
    let avatarUrl = document.getElementById('avatarUrl').value
    let dob = document.getElementById('dob').value
    let gender = document.getElementById('gender').value
    let staffId = Number(document.getElementById('staffId').value)
    let staff = {
        fullname: fullname,
        email: email,
        mobile: mobile,
        avatarUrl: avatarUrl,
        dob: Date(dob),
        gender: Boolean(gender)
    }

    let response = await fetch(`${API_URL}/${staffId}`, {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(staff)
    })
    if (!response.ok) {
        alert('Can not update staff')
    }
    let result = await response.json()
    alert(`Staff: ${result.fullname} update success`)
    renderStaffList()
    resetCreateStaffForm();

}
renderStaffList()

