import {Component} from "react";
import content from "./../data/content.json";

function parsMyContent(content) {
    let r;
    if (content.tag === "figure"){
        r =  "<figure id='"+content.id+"'>" + "<img alt ='"+content.alt +"' + src='"+ content.paramSrc+ "'>" +(content.caption ==="" ? "": "<figcaption>"+ content.caption +"</figcaption>") + "</figure>" ;
    }
    else if (content.tag === "iframe"){
        r =  "<iframe frameBorder='0' id="+content.id+" src='"+content.paramSrc+"' title='"+content.parmTitle+"' allow='"+content.paramAllow+"'"+" allowfullscreen></iframe>";
    }
    else {
        r = "<"+content.tag+" id='"+content.id+"'>" +content.content+"</"+content.tag+">";

    }
    return <div dangerouslySetInnerHTML={{__html: r}}/>
}
function parsMyComponent(item){
    if(item.componentType === "a") {
        return "yahoo"
    }

    else {
        return <div dangerouslySetInnerHTML={{__html: "<b>The component "+ item.componentType + " it is not implemented.</b>"}}/>
    }
}

export class HTML extends Component {
    render() {
        return (
            <>
                {content.map((item) => (
                    <div  id={item.id} className={'contentWrapper'+ ' ' + item.with}>
                        {item.isComponent === true ?  parsMyComponent(item) : parsMyContent(item)}
                    </div>
                ))}
            </>
        );
    }
}