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
                    <img src={props.content.container[0].imageURL}  alt={props.content.container[0].partyName}  title={props.content.container[0].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content1')}} onKeyPress={()=> {handleContentChange('content1')}} tabIndex={0}>
                    <img src={props.content.container[1].imageURL}   alt={props.content.container[1].partyName}  title={props.content.container[1].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content2')}} onKeyPress={()=> {handleContentChange('content2')}} tabIndex={0}>
                    <img src={props.content.container[2].imageURL}   alt={props.content.container[2].partyName}  title={props.content.container[2].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content3')}} onKeyPress={()=> {handleContentChange('content3')}} tabIndex={0}>
                    <img src={props.content.container[3].imageURL}   alt={props.content.container[3].partyName}  title={props.content.container[3].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content4')}} onKeyPress={()=> {handleContentChange('content4')}} tabIndex={0}>
                    <img src={props.content.container[4].imageURL}   alt={props.content.container[4].partyName}  title={props.content.container[4].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content5')}} onKeyPress={()=> {handleContentChange('content5')}} tabIndex={0}>
                    <img src={props.content.container[5].imageURL}   alt={props.content.container[5].partyName}  title={props.content.container[5].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content6')}} onKeyPress={()=> {handleContentChange('content6')}} tabIndex={0}>
                    <img src={props.content.container[6].imageURL}   alt={props.content.container[6].partyName}  title={props.content.container[6].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content7')}} onKeyPress={()=> {handleContentChange('content7')}} tabIndex={0}>
                    <img src={props.content.container[7].imageURL}   alt={props.content.container[7].partyName}  title={props.content.container[7].partyName}/>
                </div>
                <div onClick={()=> {handleContentChange('content8')}} onKeyPress={()=> {handleContentChange('content8')}} tabIndex={0}>
                    <img src={props.content.container[8].imageURL}  alt={props.content.container[8].partyName}  title={props.content.container[8].partyName}/>
                </div>
            </div>
            <Overlay isOpen={isOpen} onClose={toggleOverlay} >
                {selectedContent === 'content0' && <div><h1>{props.content.container[0].partyResponseHeadline}</h1><h4>{props.content.container[0].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[0].content}}></div></div>}
                {selectedContent === 'content1' && <div><h1>{props.content.container[1].partyResponseHeadline}</h1><h4>{props.content.container[1].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[1].content}}></div></div>}
                {selectedContent === 'content2' && <div><h1>{props.content.container[2].partyResponseHeadline}</h1><h4>{props.content.container[2].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[2].content}}></div></div>}
                {selectedContent === 'content3' && <div><h1>{props.content.container[3].partyResponseHeadline}</h1><h4>{props.content.container[3].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[3].content}}></div></div>}
                {selectedContent === 'content4' && <div><h1>{props.content.container[4].partyResponseHeadline}</h1><h4>{props.content.container[4].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[4].content}}></div></div>}
                {selectedContent === 'content5' && <div><h1>{props.content.container[5].partyResponseHeadline}</h1><h4>{props.content.container[5].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[5].content}}></div></div>}
                {selectedContent === 'content6' && <div><h1>{props.content.container[6].partyResponseHeadline}</h1><h4>{props.content.container[6].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[6].content}}></div></div>}
                {selectedContent === 'content7' && <div><h1>{props.content.container[7].partyResponseHeadline}</h1><h4>{props.content.container[7].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[7].content}}></div></div>}
                {selectedContent === 'content8' && <div><h1>{props.content.container[8].partyResponseHeadline}</h1><h4>{props.content.container[8].partyResponseDate}</h4><div dangerouslySetInnerHTML={{__html:props.content.container[8].content}}></div></div>}
            </Overlay>
        </div>
    )
}
