import type { NextPage } from 'next'
import Layout from '../components/Layout/Layout'
import TodoList from '../components/TodoList/TodoList'


const Home: NextPage = () => {
  return (
    <Layout>
     <TodoList/>
    </Layout>
  )
}

export default Home
