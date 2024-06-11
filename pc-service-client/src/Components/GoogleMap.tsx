import React from "react";
function GoogleMap() {

    return (
        <><div className="img-fluid">
            <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.8836624440687!2d20.689682819050436!3d49.599943288696835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de527c4c967d1%3A0x4656f90ca24683d9!2sWy%C5%BCsza%20Szko%C5%82a%20Biznesu%20-%20National%20Louis%20University!5e0!3m2!1spl!2spl!4v1713623216283!5m2!1spl!2spl"
                loading="lazy">
            </iframe>
        </div>
        </>

    )
}
export default GoogleMap;