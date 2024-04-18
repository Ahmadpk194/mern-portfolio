import { Modal, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'antd';
import { ReloadData, hideLoading, showLoading } from '../../redux/rootSlice';
import axios from 'axios';

const AdminProjects = () => {

    const dispatch = useDispatch()
    const { portfolioData } = useSelector(state => state.root)
    const { projects } = portfolioData;

    const [showAddEditModal, setShowEditModal] = useState(false)
    const [selectedItemForEdit, setSelectedItemForEdit] = useState(null)
    const [type, setType] = useState('add')

    const onFinishHander = async (values) => {

        
        // const techs = values?.technologies?.split(',')
        // values.technologies = techs;
        

        try {
            dispatch(showLoading())

            let response;
            if (selectedItemForEdit) {
                response = await axios.post('/api/v1/update-project', { _id: selectedItemForEdit._id, ...values })
            } else {
                response = await axios.post('/api/v1/add-project', values)
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
            const response = await axios.post('/api/v1/delete-project', { _id: item._id })

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
                }}>Add Project</button>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-2 mob:grid-cols-1 gap-5 ">
                {projects.map((proj, i) => (
                    <div key={i} className="shadow border border-gray-300 p-5 rounded">
                        <img src={proj.image} alt="projectImage" className='h-60 w-full mb-2' />
                        <h1><span className='font-semibold'>Title:</span> {proj.title}</h1>
                        <h1>{proj.description}</h1>
                        <h1><span className='font-semibold'>Link:</span> {proj.link}</h1>
                        <div className="flex">
                        {proj.technologies.map((tech, i) => (
                            <h1 key={i}>{i>0&&<span>&nbsp;</span>}{tech} | </h1>
                        ))}
                        </div>
                        <div className="flex gap-2 mt-6">
                            <button className="bg-primary text-white px-5 py-2 rounded-sm" onClick={() => {
                                setSelectedItemForEdit(proj)
                                setShowEditModal(true);
                                setType('edit')
                            }}>Edit</button>
                            <button className="bg-red-500 text-white px-5 py-2 rounded-sm" onClick={() => {
                                onDelete(proj)
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
                }} open={showAddEditModal} title={selectedItemForEdit ? "Edit Project" : "Add Experience"}>
                    <Form layout="vertical" onFinish={onFinishHander} initialValues={selectedItemForEdit}>
                        <Form.Item name="title" label="Title">
                            <input type="text" placeholder='Title' />
                        </Form.Item>
                        <Form.Item name="image" label="Image Url">
                            <input type="text" placeholder='Image Url' />
                        </Form.Item>
                        <Form.Item name="technologies" label="Technologies">
                            <input className='py-2' type="text" placeholder='Technologies used' />
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

                {/* {
                    (type === 'edit' ) && <Modal footer={null} onCancel={() => {
                        setShowEditModal(false);
                        setSelectedItemForEdit(null)
                        setType('edit')
                    }} open={showAddEditModal} title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}>
                        <Form layout="vertical" onFinish={onFinishHander} initialValues={selectedItemForEdit}>
                            <Form.Item name="period" label="Period">
                                <input type="text" placeholder='Period' />
                            </Form.Item>
                            <Form.Item name="company" label="Company">
                                <input type="text" placeholder='Company' />
                            </Form.Item>
                            <Form.Item name="title" label="Title">
                                <input type="text" placeholder='Title' />
                            </Form.Item>
                            <Form.Item name="description" label="Description">
                                <textarea className='py-2' type="text" placeholder='Description' />
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
                } */}
        </div>
    )
}

export default AdminProjects