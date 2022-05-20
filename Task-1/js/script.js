let fileInput = document.getElementById('fileInput');
let uploadImg = document.getElementById("upload-image");
let closeBtn = document.getElementById("close");

fileInput.addEventListener('change', function(){
    [...this.files].forEach(file=>{

        if(file.type.startsWith('image/')){
            let reader = new FileReader();

            reader.onload = function(){

                let img = document.createElement('img');
                img.classList.add("new-img");
                img.setAttribute('src',reader.result);

                document.body.appendChild(img);
            }

            reader.readAsDataURL(file);
        }
        else{
            console.log('Format is wrong');
            this.value = '';
        }
    })
})

uploadImg.addEventListener('click', function(){
    fileInput.click();
})

closeBtn.addEventListener("click", function(){
    newImage.style.backgroundImage="none"
    closeBtn.style.display='none';
})