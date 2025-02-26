console.log("Email Writer");

function createAibutton(){
    const button=document.createElement('div');
    button.className='T-I J-5-J-Ji aoO v7 T-I-at1 L3';
    button.style.marginRight='8px';
    button.innerHTML='AI Reply';
    button.setAttribute('role','button');
    button.setAttribute('data-tooltip','Generate AI Reply');
    return button;

}

function getEmailcontnet(){
    const selectors=[
        '.btC',
        '.aDh',
        '[role="toolbar]',
        '.gU.Up'
    ];
    for(const selector of selectors){
        const toolbar=document.querySelector(selector);
        if(toolbar)
            return toolbar;
    }
    return null;
}
function findComposeToolbar(){
    const selectors=[
        '.btC',
        '.aDh',
        '[role="toolbar]',
        '.gU.Up'
    ];
    for(const selector of selectors){
        const toolbar=document.querySelector(selector);
        if(toolbar)
            return toolbar;
    }
    return null;
}

function injectButton() {
    console.log("Injecting button...");
    const existingButton=document.querySelector('.ai-reply-button')
    if(existingButton) existingButton.remove();
    const toolbar=findComposeToolbar();
    if(!toolbar){
        console.log("Toolbar not found");
        return;
    }
    console.log("Toolbar found");
    const button=createAibutton();
    button.classList.add('.ai-reply-button');
    button.addEventListener('click',async()=>{
        try {
            button.innerHTML='Generating...';
            button.disabled=true;

            const emailcontnent=getEmailcontnet();


        } catch (error) {
            
        }

    })
    toolbar.insertBefore(button,toolbar.firstChild);


}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        const addedNodes = Array.from(mutation.addedNodes);

        const hasComposeElements = addedNodes.some(node =>
            node.nodeType === Node.ELEMENT_NODE &&
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector('.aDh, .btC, [role="dialog"]'))
        );

        if (hasComposeElements) {
            console.log("Compose Window Detected");
            setTimeout(injectButton, 500);  
        }
    }
});

observer.observe(document.body, {
    childList: true,  
    subtree: true     
});
