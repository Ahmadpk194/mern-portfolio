import React from 'react';

const CodeSection = ({ code, copyText }) => {
    return (
        <div className="code-section mob:w-full mob:w-[22rem]">
            <div className='h-[12%] mob:h-[14%] flex items-center justify-between px-4 w-full bg-primary-300 absolute top-0 left-0 text-[1rem] pl-2 text-gray-500 '><span className='text-xl'>Contact Details</span> <button onClick={copyText}> <i class="ri-file-copy-2-line text-xl"></i> </button> </div>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeSection;