"use client";

import React, { useEffect, useState } from 'react';

const TimeDisplay = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 60000); // Update every minute

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return <p className="text-md lg:text-base text-yellow-500">{currentTime}</p>;
}

export default TimeDisplay;

// "use client";

// import React, { useEffect, useState } from 'react';

// const TimeDisplay = () => {
//     const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//         }, 60000); // Update every minute

//         return () => clearInterval(timer); // Cleanup the interval on component unmount
//     }, []);

//     return <p className="text-md lg:text-base text-yellow-500">{currentTime}</p>;
// }

// export default TimeDisplay;