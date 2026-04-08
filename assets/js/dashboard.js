
let elementSelector = "#downloadBtn"
let downloadButton = document.querySelector(elementSelector)

if(downloadButton){
    console.log(downloadButton)


    downloadButton.addEventListener("click", () => {
        alert("Your report has been downloaded successfully")

        downloadReport()
    })



    function downloadReport(){
        //implement the logic to download the report
    }


}else{
    console.warn(`The element with selector ${elementSelector} was not found`)
}

