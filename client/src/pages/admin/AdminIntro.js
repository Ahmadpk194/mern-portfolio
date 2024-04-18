import { Form, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/rootSlice'
import axios from 'axios'


const AdminIntro = () => {

    const dispatch = useDispatch()

    const {portfolioData} = useSelector(state => state.root);

    const onFinishHandler = async(values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post('/api/v1/update-intro', {
                _id: portfolioData.intro._id,
                ...values
            })
            dispatch(hideLoading())
            if(response.data.success){
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
            <Form onFinish={onFinishHandler} layout='vertical' initialValues={portfolioData?.intro}>
                <Form.Item name='logo' label="Logo">
                    <input type="text" placeholder='Logo' />
                </Form.Item>
                <Form.Item name='welcomeText' label="Welcome Text">
                    <input type="text" placeholder='intro' />
                </Form.Item>
                <Form.Item name='firstName' label="First Name">
                    <input type="text" placeholder='First Name' />
                </Form.Item>
                <Form.Item name='lastName' label="Last Name">
                    <input type="text" placeholder='Last Name' />
                </Form.Item>
                <Form.Item name='caption' label="Caption">
                    <input type="text" placeholder='Caption' />
                </Form.Item>
                <Form.Item name='description' label='Description'>
                    <textarea className='py-2' type="text" placeholder='Description' />
                </Form.Item>
                <div className="flex justify-end">
                    <button className="px-8 py-2 bg-primary text-white rounded hover:bg-primary-400">Save</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminIntro