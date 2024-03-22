const jobList = ['java', 'react', 'angular']
// function Job() {
//     const jobs = []
//     for (let i = 0; i < jobList.length; i++) {
//         jobs.push(<h1>{jobList[i]}</h1>)
//     }
//     return (
//         <>
//             {jobs}
//         </>
//     )
// }

function Job() {
    return (
        <>
            {
                jobList.map((job, index) => (
                    <h1 key={index}>{job}</h1>
                ))
            }
        </>
    )
}


export default Job;