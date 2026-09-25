import React from 'react';

const ClientExperience = () => {
    return (
        <div className="mx-auto my-15 w-full max-w-7xl md:my-24 border border-green-500 flex justify-between items-center p-3 sm:p-6">
            <div className='border flex-2'>
                <span className='uppercase text-xs font-semibold text-blue-600 trackingwider border-0 border-l-2 border-l-blue-600 pl-2 py-1'>client experiences</span>
                <h2 className='mt-2 text-2xl md:text-3xl font-bold text-slate-900'>What Our Clients Say</h2>
                <p className='text-slate-500 mt-3 leading-7'>Real experiences from clients who connected with legal professionals through LegalEase.</p>

                <div className="mt-6 ">
                    <span className="text-sm font-medium text-slate-600">
                        ✓ Verified client feedback
                    </span>
                </div>
            </div>

            <div className='border flex-3'>
                review card
            </div>
        </div>
    );
};

export default ClientExperience;