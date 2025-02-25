console.log("Email Writer ")

const observer=new MutationObserver((mutations)=>{
    for(const mutation of mutations ){
        const addedNodes=Array.from(mutation.addedNodes);
        const hasComposeElements=addedNodes.some(node=>
            node.nodeType===Node.ELEMENT_NODE
            (node.matches('.aDh','.btC','[role="dialog"]') || node.querySelector('.aDh','.btC','[role="dialog"]'))
        );
        if(hasComposeElements){
            console.log("Compose Window Detected");
            setTimeout(injectButton,500);
        }
    }
})