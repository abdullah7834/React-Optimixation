import { memo } from "react"


const ProfileCard = ({name}) => {
    console.log("Profile Care Re-rendered")
  return (
    <>
        <h3>{name}</h3>

    </>
  )
}

export default memo(ProfileCard)