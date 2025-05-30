'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export const GoogleLogin = () =>  {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <button className="cursor-pointer" onClick={() => signIn()}>Sign in</button>
      )}
    </div>
  );
}
