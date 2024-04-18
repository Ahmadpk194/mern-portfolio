import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import About from './About'
import Contact from './Contact'
import Courses from './Courses'
import Experiences from './Experiences'
import Footer from './Footer'
import Intro from './Intro'
import LeftSide from './LeftSide'
import Projects from './Projects'
import Reveal from '../../utilities/Reveal'

const Home = ({ scrollToContact, contactRef }) => {


    const { portfolioData } = useSelector(state => state.root)

    return (
        <div >
            <Header scrollToContact={scrollToContact} />
            {portfolioData && (
                <div className='bg-primary px-44 md:px-32 md3:px-10 mob:px-4'>
                    <Reveal>
                        <Intro />
                    </Reveal>
                    <Reveal>
                        <About />
                    </Reveal>
                    <Reveal>
                        <Experiences />
                    </Reveal>
                    <Reveal>
                        <Projects />
                    </Reveal>
                    <Reveal>
                        <Courses />
                    </Reveal>
                    <Reveal>
                        <Contact contactRef={contactRef} />
                    </Reveal>
                    <Footer />
                    <LeftSide />
                </div>
            )}
        </div>
    )
}

export default Home