function Header({ siteName }) {
    return (
        <header className="site-header">
            <h1>{siteName}</h1>
            <nav>
                <a href="#">หน้าแรก</a>
                <a href="#">เกี่ยวกับ</a>
                <a href="#">ติดต่อ</a>
            </nav>
        </header>
    );
}

export default Header;
