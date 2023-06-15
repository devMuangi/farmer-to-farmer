import { UserButton, currentUser } from '@clerk/nextjs/app-beta';

const User =async () => {
  const user = await currentUser();
return(
<div>
  <p>Hello, User: {user.emailAddresses[0]?.emailAddress}</p>
  <UserButton afterSignOutUrl="/"/>
</div> 
)}

export default User;