

import { auth } from "@/auth";
import { handleSignIn, handleSignOut } from "@/lib/auth-actions";

export default async function GoogleAuthSection() {
  const session = await auth();
  const user = session?.user;

  return user ? (
    <>
      <h2>Welcome, {user.name}</h2>
      <form action={handleSignOut}>
        <button type="submit" className="bg-red-500 px-4 py-2 rounded text-white">
          Sign Out
        </button>
      </form>
    </>
  ) : (
    <form action={handleSignIn}>
      <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">
        Sign in with Google
      </button>
    </form>
  );
}
