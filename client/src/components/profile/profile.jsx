import LogoutButton from "./Logout"
import ProfileDisplay from "./ProfileDisplay"
import ProfileEdit from "./editProfileUpdate"

function profile() {
  return (
    <div>
        <ProfileDisplay />

        {/* <ProfileUpdate /> */}
        <ProfileEdit/>
        <LogoutButton />
    </div>
  )
}

export default profile