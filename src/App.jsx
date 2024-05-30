import './index.css'

function App() {
    return (
        <main className='bg-gray-50 text-gray-900z`'>
            <header className="bg-white">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold">Devvrat Singh Rathod</h1>
                        <div>
                            <a href="mailto:devvatsingh.cse21@aii.ac.in" className="text-blue-500 hover:underline">Email</a> |
                            <a href="https://linkedin.com/in/devvrat-singh-rathod" className="text-blue-500 hover:underline">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </header>
            <hr />
            <div className="container mx-auto px-4 py-8">
                {/* <!-- Education Section --> */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Education</h2>
                    <div className="bg-white rounded-lg p-4 pb-0">
                        <h3 className="text-xl font-bold">Adani University</h3>
                        <p>B.E. in CSE (AI - ML)</p>
                        <p>2021 – 2025 | CGPA: 8.58</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                        <h3 className="text-xl font-bold">K.V. No.1 Shahibaug Ahmedabad</h3>
                        <p>2009 – 2021 | 92.00% (Class XII)</p>
                    </div>
                </section>
                <hr />

                {/* <!-- Experience Section --> */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Experience</h2>
                    <div className="bg-white rounded-lg p-4 pb-0">
                        <h3 className="text-xl font-bold">VMuk Solutions Pvt. Ltd.</h3>
                        <p>Ahmedabad, India (Onsite) | May 2023 – July 2023</p>
                        <ul className="list-disc list-inside">
                            <li>Worked on research and planning initiatives for a state-of-the-art CCTV manufacturing facility.</li>
                            <li>Conducted extensive studies on robotic technologies and their applications in manufacturing processes.</li>
                        </ul>
                    </div>
                </section>
                <hr />
                {/* <!-- Projects Section --> */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Projects</h2>
                    <div className="bg-white rounded-lg p-4 pb-0">
                        <h3 className="text-xl font-bold">MATCHMAKER OR WHAT</h3>
                        <p> <span className='font-semibold text-lg'> Technologies </span>: React, Express, MongoDB, Node.js, Socket.io</p>
                        <p> <span className='font-semibold text-lg'> Description </span>: Match Maker is a web-based platorm designed to simplify and enhance the hackathon experience by facilitating efficient
team formation. Our platorm utilizes advanced matchmaking algorithms to connect participants with compatible
teammates based on their skills, interests, and project preferences.</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 pb-0 mt-4">
                        <h3 className="text-xl font-bold">LOCALLY YOURS</h3>
                        <p> <span className='font-semibold text-lg'> Technologies </span>: React, Express, Supabase, Clerk, TypeScript </p>
                        <p> <span className='font-semibold text-lg'> Description </span>: A news aggregator that allows users to view news from their local area and customize their news feed.</p>
                    </div>
                    <div className='bg-white rounded-lg p-4 pb-0 mt-4'>
                        <h3 className="text-xl font-bold">BOOKOHUB</h3>
                        <p> <span className='font-semibold text-lg'> Technologies </span>: Next.js, Clerk, MongoDB, Material UI </p>
                        <p> <span className='font-semibold text-lg'> Description </span>: An online platform uniting book enthusiasts to lend and borrow books, fostering a culture of sharing among avid readers.</p>
                    </div>
                    {/* <div className="bg-white rounded-lg p-4 pb-0 mt-4">
                        <h3 className="text-xl font-bold">BOOKOHUB</h3>
                        <p>Technologies: Next.js, Clerk, MongoDB, Material UI</p>
                        <p>An online platform uniting book enthusiasts to lend and borrow books, fostering a culture of sharing among avid readers.</p>
                    </div> */}
                </section>
                <hr />

                {/* <!-- Hackathons Section --> */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Hackathons</h2>
                    <div className="bg-white rounded-lg p-4 pb-0">
                        <ul className="list-disc list-inside">
                            <li className='flex justify-between'>
                                <span>
                                    HackNUthon 2024 | 1st Runner Up 
                                </span>
                                <span>
                                    Nirma University | 19 April 2024
                                </span>
                            </li>
                            {/* <li>HackThisFall 3.0 | Winner of Postman Track | Karnavati University | 6 February 2024</li>
                            <li>Dotslash 7.0 | Top 8 | SVNIT Surat | 28 January 2024</li>
                            <li>AU-IQM Hackathon 2023 | 1st Runner Up (Moderate) | AU | 29 July 2023</li>
                            <li>HackNUthon 2023 | Top 5 | Nirma University | 30 April 2023</li>
                            <li>AU-IQM Hackathon 2022 | Top 5 | AU | 13 November 2022</li> */}
                            <li className='flex justify-between'>
                                <span> HackThisFall 3.0 | Winner of Postman Track </span>
                                <span> Karnavati University | 6 February 2024 </span>
                            </li>
                            <li className='flex justify-between'>
                                <span> Dotslash 7.0 | Top 8 </span>
                                <span> SVNIT Surat | 28 January 2024 </span>
                            </li>
                            <li className='flex justify-between'>
                                <span> AU-IQM Hackathon 2023 | 1st Runner Up (Moderate) </span>
                                <span> AU | 29 July 2023 </span>
                            </li>
                            <li className='flex justify-between'>
                                <span> HackNUthon 2023 | Top 5 </span>
                                <span> Nirma University | 30 April 2023 </span>
                            </li>
                            <li className='flex justify-between'>
                                <span> AU-IQM Hackathon 2022 | Top 5 </span>
                                <span> AU | 13 November 2022 </span>
                            </li>

                        </ul>
                    </div>
                </section>
                <hr />

                {/* <!-- Leadership and Activities Section --> */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold">Leadership and Activities</h2>
                    <div className="bg-white rounded-lg p-4 pb-0">
                        <h3 className="text-xl font-bold">Vice Chair at ACM Student Chapter</h3>
                        <p>February 2024 - Present</p>
                        <ul className="list-disc list-inside">
                            <li>Assisting in the leadership and coordination of activities within the ACM Student Chapter.</li>
                            <li>Leading initiatives to foster a vibrant and inclusive community for computing enthusiasts.</li>
                        </ul>
                    </div>
                </section>
                <hr />

                {/* <!-- Skills Section --> */}
                <section>
                    <h2 className="text-2xl font-semibold">Skills</h2>
                    <div className="bg-white rounded-lg p-4 pb-0">
                        <h3 className="text-xl font-bold">Languages</h3>
                        <p>Python, JavaScript, C++, C, Java, HTML, CSS</p>
                        <h3 className="text-xl font-bold mt-4">Frameworks</h3>
                        <p>Node.js, React, Next.js, Express.js, Tailwind CSS</p>
                        <h3 className="text-xl font-bold mt-4">Developer Tools</h3>
                        <p>Git, GitHub, VS Code, Postman, SQL (Oracle), MongoDB, Supabase</p>
                    </div>
                </section>
            </div>

            {/* <!-- Footer --> */}
            <footer className="bg-white mt-8">
            <hr />

                <div className="container mx-auto px-4 py-4 text-center">
                    <p>&copy; 2024 Devvrat Singh Rathod. All rights reserved.</p>
                </div>
            </footer>
        </main>
        // <main className=' h-screen font-'>
        //     <header className='w-fit m-auto text-4xl font-bold'> Devvrat Singh Rathod </header>
        //     <div className='h-screen'>

        //     </div>

        //     <footer className='text-2xl font-medium bg-black text-gray-200 flex gap-24 p-10'>
        //         <div>
        //             Contact Me
        //             <ul className='text-base italic text-blue-700 underline'>
        //                 <li> <a href='mailto:rathoddevvratsingh777@gmail.com'> rathoddevvratsingh777@gmail.com </a> </li>
        //                 <li> <a href='tel:+919429912639'> +91 9429912639 </a> </li>
        //             </ul>
        //         </div>
        //         <div>
        //             <h1 className=''> Socials </h1>
        //             <ul className='text-base italic text-blue-700 underline'>
        //                 <li> <a href='https://www.linkedin.com/in/devvrat-singh-rathod/' target='_blank'>  LinkedIn </a> </li>
        //                 <li> <a href='https://www.leetcode.com/u/Devvrat1010/' target='_blank'> LeetCode </a> </li>
        //                 <li> <a href='https://www.github.com/Devvrat1010/' target='_blank'> Github </a> </li>
        //                 <li> <a href='https://www.twitter.com/Devvrat1010/' target='_blank'> Twitter </a> </li>
        //             </ul>
        //         </div>
        //     </footer>

        // </main>
    )
}

export default App
