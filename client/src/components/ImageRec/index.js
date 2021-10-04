import React, { useEffect, useState } from 'react';
import imageUploadFunc from '../../utils/imageUpload';
import ImageUploading from 'react-images-uploading';

export default function ImageRec({setImages, images}) {
  const maxNumber = 50;

  const onChange = ( imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };


  return (
    <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper mx-2 w-100">
            <span
              className="btn btn-light sp-btn w-100 border-input mx-auto"
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
            <i className="fas fa-file-image"></i>
            </span>
          </div>
        )}
      </ImageUploading>
  )
} 