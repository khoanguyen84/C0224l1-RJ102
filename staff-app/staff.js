function renderStaffList() {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://jsonserver-vercel-api.vercel.app/staffs')
    xhr.send()
    xhr.onload = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            let staffList = JSON.parse(xhr.responseText);
            let htmls = staffList.map(function (staff) {
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
        }
    }
}

function removeStaff(staffId) {
    let confirm = window.confirm('Are you sure to remove?')
    if (confirm) {
        const xhr = new XMLHttpRequest()
        xhr.open('DELETE', `https://jsonserver-vercel-api.vercel.app/staffs/${staffId}`)
        xhr.send()
        xhr.onload = function () {
            if (xhr.status === 200 && xhr.readyState) {
                renderStaffList()
                alert('Staff removed success')
            }
        }
    }
}

function createStaff() {
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
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://jsonserver-vercel-api.vercel.app/staffs')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(staff))
    xhr.onload = function () {
        if (xhr.status === 201 && xhr.readyState === 4) {
            renderStaffList()
            cleanForm()
            alert(`Staff created success`)
        }
    }
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


function getStaff(staff){
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

function resetCreateStaffForm(){
    document.getElementById('btn-create').classList.remove('d-none')
    document.getElementById('btn-update').classList.add('d-none')
    document.getElementById('btn-cancel').classList.add('d-none')
    document.getElementById('form-title').innerHTML = 'Create Staff'

    cleanForm()
}

function updateStaff(){
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

    let xhr = new XMLHttpRequest();
    xhr.open("PUT", `https://jsonserver-vercel-api.vercel.app/staffs/${staffId}`)
    xhr.setRequestHeader('Content-Type', "application/json")
    xhr.send(JSON.stringify(staff))
    xhr.onload = function(){
        if(xhr.status === 200 && xhr.readyState === 4) {
            alert('Staff update success')
            renderStaffList()
            resetCreateStaffForm();
        }
    }
}
renderStaffList()

