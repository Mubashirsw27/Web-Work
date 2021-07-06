
import { Button, Input, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import './App.css';
import Post from './components/Post';
import { db, auth } from './config/firebase';
import ImageUpload from './config/ImageUpload';
import InstagramEmbed from 'react-instagram-embed';
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 250,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
function App() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //User has Logged in 
        console.log(authUser)
        setUser(authUser);
      }
      else {
        //User has Logged out
        setUser(null);
      }
    }
    )
    return () => {
      unsubscribe();
    }
  }, [user, username]);

  useEffect(() => {
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          post: doc.data()
        }
      )))
    })
  }, []);

  const signUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return (authUser.user.updateProfile({
          displayName: username
        }), refreshPage()
        );
      })
      .catch((error) => alert(error))
    setOpen(false);
  }
  const refreshPage = () => {
    window.location.reload();
  }
  const signIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));

    setOpenSignIn(false);
  }
  return (
    <div className="app">


      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signUp">
            <center>
              <img
                className="app__headerimg"
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt=''
              />
            </center>

            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button
              type="submit"
              onClick={signUp}
            >Sign Up</Button>
          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signUp">
            <center>
              <img
                className="app__headerimg"
                src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt=''
              />
            </center>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button
              type="submit"
              onClick={signIn}
            >Sign IN</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerimg"
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''
        />
        {
          user ? (
            <Button onClick={() => auth.signOut()}>Sign out</Button>)
            : (
              <div className="app__loginContainer">
                <Button onClick={() => setOpenSignIn(true)}>Sign in</Button>
                <Button onClick={() => setOpen(true)}>Sign up</Button>
              </div>
            )
        }
      </div>

      <div className="app_posts">
        <div className="add_postLeft" >
          {
            posts.map(({ id, post }) => (
              <Post key={id} postID={id} user={user} username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
            ))
          }
        </div>
        <div className="add_postRight">
          <InstagramEmbed
            url='https://www.instagram.com/p/CK5bcfgFYVV/?utm_source=ig_web_copy_link'
            clientAccessToken='222767516249412|a581530117c3a2b913e8b01ab06ca330'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => { }}
            onSuccess={() => { }}
            onAfterRender={() => { }}
            onFailure={() => { }}
          />

        </div>
      </div>
     <center>
      {
        user?.displayName ? (< ImageUpload username={user.displayName} />)
          :
          (<h3 className="loginInfo">Sorry Login First</h3>)
      }
      </center>
    </div>

  );
}

export default App;
