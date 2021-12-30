import type { NextPage  } from 'next'
import Head from 'next/head' 

const SignIn:NextPage = () => {
    
    return(
        <div>
           <Head>
               <title>Sign In</title>
           </Head>
           <main>
                <form method="post">
                   <label> Username </label>
                   <input type="text" id="username" name="username"></input>
                   <br></br>
                   <label> Password </label>
                   <input type="password" id="password" name="password"></input>
                   <br></br>
                   <button type="submit" id="login">Log In</button>
               </form>
           </main>
        </div>
    )

}
export default SignIn
