import React from 'react'
import SignOut from '../logout/SignOut'

function Sidebar() {
    return (
        <div className="flex flex-col w-64 h-full pb-16 justify-between bg-gray-100">

            <div className="flex flex-col py-4 px-4">
                <div className="flex items-center justify-center h-16">
                    <h1 className="text-lg font-semibold">MENU</h1>
                </div>
                <a href="#" className="flex items-center p-2 hover:bg-gray-200">
                    <span className="text-lg">
                        <i className="fas fa-search"></i>
                    </span>
                    <span className="ml-3">Product Search</span>
                    <span className="ml-auto">
                        <i className="fas fa-chevron-down"></i>
                    </span>
                </a>
                <div className="ml-8">
                    <a href="#" className="flex items-center p-2 px-8 w-fit bg-white rounded-lg">
                        by SKU
                    </a>
                    <a href="#" className="flex items-center p-2 hover:bg-gray-200">
                        by Natural Language
                    </a>
                </div>
                <a href="#" className="flex items-center p-2 hover:bg-gray-200">
                    <i className="fas fa-users"></i>
                    <span className="ml-3">Vendors</span>
                </a>
                <a href="#" className="flex items-center p-2 hover:bg-gray-200">
                    <i className="fas fa-comments"></i>
                    <span className="ml-3">Datasheets Chat</span>
                </a>
                <a href="#" className="flex items-center p-2 hover:bg-gray-200">
                    <i className="fas fa-image"></i>
                    <span className="ml-3">Reverse Image Search</span>
                </a>

            </div>
            <div className="flex items-center justify-center h-16">
                <SignOut />
            </div>
        </div>

    )
}

export default Sidebar