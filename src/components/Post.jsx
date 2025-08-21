import { Link } from 'react-router-dom';

import classes from './Post.module.css';

function Post({ id, title, author, date, body }) {

  return (
    <li className={classes.post}>
      <Link to={id.toString()}>
        <h2>{title}</h2>
        <p className={classes.author}>by {author}</p>
        <p className={classes.date}>{date}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}
export default Post;