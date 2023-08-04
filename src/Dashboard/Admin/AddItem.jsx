import { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddItem = () => {
    const axiosSecure = useAxiosSecure()
    const [addLoading, setAddLoading] = useState(false)
    const [formData, setFormData] = useState({ name: '', details: '' });
    const [facility, setObjectArray] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const addService = (e) => {
        e.preventDefault()
        setAddLoading(true)
        const title = e.target.nam.value
        const price = e.target.price.value
        const img = e.target.img.files[0]
        const description = e.target.description.value
        e.target.reset()
        const formData = new FormData()
        formData.append('image', img)
        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                const img = imageData.data.display_url
                const serviceData = {
                    title, price, description, img, facility
                }
                axiosSecure.post(`addService`, serviceData)
                    .then(data => {
                        if (data.data.acknowledged === true) {
                            setAddLoading(false)
                            toast('Service added Successfully')
                        }
                    })
            })



    }
    const handleFacility = (e) => {
        e.preventDefault();
        setObjectArray((prevObjectArray) => [...prevObjectArray, formData]);
        setFormData({ Facility: '', detail: '' });
    };

    return (
        <div>
            <ToastContainer></ToastContainer>
            <form onSubmit={addService}>
                <input className='border p-2 rounded-md w-full border-sky-400 mt-5 mb-5' type="text" name='nam' required placeholder='Service' /><br />
                <input className='border p-2 rounded-md w-full border-sky-400 mt-5 mb-5' type="text" name='price'required placeholder='price' /><br />
                <label className='border p-2 rounded-md w-[1000px] border-sky-400 mb-5 mt-5 mx-auto' required htmlFor="img">Image</label>
                <input className='border p-2 rounded-md  hidden mt-5 mb-5 border-sky-400 mx-auto' type="file" name='img'required placeholder='Image' id='img' /><br />
                <input className='border p-2 rounded-md w-full border-sky-400 mt-5' type="text" name='description' placeholder='Description'required />
                <div className="">
                    <input
                        className='border p-2 rounded-md w-full border-sky-400 mb-5 mt-5'
                        type="text"
                        name="name"
                        required
                        placeholder="Facility"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        className='border p-2 rounded-md w-full border-sky-400'
                        type="text"
                        name="details"
                        placeholder="Details"
                        required
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <div className="flex justify-center">
                        <button className='text-white bg-blue-600 font-bold mt-4 p-1 rounded' onClick={handleFacility}>Add Facility</button>
                    </div>
                </div>
                {
                    addLoading ? <h1 className='text-center font-bold text-orange-600 text-xl'>Loading....</h1> : <div className='flex justify-center'>
                        <button className='bg-orange-500 p-1  text-white rounded-md mt-10 w-[50%] '>Add Service</button>
                    </div>
                }
            </form>

        </div>
    );
};

export default AddItem;
