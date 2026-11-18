// src/components/Sidebar.jsx  (ใช้ map + key และ Default Parameter)
function Sidebar({ title = "หมวดหมู่", categories }) {
    return (
        <aside className="sidebar">
            <h3>{title}</h3>
            <ul>
                {categories.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </aside>
    );
}
export default Sidebar;
