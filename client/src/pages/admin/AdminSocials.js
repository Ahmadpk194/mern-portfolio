import { Form, message } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../../redux/rootSlice'
import axios from 'axios'


const AdminSocials = () => {

    const dispatch = useDispatch()

    const {portfolioData} = useSelector(state => state.root);
    console.log('hello',portfolioData)

    const onFinishHandler = async(values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post('/api/v1/update-socials', {
                _id: portfolioData.socials._id,
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
            <Form onFinish={onFinishHandler} layout='vertical' initialValues={portfolioData?.socials}>
                <Form.Item name='linkedin' label="Linkedin">
                    <input type="text" placeholder='Linkedin link' />
                </Form.Item>
                <Form.Item name='github' label="Github">
                    <input type="text" placeholder='Github link' />
                </Form.Item>
                <Form.Item name='twitter' label="Twitter">
                    <input type="text" placeholder='Twitter link' />
                </Form.Item>
                <Form.Item name='facebook' label="Facebook">
                    <input type="text" placeholder='Facebook link' />
                </Form.Item>
                <Form.Item name='whatsapp' label="Whatsapp">
                    <input type="text" placeholder='Whatsapp link' />
                </Form.Item>
                <div className="flex justify-end">
                    <button className="px-8 py-2 bg-primary text-white rounded hover:bg-primary-400">Save</button>
                </div>
            </Form>
        </div>
    )
}

export default AdminSocials