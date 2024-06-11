import React from "react";
import { SiMsi, SiDell, SiAcer,SiLenovo, SiAsus, SiLidl, SiCdprojekt  } from "react-icons/si";
function Partnership(){
    return(
        <div className="container-fluid custom-gray-background">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-12">
                        <p className="display-3">Our partners</p>
                        <hr />
                    </div>
                </div>
                <div className="row mt-2 text-center">
                    <div className="col-sm-2 mb-5">
                    <SiMsi size={100}/>
                    </div>
                    <div className="col-sm-2 mb-5">
                    <SiDell size={100}/>
                    </div>
                    <div className="col-sm-2 mb-5">
                    <SiAcer  size={100}/>
                    </div>
                    <div className="col-sm-2 mb-5">
                    <SiLenovo  size={100}/>
                    </div>
                    <div className="col-sm-2 mb-5">
                    <SiAsus  size={100}/>
                    </div>
                    <div className="col-sm-2 mb-5">
                    <SiCdprojekt size={100}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Partnership;