setTimeout(function()
{
    img_id="selfie1";
    take_snapshot();
    speak_dat="Taking your next selfie in 10 seconds";
    var utterThis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);

function take_snapshot()
{
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1")
        }
    })
}