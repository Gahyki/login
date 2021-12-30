

const tryLogin = () => {
    



}


const getCredientials = (form: HTMLFormElement) => {
   const formData = new FormData(form);
   const uname = formData.get("username");
   const pword = formData.get("password");
   return {
       uname,
       pword
   }

}; 


export default tryLogin
