import React, {useContext} from 'react'
import UserContext from '../assets/context/userContext'

function Profile() {
    const {User} = useContext(UserContext)
    
    if (!User) return <div>please login</div>

    return <div>Welcome {User.username}</div>
}

export default Profile