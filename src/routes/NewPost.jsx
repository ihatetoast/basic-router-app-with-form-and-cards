import { Link, Form, redirect } from 'react-router-dom';
import Model from '../components/Modal.jsx';

import classes from './NewPost.module.css';

export default function NewPost() {
  return (
    <Model>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor='title'>Title</label>
          <input id='title' name='title' required />
        </p>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' rows={3} name='body' required />
        </p>
        <p>
          <label htmlFor='name'>Author (your name)</label>
          <input id='name' name='author' required />
        </p>
        <p className={classes.actions}>
          <Link to='..' type='button'>
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Model>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // body key and some value etc
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return redirect('/');
}
