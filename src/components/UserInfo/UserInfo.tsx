import { FC } from "react";
import './UserInfo.scss';
 
 
 
 interface IUserInfo {
    username : string;
    onClick?: () => void;
 
}

export const UserInfo : FC<IUserInfo> =({username}) => {
    
        const generateInitials= (username : string) => { 
            return username.split(' ').map((n) => n[0]).join ('').toUpperCase();}

   
    return (
        <div className='userinfo'>
          <div className='userinfo__initials'>{generateInitials(username)}</div>
          <div className='userinfo__name'>
            {username}</div>  
        </div>
        
    )
} 

