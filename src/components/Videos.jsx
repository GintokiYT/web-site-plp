import "../css/videos.css";

const Videos = () => {

    const videoFacebook1 = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPP000317%2Fvideos%2F1068051250584754%2F&show_text=false&width=560&t=0";
    const videoFacebook2 = "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPP000317%2Fvideos%2F305738460765439%2F&show_text=false&width=560&t=0";

    return (  
        <div className="container" id="videos">
            <h2 className="titulo__video text-center my-3">Videos</h2>
            <div className="row contenedor__iframe">
                <div className="col-md-6 iframe__video">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={videoFacebook1} allowFullScreen title="Facebook"></iframe>
                    </div>
                </div>
                <div className="col-md-6 iframe__video">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={videoFacebook2} allowFullScreen title="Facebook"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Videos;