import React from 'react'
import Image from 'next/image';
import serachLogo from "/public/search-logo.jpg"
import { Button } from '../ui/button';
import { Search } from 'lucide-react';

function SKUlists() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-16">
            <div className="text-left mb-10 w-full">
                <h1 className="text-4xl font-bold mb-2">Parametric Search</h1>
                <p className="text-gray-600">Product Parametric Search</p>
            </div>

            <div className="flex flex-col items-center w-full">
                <div className="flex w-full">
                    <input
                        type="text"
                        placeholder="HES5B-VLW"
                        className="shadow-md focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 mx-4 rounded-md"
                    />
                    <Button>
                        <Search className="mr-2 h-4 w-4" /> Login with Email
                    </Button>
                </div>

                <div className="opacity-50 relative w-32 h-32">
                    <Image
                        src={serachLogo}
                        alt="Syntropy Logo"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>

    )
}

export default SKUlists