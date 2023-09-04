
import { useUser } from '@auth0/nextjs-auth0/client'; 
import Link from 'next/link';
import Image from 'next/image';
export const AppLayout = ({
    chidlren,

}) => {
    const { user } = useUser();

    return (
        <div className='grid grid-cols-[300px_1fr]'>

            <div className='bg-pink-500'>this is the app layout</div>
            
            <div className="bg-cyan-800 flex items-center gap-2 border-t border-t-black/50 h-20 px-2">
            {!!user ? (
                <>
                    <div className="min-w-[50px]">
                        <Image
                            src={user.picture}
                            alt={user.name}
                            height={50}
                            width={50}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="font-bold">{user.email}</div>
                        <Link className="text-sm" href="/api/auth/logout">
                            Logout
                        </Link>
                    </div>
                </>
            ) : (
                <Link href="/api/auth/login">Login</Link>
            )}
        </div>
         </div>
    );
};