import data from '../../notifications.json'


export default function getAllNotificationsByUser(userId) {
    const res = data.filter(data => data.author.id === userId)
    return res.map(res => res.context)
}
