import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'; 
import { AppLayout } from '../../components/AppLayout/AppLayout';

export default function NewPost(props) {

  const handleClick = async () => {
    console.log('New post props : ', props); 
    const response = await fetch(`/api/generatePost`, {
      method: "POST"
    }); 
    const json = await response.json(); 
    console.log("RESULT:", json);
  }
  return (
    <div>
      <h2> new post page </h2>
      <button className='btn' onClick={handleClick}>
        Generate
      </button>
    </div>
  )
};

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};


export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      test:'this is a test',
    },
  }
});