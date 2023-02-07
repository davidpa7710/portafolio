import React from 'react'
import './Content_card.css'

function Content_card() {
    return (
        <>
            <div className="min-h-screen w-full bg-gray-300">
                <div className="max-w-screen-md mx-auto px-10 pt-20">
                    <div className="bg-white md:h-48 rounded-lg shadow-md flex flex-wrap flex-col-reverse md:flex-col">
                        <div className="w-full md:w-1/2 p-4">
                            <img src="https://www.mcdonalds.com/content/dam/usa/nfl/assets/nav/arches-logo_108x108.jpg" alt="" className="w-8" />
                            <h3 className="text-3xl font-bold">Fast Food &amp; Cola</h3>
                            <p>Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats or DoorDash.</p>
                        </div>
                        <div className="w-full md:w-1/2 p-4 md:p-0">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" alt="" className="w-64 mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content_card
