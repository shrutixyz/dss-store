import React, {useEffect, useState} from 'react';
import {db, auth, storage} from '../../utils/firebase';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Navbar from '../Navbar';

function EditProduct() {

    const [user, setuser] = useState(null);
    
    //image file 
    const [file, setfile] = useState(null);
    const [url, seturl] = useState("");
    const [imageUrl, setimageUrl] = useState("")

    const history = useHistory();

    //form inputs
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("")

    const productId = useParams().productId;

    console.log(productId)
    useEffect(() => {
        const dbRef = db.collection('products').doc(`${productId}`);

        dbRef.onSnapshot(doc => {
            setTitle(doc.data().title)
            setPrice(doc.data().price)
            setDesc(doc.data().desc)
            setimageUrl(doc.data().url)
        })

       
    }, [])



    useEffect(() => {
   

            auth.onAuthStateChanged(function(user) {
                    if (user) {
                    setuser(user)
                    const docRef = db.collection('users')
                    .doc(user.email)
                    

                docRef.get().then((docs) => {
                    if(docs.exists) {
                        const access = docs.data().access;
                        if(access !== "admin") {
                            history.push('/error')
                        }
                    }else {
                        console.log("No Admin Rights")
                    }


                })
                    
                    } else {
                    console.log("No user is signed in.")
                    }
                });
      

    }, [])


    //handle input file upload
    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        setfile(image)
    }

    const handleUpload = async (e) => {
        e.preventDefault();

        

       

        const docRef = db.collection('products').doc(`${productId}`);

        docRef.onSnapshot(doc => {
           
           const uploadTask = storage.ref(`/images/${productId}`).put(file);

           uploadTask.on("state_changed",
           (snapshot) => {
               console.log(snapshot)
           } , (err) => {
               console.log(err)
           },

           () => {
           storage
               .ref("images")
               .child(`${productId}`)
               .getDownloadURL()
               .then((url) => {
                  docRef.update({url})
                  setimageUrl(url)
                  history.push('/admin/view-product')

               })
       })



        })

       

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
                <img src={imageUrl} className="w-24   md:w-28 lg-48" alt="" />
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

export default EditProduct

