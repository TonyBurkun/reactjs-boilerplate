import React from 'react'
import AvatarGenerator from 'react-avatar-generator';


const UserCard = (props) => {
    const {id, name, last_name, birthday} = props.userData;
    return (
        <div className='user-card'>
            <div className='avatar'>
                <AvatarGenerator
                    colors={['#333', '#222', '#ccc']}
                    backgroundColor="#000"
                />
            </div>
            <div className='card-content'>
                <ul>
                    <li>
                        <span>UserID: </span>{id}
                    </li>
                    <li>
                        <span>Name:</span> {name}
                    </li>
                    <li>
                        <span>Last name:</span> {last_name}
                    </li>
                    <li>
                        <span>Birthday:</span> {birthday}
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default UserCard