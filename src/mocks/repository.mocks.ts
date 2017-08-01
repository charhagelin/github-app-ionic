import { Repository } from '../models/repository.interface';
import { USER_LIST } from './user.mocks';

const repositoryList: Repository[] = [
    {
        name: 'ionic 3 camera',
        description: 'this repository shows the usage of the ionic 3 camera and its specs',
        owner: USER_LIST[0]
    },
      {
        name: 'ionic 3 SMS',
        description: 'this repository shows the usage of the ionic 3 SMS and its specs',
        owner: USER_LIST[0]
    },
      {
        name: 'ionic 3 geolocation',
        description: 'this repository shows the usage of the ionic 3 geolocation and its specs',
        owner: USER_LIST[1]
    },
      {
        name: 'ionic 3 vibration',
        description: 'this repository shows the usage of the ionic 3 vibration and its specs',
        owner: USER_LIST[1]
    },
];

export const REPOSITORY_LIST = repositoryList;