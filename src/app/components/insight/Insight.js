import React from 'react'

const Insight = () => {
    const insights = [
        "20+ Projects Completed",
        "3+ Years of Freelancing",
        "99% Client Satisfaction",
        "20K+ Subscribers",
        "Authored In-Depth Course on Educative",
        "Contributed as a Technical Course Reviewer 📝",
        "Recipient of the Hackernoon Noonies Award 🏆",
    ];

    return (
        <div className='w-full bg-accent dark:bg-accentDark dark:text-dark text-light whitespace-nowrap overflow-hidden'>
            <marquee className="py-3 capitalize gap-2 font-semibold tracking-wider flex items-center justify-center">
                {
                    insights.map((ele, index) => (
                        <span key={index}>{ele} <span className='mx-4 h-15 sm:h-20'>|</span></span>
                    ))
                }
            </marquee>
        </div>
    )
}

export default Insight