import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../pages/PDF_Viewer.css';

import { Viewer, Worker  } from "@react-pdf-viewer/core";
import {defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDF_Viewer = () => {

  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const handleOnChange = (event)=> {
    const fileType = ['application/pdf']
    let selectedFile = event.target.files[0];
    if(selectedFile) {
      if(selectedFile && fileType.includes(selectedFile.type)){
        let reader = new FileReader()
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) =>{
          setPdfFile(e.target.result);
        } 
      }
      else {
        setPdfFile(null)
      }
    }
    else {
      console.log("please select file");
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(pdfFile!== null) {
      setViewPdf(pdfFile)      
    }
    else {
      setViewPdf(null)
    }
  }
  const newplugin = (defaultLayoutPlugin);
  return (
    <>
      <h1>PDF Viewer..</h1>      
      <div className="container">
        <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="" variant="outlined" type='file' onChange={handleOnChange} /> <br />
        <Button type='submit' variant='outlined' onClick={handleSubmit}>View PDF</Button>
        </form>      
        <div className="pdfContainer">
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
            {viewPdf && <>
              <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
            </>}
            {!viewPdf && <>No PDF</>}
          </Worker>        
        </div>
      </div>
    </>
  )
}

export default PDF_Viewer
