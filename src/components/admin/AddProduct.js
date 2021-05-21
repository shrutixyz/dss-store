import React, {useEffect, useState} from 'react';
import {db, auth, storage} from '../../utils/firebase';
import { Redirect, useHistory } from 'react-router-dom';
import Navbar from '../Navbar';

function AddProduct() {

    const [user, setuser] = useState(null);
    
    //image file 
    const [file, setfile] = useState(null);
    const [url, seturl] = useState("")

    const history = useHistory();

    //form inputs
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("")



    useEffect(() => {
        console.log(url)
    }, [url])
    useEffect(() => {
   

        auth.onAuthStateChanged(function(user) {
                if(!user) {history.push('/')}
                if (user) {
                setuser(user)
                const docRef = db.collection('users')
                .doc(user.email)
                

            docRef.get().then((docs) => {
                if(!docs.exists) {history.push('/error')}
                if(docs.exists) {
                    const access = docs.data().access;
                    if(access !== "admin") {
                        history.push('/error')
                    }
                }else {
                    console.log("No Admin Rights")
                }


            })
                
                } 
            });
  

}, [user])


    //handle input file upload
    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        setfile(image)
    }

    const handleUpload = async (e) => {
        e.preventDefault();

        

        const newItem = {
            title : title,
            price : price,
            desc : desc
        }

        const dbRef = db.collection('products');

        dbRef.add(newItem).then(docRef => {
           
           const uploadTask = storage.ref(`/images/${docRef.id}`).put(file);

           uploadTask.on("state_changed",
           (snapshot) => {
               console.log(snapshot)
           } , (err) => {
               console.log(err)
           },

           () => {
           storage
               .ref("images")
               .child(`${docRef.id}`)
               .getDownloadURL()
               .then((url) => {
                  docRef.update({url})
               })
       })



        }).catch(error => console.log(error))

       

        //upload image to firestore
      

      
    }

    return (
        <div className="">
            <Navbar />
            <h1 className="font-medium mt-4 text-center">Add New Product</h1>
            <form className=" mt-10  shadow-md px-5 py-3 max-w-lg m-auto" >
            <div class="w-full px-3 py-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Product Title
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Product Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div class="w-full px-3 py-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-description">
                    Short Description
                </label>
                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-description" rows="5" placeholder="Enter Product Description....." value={desc} onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            <div class="w-full px-3 py-3">
               <input type="file" onChange={handleImageAsFile}/>
            </div>
            <div class="w-full flex py-3 px-3">
                <div className="w-full  mx-3 md:w-1/2" >
                
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-price">
                        Price
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" type="number" placeholder="" value={price} onChange={(e)=>setPrice(e.target.value)} />
                </div>
                <div className="w-full py-3 md:w-1/2" >
                    
                    <button className=" mt-5 px-3 py-2 bg-accent text-white rounded-3xl" onClick={(e) => {handleUpload(e)}}>Add Product</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default AddProduct
