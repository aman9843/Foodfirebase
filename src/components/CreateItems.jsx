import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import pizza from "../assets/pizza.jpg";
import { actionType } from "../context/reducer";
import { useNavigate } from "react-router-dom";
import {
  MdFastfood,
  MdDelete,
  MdCloudUpload,
  MdDescription,
  MdOutlineProductionQuantityLimits
} from "react-icons/md";
import Loader from "./Loader";
import { FaRupeeSign } from "react-icons/fa";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { fs, storage } from "../firebase.config";
import Swal from "sweetalert2";
import { getFoodItems } from "../utils/firebaseFunction";
import { availibility, categories } from "../utils/data";
import { useStateValue } from "../context/stateProvision";

const CreateItems = () => {
  const navigate = useNavigate()
  const [{ foodItems }, dispatch] = useStateValue();
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [avail , setAvail] = useState("");
  const [imageAsset, setImageAsset] = useState(null);

  // Upload Image
  const uploadImage = (e) => {
    setLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(uploadProgress);
      },
      (err) => {
        console.log(err);
        setFields(true);
        setMsg("Error While Uploading Image");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setLoading(false);
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setLoading(false);
          setImageAsset(downloadUrl);
          setFields(true);
          setMsg("Image Uploaded Successfully!");
          setAlertStatus("success");
          setTimeout(() => {
            setFields(false);
          }, 2000);
        });
      }
    );
  };

  /// Delete Image
  const onDelete = () => {
    setLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef)
      .then(() => {
        setImageAsset(null);
        setLoading(false);
        setFields(true);
        setMsg("Image Deleted Successfully!");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setFields(true);
        setMsg("Error While Deleting Image");
        setTimeout(() => {
          setLoading(false);
          setFields(false);
        }, 2000);
      });
  };

  // Saving Data

  const saveDetails = () => {
    setLoading(true);
    try {
      if (!title || !category || !description || !imageAsset || !price) {
        setFields(true);
        setMsg("Fill All the Data ");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setLoading(false);
        }, 2000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          category: category,
          description: description,
          imageUrl: imageAsset,
          avail:avail,
          price: price,
          quantity:quantity
        };
        // saveItem(data);
        fs.collection("foodItems")
          .add({
            data,
          })
          .then(() => {
            setLoading(false);
            setFields(true);

            clearData();
            fetchdata();

            Swal.fire(
              "Hurray!",
              "Data Uploaded Successfully",
              "success",
              setFields(false)
            );

            navigate('/')


          });
      }
    } catch (error) {
      console.log(error);
      setFields(true);
      setMsg("Error While Uploading Data");
      setTimeout(() => {
        setFields(false);
        setLoading(false);
      }, 2000);
    }
  };

  const clearData = () => {
    setTitle("");
    setCategory("");
    setDescription("");
    setImageAsset(null);
    setAvail('');
    setQuantity('');
    setPrice("");
  };

  const fetchdata = async () => {
    await getFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  return (
    <div className="py-2">
      <AnimatePresence>
        <div className="flex items-center gap-2  justify-center px-4 py-3">
          <h1 className=" text-black-500 font-semibold">Add New FoodItems</h1>

          <div className="w-13 h-12 overflow-hidden rounded-full drop-shadow-xl">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              src={pizza}
              alt="Delivery Service"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="w-full min-h-screen flex items-center justify-center py-3">
          <div className="w-[90%] md:w-[75%] border border-violet-400 rounded-lg p-4 flex flex-col items-center justify-center shadow-xl">
            {fields && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                  alertStatus === "danger"
                    ? "bg-red-400 text-red-800"
                    : " bg-green-400 text-emerald-800"
                }`}
              >
                {msg}
              </motion.p>
            )}

            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
              <MdFastfood className="text-gray-700 text-xl" />
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Give a title..."
                className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
                required
              />
            </div>
            <div className="w-full py-3">
              <select
                onChange={(e) => setCategory(e.target.value)}
                className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value="other" className="bg-white">
                  Select Category
                </option>

                {categories &&
                  categories.map((items) => (
                    <option
                      key={items.id}
                      className="text-base border-0 outline-none capitalize bg-violet-50 text-headingColor"
                      value={items.urlParamName}
                    >
                      {items.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w-full py-3 border-b border-gray-300 flex items-center gap-2">
              <MdDescription className="text-gray-700 text-xl" />
              <input
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter Your Description"
                className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
              />
            </div>
            <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-300 cursor-pointer">
              {loading ? (
                <Loader />
              ) : (
                <>
                  {!imageAsset ? (
                    <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                      <div className="w-full h-full flex flex-col items-center justify-center">
                        <MdCloudUpload className="text-gray-500 group-hover:text-gray-700 text-3xl" />
                        <p className="text-gray-500 group-hover:text-gray-700">
                          Click here to upload
                        </p>
                      </div>
                      <input
                        type="file"
                        name="upload-image"
                        accept="image/*"
                        onChange={uploadImage}
                        className="w-0 h-0"
                      />
                    </label>
                  ) : (
                    <div className="relative h-full">
                      <img
                        src={imageAsset}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                      <button
                        type="button"
                        className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl
                  cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                        onClick={onDelete}
                      >
                        <MdDelete className="text-white" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="w-full py-3">
              <select
                onChange={(e) => setAvail(e.target.value)}
                className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
              >
                <option value="other" className="bg-white">
                  Availibility
                </option>

                {availibility &&
                  availibility.map((items) => (
                    <option
                      key={items.id}
                      className="text-base border-0 outline-none capitalize bg-violet-50 text-headingColor"
                      value={items.name}
                    >
                      {items.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-3 mt-3">
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <MdOutlineProductionQuantityLimits className="text-gray-700 text-2xl" />
                <input
                  type="number"
                  required
                  placeholder="Add the Quantity..."
                  className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row items-center gap-3 mt-3">
              <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                <FaRupeeSign className="text-gray-700 text-2xl" />
                <input
                  type="number"
                  required
                  placeholder="Add the price..."
                  className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center mt-3 w-full">
              <button
                type="button"
                className="ml-0 md:ml-auto w-full md:w-auto border-none toutline-none bg-violet-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
                onClick={saveDetails}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default CreateItems;
