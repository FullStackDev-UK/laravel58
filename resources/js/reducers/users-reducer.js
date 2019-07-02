import { UPDATE_USER } from '../actions/users-actions';

export default function usersReducer(state = '', { type, payload }) {
    console.log('usersReducer running... ');
    switch (type) {
        case UPDATE_USER:
            return payload.user;
        default:
            return 'Unset';
    }
}