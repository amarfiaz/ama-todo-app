const TOGGLE_TASK = 'TOGGLE_TASK';
// const CREATE_TASK = 'CREATE_TASK';
// const DELETE_TASK = 'DELETE_TASK';

export function taskAction(string) {
    return {
        type: TOGGLE_TASK,
        task: string
    }
}