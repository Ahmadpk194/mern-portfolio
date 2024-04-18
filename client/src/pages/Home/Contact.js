import React, { useRef } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import CodeSection from './CodeSection';

const Contact = ({ contactRef }) => {
    const textRef = useRef(null);

    const { portfolioData } = useSelector(state => state.root)

    const { contacts } = portfolioData;

    const copyText = () => {
        const range = document.createRange();
        range.selectNode(textRef.current);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Details Copied!');
    };

    const contactsJSX = (
        <div className="flex flex-col text-xl mob:text-[18px]" ref={textRef} >
            <div className="text-gray-200">{'{'}</div>
            {Object.keys(contacts).map((key, i) => (
                key === '_id' ? '' : (
                    <h1 key={i} className='ml-6 mob:ml-4'>
                        <span className="text-gray-200">{key} : </span>
                        <span className="text-gray-200">{contacts[key]}</span>
                    </h1>
                )
            ))}
            <div className="text-gray-200">{'}'}</div>
        </div>
    );

    return (
        <div className='mt-28 mob:mt-20 flex w-full items-center justify-between mb-20 sm:flex-col' ref={contactRef}>

            <div className='sm:w-full'>
                <SectionTitle title={'Say Hello'} />

                <div className="flex sm:flex-col items-center justify-between">
                    <div className="flex flex-col mob:w-[22rem] text-xl">
                        <CodeSection copyText={copyText} code={contactsJSX} />
                    </div>
                </div>
            </div>

            <div className='w-1/3 sm:w-full sm:mt-10 mob:w-full mob:mt-10'>
                <SectionTitle title={'Contact me'} />
                {/* <lottie-player src="https://lottie.host/53e2475e-9a39-4ea2-8265-5c6dcd599773/irtxGW6dHH.json" background="##FFFFFF" speed="1" loop autoplay direction="1" mode="normal"></lottie-player> */}
                <div>
                    <form className="flex flex-col space-y-4">
                        <input className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white" type="text" name="name" placeholder="Your Full Name" required autoComplete="off" />
                        <input className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white" type="email" name="email" placeholder="Your Email" required autoComplete="off" />
                        <textarea className="text-md border-transparent rounded-lg block w-full p-2.5 bg-[#171f38] placeholder-gray-400 text-white" name="message" placeholder="Your Message" required rows="4" autoComplete="off"></textarea>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact