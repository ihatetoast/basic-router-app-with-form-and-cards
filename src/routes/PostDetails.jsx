import { Link, useLoaderData } from 'react-router-dom';

import Modal from '../components/Modal.jsx';

import classes from './PostDetails.module.css';

function PostDetails() {
  const post = useLoaderData();
  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h2>Oh noes!</h2>
          <p>I can't seem to find the post you're looking for.</p>
          <p>
            <Link className={classes.btn} to='..'>
              Return to posts
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <h2 className={classes.title}>{post.title}</h2>
        <p className={classes.date}>{post.date}</p>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({params}) {
  const response = await fetch('http://localhost:8080/posts/' + params.postId);
  const resData = await response.json();
  return resData.post;
}
