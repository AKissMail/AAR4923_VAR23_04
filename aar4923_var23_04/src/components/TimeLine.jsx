import timeLineElement from '../data/timelineElement'
import {verticalTiemeline, verticalTiemelineElement} from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"


export function TimeLine() {
    return (
        <div>
            <p>Hallo</p>
        <verticalTiemeline>
            {
               timelineElement.map(element => {
                   return(
                       <verticalTiemelineElement
                       key={element.key}
                       date={ element.date}
                       icon
                       >
                       </verticalTiemelineElement>
                   )
               })
            }
        </verticalTiemeline>
    </div>
    );

}