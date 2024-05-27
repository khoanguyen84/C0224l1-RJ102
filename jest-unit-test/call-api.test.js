const { fetchStaffList, createStaff } = require('./call-api')

describe('test cast staff api', () => {
    test('should be have data', async () => {
        let data = await fetchStaffList()
        expect(data?.length).toBeGreaterThanOrEqual(0)
    })
    test('should be have new staff', async () => {
        let data = await createStaff({
            "fullname": "Khoa Nguyễn",
            "gender": true,
            "email": "khoa@gmail.com",
            "avatarUrl": "https://randomuser.me/api/portraits/men/69.jpg",
            "dob": "2010-12-15T17:00:00.000Z",
            "mobile": "0935216417",
        })
        expect(data?.fullname).not.toBeUndefined()
    })
})