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
                            <button class="btn btn-danger"
                                onclick='removeStaff(${staff.id})'
                            >Delete</button>
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
}
renderStaffList()

