import { Form, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/rootSlice'
import axios from 'axios'


const AdminAbout = () => {

  const dispatch = useDispatch()

  const { portfolioData } = useSelector(state => state.root);

  const onFinishHandler = async (values) => {
    console.log(values)
    try {
      const tempSkills = values.skills[0].split(',');
      values.skills = tempSkills;
      
      dispatch(showLoading());
      const response = await axios.post('/api/v1/update-about', {
        _id: portfolioData.about._id,
        ...values
      })
      dispatch(hideLoading());

      if (response.data.success) {
        message.success(response.data.message)
      } else {
        message.error(response.data.message)
      }

    } catch (error) {
      message.error(error.message)
      dispatch(hideLoading())
    }
  }

  return (
    <div>
      <Form onFinish={onFinishHandler} layout='vertical' initialValues={portfolioData?.about}>
        <Form.Item name='lottieUrl' label="Lottie Url">
          <input type="text" placeholder='Url' />
        </Form.Item>
        <Form.Item name='description1' label="Description 1">
          <textarea type="textarea" placeholder='Description 1' className='pt-2' />
        </Form.Item>
        <Form.Item name='description2' label="Description 2">
          <textarea type="textarea" placeholder='Description 2' className='pt-2' />
        </Form.Item>
        <Form.Item name='skills' label="Skills">
          <input type="text" placeholder='Skills' />
        </Form.Item>
        <div className="flex justify-end">
          <button className="px-8 py-2 bg-primary text-white rounded hover:bg-primary-400">Save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminAbout