import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'; 
import { AppLayout } from '../../components/AppLayout';

export default function NewPost() {
  return (
    <div>
      <h2> new post pagfe </h2>
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