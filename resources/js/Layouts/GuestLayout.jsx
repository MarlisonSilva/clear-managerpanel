import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="bg-gray-100">        
            <div className="container">
                <Link href="/" className='d-flex justify-content-center mt-2'>
                    <ApplicationLogo className="w-25 h-25"/>
                </Link>
                <div className="d-flex justify-content-center">
                    <div className="card" style={{ width: "650px" }}>                    
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}
