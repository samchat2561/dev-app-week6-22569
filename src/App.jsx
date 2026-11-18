import Header from './components/Header'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const posts = [
  { id: 1, title: 'เริ่มต้นกับ React', author: 'ชื่อของคุณ', date: '1 ธ.ค. 2569',
    summary: 'รู้จัก React และการแบ่งหน้าจอเป็น Component', category: 'React' },
  { id: 2, title: 'ใช้งาน Vite', author: 'ชื่อของคุณ', date: '8 ธ.ค. 2569',
    summary: 'สร้างโปรเจกต์ React ได้เร็วด้วย Vite', category: 'เครื่องมือ' },
  { id: 3, title: 'เข้าใจ Props', author: 'ชื่อของคุณ', date: '15 ธ.ค. 2569',
    summary: 'ส่งข้อมูลจาก Component แม่ไปยัง Component ลูก', category: 'React' },
  { id: 4, title: 'เขียน JSX ให้ถูกต้อง', author: 'ชื่อของคุณ', date: '22 ธ.ค. 2569',
    summary: 'สรุป 4 กฎของ JSX ที่ต้องจำ', category: 'JavaScript' },
  { id: 5, title: 'แสดงรายการด้วย map', author: 'ชื่อของคุณ', date: '29 ธ.ค. 2569',
    summary: 'ใช้ map และ key แสดงรายการซ้ำ', category: 'JavaScript' },
]

const categories = ['React', 'JavaScript', 'เครื่องมือ']

function App() {
  return (
    <>
      <Header siteName="My Blog" />
      <div className="layout">
        <main>
          <PostList posts={posts} />
        </main>
        <Sidebar categories={categories} />
      </div>
      <Footer>© 2569 My Blog โดย Mark</Footer>
    </>
  )
}

export default App
