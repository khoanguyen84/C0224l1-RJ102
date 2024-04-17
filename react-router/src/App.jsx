import { Routes, Route } from "react-router-dom"
import Home from "./components/home"
import News from "./components/news"
import About from "./components/about"
import Navbar from "./components/navbar"
import NotFound from "./components/not-found"
import NgoaiHangAnh from './components/ngoai-hang-anh';
import NewsDetail from './components/news-detail';
import Department from "./components/department"
import ITDepartment from "./components/it-depart"
import SaleDepartment from "./components/sale-depart"
import HRDepartment from "./components/hr-depart"
import StudentPage from "./components/student-page"
import StudentList from "./components/student-list"
import StudentDetail from "./components/student-detail"
import StaffPage from "./components/staff-page"
import StaffList from "./components/staff-list"
import StaffDetail from "./components/staff-detail"
function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug/:newid" element={<NewsDetail />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/department" element={<Department/>}/>
        <Route path="/department/it" element={<ITDepartment/>}/>
        <Route path="/department/hr" element={<HRDepartment/>}/>*/}
        <Route path="/department" element={<Department />}>
          <Route index element={<SaleDepartment />} />
          <Route path="it" element={<ITDepartment />} />
          <Route path="hr" element={<HRDepartment />} />
          <Route path="sale" element={<SaleDepartment />} />
        </Route>
        <Route path="/student" element={<StudentPage />}>
          <Route index element={<StudentList />} />
          <Route path="list" element={<StudentList />} />
          <Route path=":studentId" element={<StudentDetail />} />
        </Route>
        <Route path="/staff" element={<StaffPage />}>
          <Route path="list" element={<StaffList />} />
          <Route path=":staffid" element={<StaffDetail/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
