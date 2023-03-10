import {Component} from "react";
import content from "./../data/content.json";

function parsMyContent(content) {
    if (content.tag === "figure"){
        return "<figure id='"+content.id+"'>" + "<img src='"+ content.paramSrc+ "'>" +(content.caption ==="" ? "": "<figcaption>"+ content.caption +"</figcaption>") + "</figure>" ;
    }
    else if (content.tag === "iframe"){
        return "<iframe frameBorder='0' id="+content.id+" src='"+content.paramSrc+"' title='"+content.parmTitle+"' allow='"+content.paramAllow+"'"+" allowfullscreen></iframe>";
    }
    else {
        return "<"+content.tag+" id='"+content.id+"'>" +content.content+"</"+content.tag+">"
    }
}


export class IFrame extends Component {
    render() {
        return (
            <>
                {content.map((item) => (
                    <div className={'contentWrapper'+ ' ' + item.with}>
                        <div dangerouslySetInnerHTML={{__html: parsMyContent(item)}}/>
                    </div>
                ))}
            </>
        );
    }
}