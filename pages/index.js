import Link from "next/link";
import {useUser} from '@auth0/nextjs-auth0/client'; 
export default function Home() {
  
  const { user } = useUser(); //auth0 use react context 

  console.log("user:" , user); 

  return(
    <div>

      <h2>this is the home page </h2>
      <div>
        { !!user ? (
          <div>
           <div>all the user info </div>
            <Link href="/api/auth/logout">Logout</Link>

          </div>
        ): (
        <Link href="/api/auth/login">login</Link>

        )}
      </div>
    </div>


  )
}; 
