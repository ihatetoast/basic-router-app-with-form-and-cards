import {useLoaderData} from 'react-router-dom';


import Post from './Post.jsx';
import classes from './PostList.module.css';

export default function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              author={post.author}
              date={post.date}
            />
          ))}
        </ul>
      )}
      { posts.length === 0 && (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          No posts. Write something, Hemingway.
        </div>
      )}
    </>
  );
}
