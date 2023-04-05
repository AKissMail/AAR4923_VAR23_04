import React, {useState} from 'react';
import {Overlay} from './Overlay';


export function OverlayManger() {
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
                <div onClick={()=> {handleContentChange('content1')}}>
                    <img src={'./img/party_logo/1.svg'}/>
                    <p>Arbeiderpartiet</p>
                </div>
                <div onClick={()=> {handleContentChange('content2')}}>
                    <img src={'./img/party_logo/2.svg'}/>
                    <p>Høyre</p>
                </div>
                <div onClick={()=> {handleContentChange('content3')}}>
                    <img src={'./img/party_logo/3.svg'}/>
                    <p>Senterpartiet</p>
                </div>
                <div onClick={()=> {handleContentChange('content4')}}>
                    <img src={'./img/party_logo/4.svg'}/>
                    <p>Fremskrittspartiet</p>
                </div>
                <div onClick={()=> {handleContentChange('content5')}}>
                    <img src={'./img/party_logo/5.svg'}/>
                    <p>Sosialistisk Venstreparti</p>
                </div>
                <div onClick={()=> {handleContentChange('content6')}}>
                    <img src={'./img/party_logo/6.svg'}/>
                    <p>Rødt</p>
                </div>
                <div onClick={()=> {handleContentChange('content7')}}>
                    <img src={'./img/party_logo/7.png'}/>
                    <p>Venstre</p>
                </div>
                <div onClick={()=> {handleContentChange('content8')}}>
                    <img src={'./img/party_logo/8.svg'}/>
                    <p>Miljøpartiet De Grønne</p>
                </div>
                <div onClick={()=> {handleContentChange('content9')}}>
                    <img src={'./img/party_logo/9.svg'}/>
                    <p>Kristelig Folkeparti</p>
                </div>

            </div>

            <Overlay isOpen={isOpen} onClose={toggleOverlay} >
                {selectedContent === 'content1' && <div><h1>Content 1</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content2' && <div><h1>Content 2</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content3' && <div><h1>Content 3</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content4' && <div><h1>Content 4</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content5' && <div><h1>Content 5</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content6' && <div><h1>Content 6</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content7' && <div><h1>Content 7</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content8' && <div><h1>Content 8</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
                {selectedContent === 'content9' && <div><h1>Content 9</h1><h4>05/04/2023</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div>}
            </Overlay>
        </div>
    )
}