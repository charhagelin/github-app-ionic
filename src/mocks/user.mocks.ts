import { User } from '../models/user.interface';

const UserList: User[] = [
    {
        name: 'Bill',
        company: 'H&M',
        location: 'Sydney, AU',
        bio: 'so much to learn in so little time. It will drive me mad',
        avatar_url: 'http://www.codrosu.ro/wp-content/uploads/2010/01/avatar-fantomitza-funny.png',
        email: 'bill@billius.com' 
    },
       {
        name: 'Bull',
        company: 'TopSHop',
        location: 'Melbourne, AU',
        bio: 'tho shall learn react and ionic in a few days, it shall be fun',
        avatar_url: 'http://i34.tinypic.com/33lczk5.jpg',
        email: 'bull@bullius.com' 
    }
]

export const USER_LIST = UserList;