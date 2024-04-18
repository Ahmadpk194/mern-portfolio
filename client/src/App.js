import { Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Home from './pages/Home/Home';
import { useEffect, useRef } from 'react';
import Loader from './pages/Home/Loader';
import axios from 'axios'
import { ReloadData, hideLoading, setPortfolioData, showLoading } from './redux/rootSlice';
import Admin from './pages/admin';
import Login from './pages/admin/Login';
import Blogs from './pages/Blogs/Blogs';
import SignUp from './pages/admin/SignUp';
import NotFound from './pages/Home/NotFound';
import { message } from 'antd';

function App() {

  const { loading, reloadData } = useSelector(state => state.root)
  const dispatch = useDispatch()


  const getPortfolioData = async () => {
    try {
      dispatch(showLoading())
      const response = await axios.get('/api/v1/get-portfolio-data')

      dispatch(setPortfolioData(response.data))
      dispatch(ReloadData(false))
      dispatch(hideLoading())

    } catch (error) {
      message.error(error.message)
    }
  }

  useEffect(() => {
    // if(!portfolioData || reloadData){
      getPortfolioData();
    // }
  }, [ reloadData]);


  // Scroll to Contact
  const contactRef = useRef(null);

    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


  return (
    <>
      {loading ? <Loader /> : <Routes>
        <Route path='/' element={<Home contactRef={contactRef} scrollToContact={scrollToContact} />} exact></Route>
        <Route path='/admin' element={<Admin />} exact></Route>
        <Route path='/admin-login' element={<Login />} exact></Route>
        <Route path='/admin-signup' element={<SignUp />} exact></Route>
        <Route path='/blogs' element={<Blogs />} exact></Route>
        <Route path='/*' element={<NotFound />} exact></Route>
      </Routes>}
    </>
  );
}

export default App;
