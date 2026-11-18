// src/components/PostCard.jsx  (เพิ่ม summary และ category)
function PostCard({ title, author, date, summary, category }) {
    return (
        <article className="post-card">
            <h2>{title}</h2>
            <p>
                โดย {author} | {date} | {category}
            </p>
            <p>{summary}</p>
        </article>
    );
}
export default PostCard;
