import React from 'react'

function ChatSidebar() {
    return (
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b">
                <span className="font-bold text-gray-700">+ New Chat</span>
                <span className="text-gray-400">03:32 H</span>
            </div>
            <ul className="divide-y">
                <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">Locations</span>
                    <span className="text-xs text-gray-500">03:00 H</span>
                </li>
                <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">Temperature for Operations</span>
                    <span className="text-xs text-gray-500">02:20 H</span>
                </li>
                <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">Locations</span>
                    <span className="text-xs text-gray-500">03:00 H</span>
                </li>
                <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">Temperature for Operations</span>
                    <span className="text-xs text-gray-500">02:20 H</span>
                </li>
                <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">Locations</span>
                    <span className="text-xs text-gray-500">03:00 H</span>
                </li>
                <li className="px-4 py-3 flex justify-between items-center hover:bg-gray-50 cursor-pointer">
                    <span className="text-sm font-medium text-gray-800">Temperature for Operations</span>
                    <span className="text-xs text-gray-500">02:20 H</span>
                </li>
            </ul>
        </div>
    );

}

export default ChatSidebar