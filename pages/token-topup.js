import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function TokenTopup() {
  return (
    <div>
      <h2>this is the token top up page </h2>
    </div>
  )
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {
      test:'this is a test',
    },
  }
});