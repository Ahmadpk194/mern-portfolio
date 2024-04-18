import { Modal, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd';
import { ReloadData, hideLoading, showLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminCourses = () => {

    const dispatch = useDispatch()
    const { portfolioData } = useSelector(state => state.root)
    const { courses } = portfolioData;

    const [showAddEditModal, setShowEditModal] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
    const [type, setType] = useState('add');


    const onFinishHander = async (values) => {

        try {
            dispatch(showLoading())

            let response;
            if (selectedItemForEdit) {
                response = await axios.post('/api/v1/update-course', { _id: selectedItemForEdit._id, ...values })
            } else {
                response = await axios.post('/api/v1/add-course', values)
            }


            if (response.data.success) {
                dispatch(ReloadData(true));
                setShowEditModal(false);
                dispatch(hideLoading())
                message.success(response.data.message)

            } else {
                message.error(response.data.message)
                dispatch(hideLoading());
            }
        } catch (error) {
            message.error(error.message)
            dispatch(hideLoading());
        }
    }

    const onDelete = async (item) => {
        try {
            dispatch(showLoading())
            const response = await axios.post('/api/v1/delete-course', { _id: item._id })

            if (response.data.success) {
                dispatch(ReloadData(true))
                dispatch(hideLoading())
                message.success(response.data.message)
            } else {
                message.error(response.data.message)
            }
        } catch (error) {
            dispatch(hideLoading())
            message.error(error.message)
        }
    }

    return (
        <div>
            <div className="flex justify-end mb-4">
                <button className="bg-primary rounded-sm px-5 py-2 text-white" onClick={() => {
                    setSelectedItemForEdit(null)
                    setShowEditModal(true);
                }}>Add Course</button>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-2 mob:grid-cols-1 gap-5">
                {courses.map((course, i) => (
                    <div key={i} className="shadow border border-gray-300 p-5 rounded">
                        <img src={course.image} alt="coursectImage" className='h-60 w-full mb-2' />
                        <h1><span className='font-semibold'>Title:</span> {course.title}</h1>
                        <h1>{course.description}</h1>
                        <h1><span className='font-semibold'>Link:</span> {course.link}</h1>
                        <div className="flex">
                        </div>
                        <div className="flex gap-2 mt-6">
                            <button className="bg-primary text-white px-5 py-2 rounded-sm" onClick={() => {
                                setSelectedItemForEdit(course)
                                setShowEditModal(true);
                                setType('edit')
                            }}>Edit</button>
                            <button className="bg-red-500 text-white px-5 py-2 rounded-sm" onClick={() => {
                                onDelete(course)
                            }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {
                (type === 'add' || selectedItemForEdit) && <Modal footer={null} onCancel={() => {
                    setShowEditModal(false);
                    setSelectedItemForEdit(null)
                    setType('edit')
                }} open={showAddEditModal} title={selectedItemForEdit ? "Edit Course" : "Add Course"}>
                    <Form layout="vertical" onFinish={onFinishHander} initialValues={selectedItemForEdit}>
                        <Form.Item name="title" label="Title">
                            <input type="text" placeholder='Title' />
                        </Form.Item>
                        <Form.Item name="image" label="Image Url">
                            <input type="text" placeholder='Image Url' />
                        </Form.Item>
                        <Form.Item name="description" label="Description">
                            <textarea className='py-2' type="text" placeholder='Description' />
                        </Form.Item>
                        <Form.Item name="link" label="Link">
                            <input className='py-2' type="text" placeholder='Link' />
                        </Form.Item>

                        <div className="flex gap-2">
                            <button className="border rounded-sm text-primary px-5 py-2" onClick={() => {
                                setSelectedItemForEdit(null)
                                setShowEditModal(false);
                                setType('edit')
                            }}>Cancel</button>
                            <button className="bg-primary rounded-sm text-white px-5 py-2" >
                                {selectedItemForEdit ? 'Update' : "Add"}
                            </button>
                        </div>
                    </Form>
                </Modal>
            }
        </div>
    )
}

export default AdminCourses