import {ref} from '../config/constants'

export function saveStatus(status) {
    return ref.child(`status/${status.id}`)
        .set({
            statusText: status.text,
            id: status.id
        })
        .then(() => status)
}
