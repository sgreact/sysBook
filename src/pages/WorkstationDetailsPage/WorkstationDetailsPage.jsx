import React, { useState, useMemo } from 'react'
import { Scheduler } from '@aldabil/react-scheduler'
import adminLayout from '../../hoc/adminLayout'
import { getEvents, addEvent, canAddEvent } from './workstationhelpers'

const WorkstationDetailsPage = () => {
  const [error, setError] = useState('')

  const BookedEvents = useMemo(() => getEvents(), [error])

  return (
    <>
      <h1>Workstation</h1>
      {error && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          {error}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setError('')}
          ></button>
        </div>
      )}
      <Scheduler
        view="week"
        week={{
          weekDays: [0, 1, 2, 3, 4],
          weekStartOn: new Date().getDay(),
          startHour: 6,
          endHour: 18,
          step: 30,
          navigation: true,
        }}
        onConfirm={(event) => {
          if (canAddEvent(event)) {
            addEvent(event)
          } else {
            setError('Cannot book more than 3 times')
            window.scrollTo(500, 0)
          }
          return event
        }}
        events={BookedEvents.map((b, idx) => ({
          ...b,
          start: new Date(b.start),
          end: new Date(b.end),
          event_id: idx + 1,
        }))}
      />
    </>
  )
}

export default adminLayout(WorkstationDetailsPage)
