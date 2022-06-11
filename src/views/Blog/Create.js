import { BtnGreen } from "../../components/atom/BtnGreen"
import Input from "../../components/atom/Input"

const Create = () => {
    return (
        <div className="container mx-auto py-10">
            <p className="font-medium text-2xl mb-5">Create New Blog Post</p>
            <Input name="Post Title" type="text" />
            <Input name="Thumbnail" type="file" />
            <textarea cols="30" rows="10" className="border w-full rounded-xl p-5 my-5" placeholder="Isi blog"></textarea>
            <div className="flex justify-end">
            <BtnGreen title="Save" />
            </div>
        </div>
    )
}

export default Create