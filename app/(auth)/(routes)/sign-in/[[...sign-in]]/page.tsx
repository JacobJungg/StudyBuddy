/**
 * StudyBuddy Jacob Jung
 * When user has clicked sign up on initial form
 * 
 * @param url sign-in
 * @return SignIn page, Clerk
 */

import { SignIn } from "@clerk/nextjs";


export default function Page() {
  return <SignIn />;
}