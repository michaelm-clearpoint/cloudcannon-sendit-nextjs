import DefaultLayout from '../components/layouts/default';

// pages/MyComponent.jsx
import React from 'react';

const MyComponent = ({page, data}) => {
    // Render your component with server-side data
    return (
        <div>
            <h1>Title: {data.name}</h1>
			<br/>
            <p>{data.description}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    // Fetch data from server
    const res = await fetch(`https://api.github.com/repos/TanStack/query`);
    const data = await res.json();

    // Pass data to the page via props
    return {props: {data}};
}

export default MyComponent;