import { getUserDetails } from '../../utils/authHandler'

export const addEvent = (event) => {
  //
  const events = JSON.parse(localStorage.getItem('bookingEvents')) || []
  const user = getUserDetails()

  events.push({
    start: event.start,
    end: event.end,
    title: event.title,
    createdBy: user.name,
  })

  localStorage.setItem('bookingEvents', JSON.stringify(events))
}

export const getEvents = () => {
  return JSON.parse(localStorage.getItem('bookingEvents')) || []
}

const defaultEvents = [
  {
    title: 'Booked by Admin',
    start: new Date('2022/12/19 09:30'),
    end: new Date('2022/12/19 10:30'),
    createdBy: 'Admin',
  },
  {
    title: 'Booked by Steve',
    start: new Date('2022/12/20 10:00'),
    end: new Date('2022/12/20 11:00'),
    createdBy: 'Steve',
  },
]

export const setDefaultEvents = () => {
  const events =
    JSON.parse(localStorage.getItem('bookingEvents', defaultEvents)) || []

  if (!events.length) {
    localStorage.setItem('bookingEvents', JSON.stringify(defaultEvents))
  }
}

export const canAddEvent = (event) => {
  const startDate = event.start
  const prevEvents = getEvents()
  const user = getUserDetails()

  const eventsInSameDay = prevEvents.filter((pe) => {
    const d1 = new Date(pe.start)
    return (
      d1.getFullYear() === startDate.getFullYear() &&
      d1.getMonth() === startDate.getMonth() &&
      d1.getDate() === startDate.getDate() &&
      user.name === pe.createdBy
    )
  })
  // return false if 3 or move events available
  return eventsInSameDay.length < 3
}
