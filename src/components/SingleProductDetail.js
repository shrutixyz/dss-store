import React, {useState, useEffect} from 'react'
import {db, auth, storage} from '../utils/firebase';
import { Redirect, useHistory, useParams } from 'react-router-dom';


function SingleProductDetail() {

    //user
    const [user, setuser] = useState(null)

    //image file 
    const [file, setfile] = useState(null);

    const [url, seturl] = useState("");
    const [imageUrl, setimageUrl] = useState("")

    const history = useHistory();

    //form inputs
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [desc, setDesc] = useState("")

    //change btn text
    const [addActive, setaddActive] = useState(false)

    const productId = useParams().productId;

    //add to cart 
    const addToCart = (productId) => {
       

        setaddActive(true)

        const newCartItem = {
            id: productId,
            qty : 1,
            price: price,
            title : title,
            imageUrl: imageUrl
        }

        db.collection('cart').doc(`${user.email}`).collection('cartItems').add(newCartItem)
            .then((docRef) => {
            console.log("Document written")
        }).catch ((error) => {
            console.error(error)
        })
    }


    useEffect(() => {
        auth.onAuthStateChanged((_user) => {
            if(_user) {
                console.log("user signed in");
                setuser(_user)
            }else {
                console.log("uh,oh")
            }
            
        })
        
    }, [])


    useEffect(() => {
        db.collection('products').doc(`${productId}`).get().then((querySnapshot) => {

            setDesc(querySnapshot.data().desc)
            setTitle(querySnapshot.data().title)
            setPrice(querySnapshot.data().price)


           setimageUrl(querySnapshot.data().url)
            // querySnapshot.forEach((doc) => {

            //     //get image url
            //     newList = {...doc.data()}
            //     const imageRef = storage.ref().child(`images/${doc.id}`)
            //     imageRef.getDownloadURL()
            //         .then((url)=> {
            //             newList = {...newList, url, id: doc.id}
            //             if(newList in productList) return;
            //             setproductList([...productList, newList])
            //         })
            // })
            // console.log(querySnapshot.data());
        })
    }, [])

    return (
        <div className=" max-w-5xl m-auto">

        <div className= "flex flex-wrap mx-12  py-12 justify-evenly">
            <div className="w-60 m-auto md:w-1/4">
            <img src={imageUrl} alt="dummy" className="bg-contain mr-4"/>
            </div>
            
            <div className=" max-w-md">
                <div className="flex my-4 justify-between">
                     <h1 className="font-semibold">{title}</h1>
                     <p>Rs. {price}</p>
                </div>
             
                 <h4 className="font-normal text-xl text-accent">Description</h4>

                 <p>{desc}</p>

                 <button disabled={addActive} className="mt-12 px-3 py-2 mr-4 bg-accent text-white rounded-3xl hover:opacity-80" onClick={()=>addToCart(productId)}>{addActive ? "Item Added" : "Add to Cart"}</button>
                 <button className="mt-12 px-6 py-2  text-accent border-2 border-accent rounded-3xl hover:opacity-75">Buy Now</button>
            </div>
            
        </div>
        </div>
    )
}

export default SingleProductDetail
