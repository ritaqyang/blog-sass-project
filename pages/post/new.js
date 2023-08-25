import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import React from 'react'

export default function NewPost() {
  return (
    <div>
      <h2> new post pagfe </h2>
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