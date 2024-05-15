import React, { Fragment, useEffect, useState } from "react";
import Menu from "../Menu";

const AgregarImagenes = () => {
    const [file, setFile] = useState(null);
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/images/get", {
            method: 'GET'
        })
            .then(res => res.json())
            .then(res => {
                console.log("Response from API:", res);
                setImageList(res);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    console.log("ImagenesLista ", imageList);
    const selectedHandler = e => {
        setFile(e.target.files[0]);
    };

    const sendHandler = () => {
        if (!file) {
            alert('You must upload a file');
            return;
        }

        console.log('Sending request...');

        const formData = new FormData();
        formData.append('image', file);

        fetch('http://localhost:8000/images', {
            method: 'POST',
            body: formData
        })
            .then(res => res.text())
            .then(res => {
                console.log(res)
                alert("Actualiza la pagina")
            })
            .catch(err => {
                console.error(err);
            });

        document.getElementById('fileinput').value = null;
        setFile(null);
    };

    return (
        <div>
            <Menu />
            <Fragment>
                <div className="container mt-5">
                    <div className="card p-3">
                        <div className="row">
                            <div className="col-10">
                                <input id="fileinput" onChange={selectedHandler} className="form-control" type="file" />
                            </div>
                            <div className="col-2">
                                <button onClick={sendHandler} type="button" className="btn btn-primary col-12">Upload</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        {imageList.map((imageName, index) => (
                            <div key={index} className="col-3">
                                <img src={`http://localhost:8000/${imageName}`} alt={`Image ${index}`} className="img-thumbnail" />
                            </div>
                        ))}
                    </div>
                </div>

            </Fragment>
        </div>
    );
};

export default AgregarImagenes;
