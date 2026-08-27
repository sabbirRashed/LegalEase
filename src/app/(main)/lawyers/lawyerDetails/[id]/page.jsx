import React from 'react';

const LawyerDetailsPage = async ({ params }) => {
    const { id } = await params;
    console.log('dynamic-path:', id);
    return (
        <div>
            <h2>Lawyer Details Page.</h2>
        </div>
    );
};

export default LawyerDetailsPage;