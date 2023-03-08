import React from 'react';
import Booking from './Booking';
import RoomDate from './RoomDate';

/**
 * Render a single room, i.e. single row in a table
 * @param {*} props 
 */
function Room(props) {


    let daysTd = props.dates.map((day, index) => {

        // get all booking for current day
        let bookinksToday = props.bookings.filter(singleBook => {
            let from_date = new Date(singleBook.from_date);
            return (from_date.toDateString() === day.toDateString() && singleBook.room_id === props.room.id) ? true : false;
        });

        // get all booking jsx code for current day
        let bookinksTodayJsx = bookinksToday.map(singleBook => {
            return <Booking book={singleBook} key={singleBook.id} />;
        });

        if(bookinksTodayJsx.length === 0) bookinksTodayJsx = <div style={{
            borderTop: '1px solid #B2BBC9',
            borderLeft: '1px solid #B2BBC9',
            borderBottom: '1px solid #B2BBC9',
            height: '100%',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div>$100.000</div>
            <div style={{
                fontSize: '12px',
                color: '#88909C',
                position: 'relative'
            }}>3</div>
        </div>

        return <RoomDate key={index} day={day} room={props.room} cellWidth={props.cellWidth} i={index}>{bookinksTodayJsx}</RoomDate>
    })

    return (<tr key={props.room.id}>
        <td>
            <div style={{
                backgroundColor: 'white',
                border: '1px solid #B2BBC9',
                borderRight: '0px',
                borderRadius: '12px 0 0 12px',
                height: '100%',
                padding: '15px'
            }}>
                <h6 style={{
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>{props.room.title}</h6>
                <span style={{
                    fontSize: '12px'
                }}>{props.room.category}</span>
            </div>
        </td>
        {daysTd}
    </tr>);

}

export default Room;