const khoa = {
    fullname: "Khoa Nguyễn",
    age: 20,
    gender: false,
    email: 'khoa.nguyen@codegym.vn'
}
function Profile() {
    // if (khoa.gender) {
    //     return (
    //         <>
    //             <p>Fullname: {khoa.fullname}</p>
    //             <p>Age: {khoa.age}</p>
    //             <p>Gender: Male</p>
    //             <p>Email: {khoa.email}</p>
    //         </>
    //     )
    // }
    // return (
    //     <>
    //         <p>Fullname: {khoa.fullname}</p>
    //         <p>Age: {khoa.age}</p>
    //         <p>Gender: Female</p>
    //         <p>Email: {khoa.email}</p>
    //     </>
    // )

    return (
        <>
            <p>Fullname: {khoa.fullname}</p>
            <p>Age: {khoa.age}</p>
            <p>Gender: {khoa.gender ? 'Male' : 'Female'}</p>
            <p>Email: {khoa.email}</p>
        </>
    )
}

export default Profile