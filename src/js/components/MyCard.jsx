import React from "react";

function MyCard() {


    return (
        <>
        
            <div className="card-container row">
                <div className="card col-lg-2 col-md-5 col-sm-12" >
                    <img src="https://picsum.photos/200/300" className="img-1" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


                <div className="card col-lg-2 col-md-5 col-sm-12">
                    <img src="https://picsum.photos/200/300" className="img-2" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card col-lg-2 col-md-5 col-sm-12" >
                    <img src="https://picsum.photos/200/300" className="img-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div className="card col-lg-2 col-md-5 col-sm-12">
                    <img src="https://picsum.photos/200/300" className="img-4" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MyCard