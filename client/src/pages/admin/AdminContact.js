import { Form, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/rootSlice'
import axios from 'axios'


const AdminContact = () => {

    const dispatch = useDispatch()

    const {portfolioData} = useSelector(state => state.root);

    const onFinishHandler = async(values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post('/api/v1/update-contact', {_id: portfolioData.contacts._id, ...values})
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
            <Form onFinish={onFinishHandler} layout='vertical' initialValues={portfolioData?.contacts}>
                <Form.Item name='name' label="Name">
                    <input type="text" placeholder='Name' />
                </Form.Item>
                <Form.Item name='gender' label="Gender">
                    <input type="text" placeholder='Gender' />
                </Form.Item>
                <Form.Item name='age' label="Age">
                    <input defaultValue={'null'} type="text" placeholder='Age' />
                </Form.Item>
                <Form.Item name='email' label="Email">
                    <input type="text" placeholder='Email' />
                </Form.Item>
                <Form.Item name='mobile' label="Mobile">
                    <input type="text" placeholder='Mobile' />
                </Form.Item>
                <Form.Item name='address' label="Address">
                    <input type="text" placeholder='Address' />
                </Form.Item>

                <div className="flex justify-end">
                    <button className="px-8 py-2 bg-primary text-white rounded hover:bg-primary-400">Save</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminContact