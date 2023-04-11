import React, {useState} from 'react';
import {Overlay} from './Overlay';


export function OverlayManger(props) {
    let [isOpen, setIsOpen] = useState(false);
    let [selectedContent, setSelectedContent] = useState('content1');

    const handleContentChange = (content) => {
        setSelectedContent(content);
        toggleOverlay();
    };
    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div>
            <div id={'imageGrid'} className={'col90'}>
                <div onClick={()=> {handleContentChange('content0')}} onKeyPress={()=> {handleContentChange('content0')}} tabIndex={0}>
                    <img src={props.content.container[0].imageURL}  alt={' '}/>
                    <p>{props.content.container[0].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content1')}} onKeyPress={()=> {handleContentChange('content1')}} tabIndex={0}>
                    <img src={props.content.container[1].imageURL}  alt={' '}/>
                    <p>{props.content.container[1].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content2')}} onKeyPress={()=> {handleContentChange('content2')}} tabIndex={0}>
                    <img src={props.content.container[2].imageURL}  alt={' '}/>
                    <p>{props.content.container[2].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content3')}} onKeyPress={()=> {handleContentChange('content3')}} tabIndex={0}>
                    <img src={props.content.container[3].imageURL}  alt={' '}/>
                    <p>{props.content.container[3].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content4')}} onKeyPress={()=> {handleContentChange('content4')}} tabIndex={0}>
                    <img src={props.content.container[4].imageURL}  alt={' '}/>
                    <p>{props.content.container[4].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content5')}} onKeyPress={()=> {handleContentChange('content5')}} tabIndex={0}>
                    <img src={props.content.container[5].imageURL}  alt={' '}/>
                    <p>{props.content.container[5].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content6')}} onKeyPress={()=> {handleContentChange('content6')}} tabIndex={0}>
                    <img src={props.content.container[6].imageURL}  alt={' '}/>
                    <p>{props.content.container[6].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content7')}} onKeyPress={()=> {handleContentChange('content7')}} tabIndex={0}>
                    <img src={props.content.container[7].imageURL}  alt={' '}/>
                    <p>{props.content.container[7].partyName}</p>
                </div>
                <div onClick={()=> {handleContentChange('content8')}} onKeyPress={()=> {handleContentChange('content8')}} tabIndex={0}>
                    <img src={props.content.container[8].imageURL} alt={' '}  />
                    <p>{props.content.container[8].partyName}</p>
                </div>
            </div>
            <Overlay isOpen={isOpen} onClose={toggleOverlay} >
                {selectedContent === 'content0' && <div><h1>{props.content.container[0].partyResponseHeadline}</h1><h4>{props.content.container[0].partyResponseDate}</h4><p>{props.content.container[0].partyResponseText}</p></div>}
                {selectedContent === 'content1' && <div><h1>{props.content.container[1].partyResponseHeadline}</h1><h4>{props.content.container[1].partyResponseDate}</h4><p>{props.content.container[1].partyResponseText}</p></div>}
                {selectedContent === 'content2' && <div><h1>{props.content.container[2].partyResponseHeadline}</h1><h4>{props.content.container[2].partyResponseDate}</h4><p>{props.content.container[2].partyResponseText}</p></div>}
                {selectedContent === 'content3' && <div><h1>{props.content.container[3].partyResponseHeadline}</h1><h4>{props.content.container[3].partyResponseDate}</h4><p>{props.content.container[3].partyResponseText}</p></div>}
                {selectedContent === 'content4' && <div><h1>{props.content.container[4].partyResponseHeadline}</h1><h4>{props.content.container[4].partyResponseDate}</h4><p>{props.content.container[4].partyResponseText}</p></div>}
                {selectedContent === 'content5' && <div><h1>{props.content.container[5].partyResponseHeadline}</h1><h4>{props.content.container[5].partyResponseDate}</h4><p>{props.content.container[5].partyResponseText}</p></div>}
                {selectedContent === 'content6' && <div><h1>{props.content.container[6].partyResponseHeadline}</h1><h4>{props.content.container[6].partyResponseDate}</h4><p>{props.content.container[6].partyResponseText}</p></div>}
                {selectedContent === 'content7' && <div><h1>{props.content.container[7].partyResponseHeadline}</h1><h4>{props.content.container[7].partyResponseDate}</h4><p>{props.content.container[7].partyResponseText}</p></div>}
                {selectedContent === 'content8' && <div><h1>{props.content.container[8].partyResponseHeadline}</h1><h4>{props.content.container[8].partyResponseDate}</h4><p>{props.content.container[8].partyResponseText}</p></div>}
            </Overlay>
        </div>
    )
}