import Link from "next/link";
import {useUser} from '@auth0/nextjs-auth0/client'; 
import Image from "next/image";
export default function Home() {
  
  const { user } = useUser(); //auth0 use react context 

  console.log("user:" , user); 

  return(
    <div>

      <h2>this is the home page </h2>
      <div>
        { !!user ? (
          <div>
           <div>
              <Image
                src={user.picture}
                alt={user.name}
                height={50}
                width={50} />
              
              <div> {user.email} </div> 
              
              
            </div>

            
            
            <Link href="/api/auth/logout">Logout</Link>

          </div>
        ): (
        <Link href="/api/auth/login">login</Link>

        )}
      </div>
    </div>


  )
}; 
