import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = '100%' || 'fit-content' }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0 });
        } else {
            controls.start({ opacity: 0, y: 50 });
        }
    }, [controls, inView]);

    return (
        <div style={{ width: width }} ref={ref} className='w-full' >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: .6, delay:.2 }}
                style={{width: '100%'}}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
