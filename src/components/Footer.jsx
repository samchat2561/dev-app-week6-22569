// src/components/Footer.jsx  (ใช้ props.children ก็ได้ ตามข้อ 5.5)
function Footer({ children }) {
    return <footer className="site-footer">{children}</footer>;
}
export default Footer;

// เรียกใช้ใน App.jsx
// <Footer>© 2569 My Blog โดย ชื่อของคุณ</Footer>
