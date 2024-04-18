import React, { useEffect } from 'react'
import Header from '../../components/Header'
import { Tabs, message } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import AdminIntro from './AdminIntro'
import AdminAbout from './AdminAbout'
import Experiences from './Experiences'
import AdminProjects from './AdminProjects'
import AdminCourses from './AdminCourses'
import AdminContact from './AdminContact'
import { useNavigate } from 'react-router-dom'
import AdminSocials from './AdminSocials'

const Admin = () => {

    const navigate = useNavigate()
    useEffect(() => {

        if (!localStorage.getItem('token')) {
            message.error('Please Login to Access Admin panel')
            navigate('/');
        }

    }, [navigate])


    return (
        <div>
            <Header scrollToContact={() => console.log('No')} />
            <div className="py-5 px-44 md:px-20 mob:px-10 ">
                <div className='flex mb-4'>
                    <div>
                        <h1 className='text-3xl sm:text-2xl mob:text-xl'>Portfolio Admin</h1>
                        <hr /> 
                    </div>
                </div>
                <Tabs>
                    <TabPane tab="Intro" key={'1'}>
                        <AdminIntro />
                    </TabPane>
                    <TabPane tab="About" key={'2'}>
                        <AdminAbout />
                    </TabPane>
                    <TabPane tab="Experience" key={'3'}>
                        <Experiences />
                    </TabPane>
                    <TabPane tab="Projects" key={'4'}>
                        <AdminProjects />
                    </TabPane>
                    <TabPane tab="Courses" key={'5'}>
                        <AdminCourses />
                    </TabPane>
                    <TabPane tab="Contacts" key={'6'}>
                        <AdminContact />
                    </TabPane>
                    <TabPane tab="Socials" key={'7'}>
                        <AdminSocials />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default Admin