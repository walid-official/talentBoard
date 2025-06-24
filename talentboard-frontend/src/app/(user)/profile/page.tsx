
// import {auth, signIn,signOut } from "@/auth"

import GoogleAuthSection from "@/app/components/google/GoogleAuthSection";

 
// export default async function SignIn() {
//     const session = await auth();
//     console.log(session)
//     const user = session?.user
//   return user ? (
//     <>
//     <h2>WElcome To {user?.name}</h2>
//       <form
//       action={async () => {
//         "use server"
//         await signOut()
//       }}
//     >
//       <button type="submit" className="">sign out</button>
//     </form>
//     </>

//   ) : (
//     <>
//      <form
//          action={async () => {
//             "use server"
//             await signIn("google")
//         }}
//         >
//         <button type="submit">Signin with Google</button>
//     </form>
//     </>
//   )
// } 

export default async function SignIn() {
    (
        <>
          <GoogleAuthSection />
        </>
    )
}