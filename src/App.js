import { useEffect, useState } from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';


function App() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'test 1' },
  //   { id: 2, title: 'test 2' },
  //   { id: 3, title: 'test 3' }
  // ]);

  // const [postList, setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1
  // })

  // const [filters, setFilters] = useState({
  //   _limit: 10,
  //   _page: 1,
  //   title_like: '',
  // })

  // useEffect(() => {
  //   async function getPosts() {
  //     try {
  //       const paramString = queryString.stringify(filters);
  //       const url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
  //       const response = await fetch(url);
  //       const responseJSON = await response.json();

  //       const { data, pagination } = responseJSON;

  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }
  //   getPosts();
  // }, [filters]);

  // const handleTodoClick = (todo) => {
  //   const index = todoList.findIndex(x => x.id === todo.id);
  //   if (index < 0) return;

  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // const handleTodoForm = (val) => {
  //   const newTodoList = [...todoList];

  //   if (!val) return null;

  //   const newElement = {
  //     id: todoList.length + 1,
  //     ...val
  //   }

  //   newTodoList.push(newElement);
  //   setTodoList(newTodoList);

  // }

  // const handlePageChagne = (newpage) => {
  //   console.log('New page: ', newpage);
  //   setFilters({
  //     ...filters,
  //     _page: newpage
  //   })
  // }

  // const handleFiltersChange = (newFilters) => {
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm
  //   })
  // }
  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      <h1>Clock</h1>

      {showClock && <Clock />}

      <button onClick={() => setShowClock(false)}> Hide Clock</button>
      {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />

      <Pagination pagination={pagination} onPageChange={handlePageChagne} /> */}
      {/* <TodoForm onSubmit={handleTodoForm} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
    </div>
  );
}

export default App;
