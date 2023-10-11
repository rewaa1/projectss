import React from 'react';

const Learn = () => {
    return (
        <div>
            let websiteUrl = prompt("Type in your URL");
            location.href = websiteUrl;
            location.href = websiteUrl || 'http://google.com';
            websiteUrl && (location.href = websiteUrl);
        </div>
    );
};

export default Learn;