
export const UploadImg = (props) => {
    const trigerUpload = (e) => {
        props.setimgPreview(e.target.files[0])
    }

    return (
        <div>
            <p className="font-medium text-lg mb-2">Thumbnail</p>
            <input type="file" onChange={(e) => trigerUpload(e)} />
            {
                props.imgPreview && <img src={URL.createObjectURL(props.imgPreview)} className="w-[350px] mt-5" alt="" />
            }
        </div>
    )
}