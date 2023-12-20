// import AddProfile from "./AddProfile"
import LogoutButton from "./Logout"
import ProfileDisplay from "./ProfileDisplay"
import ProfileEdit from "./editProfileUpdate"
import ProfileInfo from "./me"

function profile() {
  return (
    <div>
        <ProfileInfo />
        <ProfileDisplay />
        {/* <AddProfile /> */}
        {/* <ProfileUpdate /> */}
        <ProfileEdit/>
        <LogoutButton />
    </div>
  )
}

export default profile