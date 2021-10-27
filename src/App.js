import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Counter from './components/Counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([]);

    const [selectedSort, setSelectedSort] = useState("");

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    };

    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
    }

    return (
        <div className="App">
            <MyButton onClick={fetchPosts}>GET POSTS</MyButton>
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировать"
                    options={[
                        { value: "title", name: "по названию" },
                        { value: "body", name: "по содержанию" }
                    ]}
                />
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title='Посты про Javascript' />
                : <h1 style={{ textAlign: 'center' }}>
                    Посты не найдены!
                </h1>
            }
        </div>
    );
}

export default App;
