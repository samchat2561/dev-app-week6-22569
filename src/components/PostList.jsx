import PostCard from "./PostCard";

function PostList({ posts }) {
    return (
        <section className="post-list">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    summary={post.summary}
                    category={post.category}
                />
            ))}
        </section>
    );
}

export default PostList;
