
document.getElementById('root').addEventListener("DOMSubtreeModified", async () => {
    const chat = await document.querySelector( '.chat' );
    if ( !chat ) return;
    console.log(chat.innerHTML.length);
    if ( chat.innerHTML.length > 0 ) return;


    const xhr__chat = new XMLHttpRequest();

    xhr__chat.onload = function () {
        if (this.status === 200 ) {
            chat.innerHTML = xhr__chat.responseText;
        } else {
            console.log("Did not works");
        }
    }

    xhr__chat.open('get', '/src/view/Chat.html' );
    xhr__chat.send();
});

