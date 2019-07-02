export const UPDATE_USER = 'users:updateUser';

export function updateUser(newUser) {
    console.log('updateUser running... ');
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}