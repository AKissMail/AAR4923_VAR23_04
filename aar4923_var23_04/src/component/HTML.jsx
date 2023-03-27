import {Component} from "react";
import content from "./../data/content.json";
import ReactCompareImage from "react-compare-image";

function parsMyContent(item) {
    let r;
    if (item.tag === "figure"){
        r =  "<figure id='"+item.id+"'>" + "<img alt ='"+item.alt +"' + src='"+ item.paramSrc+ "'>" +(item.caption ==="" ? "": "<figcaption>"+ item.caption +"</figcaption>") + "</figure>" ;
    }
    else if (item.tag === "iframe"){
        r =  "<iframe frameBorder='0' id="+item.id+" src='"+item.paramSrc+"' title='"+item.parmTitle+"' allow='"+item.paramAllow+"'"+" allowfullscreen></iframe>";
    }
    else {
        r = "<"+item.tag+" id='"+item.id+"'>" +item.content+"</"+item.tag+">";

    }
    return <div dangerouslySetInnerHTML={{__html: r}}/>
}
function parsMyComponent(item){
    if(item.componentType === "ReactCompareImage") {
        return <ReactCompareImage leftImage={item.leftImage} rightImage={item.rightImage} leftImageAlt={item.leftImageAlt} rightImageAlt={item.rightImageAlt} />
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