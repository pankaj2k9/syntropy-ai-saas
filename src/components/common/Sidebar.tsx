import React from 'react'
import SignOut from '../logout/SignOut'

function Sidebar() {
    return (
        <div className="flex flex-col w-64 h-full bg-gray-100">
            <div className="flex items-center justify-center h-16 shadow-md">
                <h1 className="text-lg font-semibold">MENU</h1>
            </div>
            <div className="flex flex-col py-4 px-4">
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
                    <a href="#" className="flex items-center p-2 hover:bg-gray-200">
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
                <SignOut />
            </div>
        </div>

    )
}

export default Sidebar