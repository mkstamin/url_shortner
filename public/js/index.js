const btn = document.getElementById("copyBtn");

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    
    textCopy()
})

function textCopy() {
    const copyText = document.getElementById("shortUrl");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

