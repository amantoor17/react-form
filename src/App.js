import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"United States",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:");
    console.log(formData)
  }

  return (
   <div className="flex flex-col mx-auto w-7/12 p-8 shadow-2xl text-sm">
   <form onSubmit={submitHandler}>

   <div>
      <label htmlFor="firstName" className="font-bold">First name</label>
        <br/>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="John"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-b-blue-200"
        />

        <br/>
        <label htmlFor="lastName" className="font-bold">Last name</label>
        <br/>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Doe"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-t-blue-200"
        />

        <br/>
        <label htmlFor="email" className="font-bold">Email Address</label>
        <br/>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Johndoe@example.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-b-blue-200"
        />

        <br/>
        <label htmlFor="country" className="font-bold">Country</label>
        <br/>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-t-blue-200"
          >

          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <br/>
        <label htmlFor="streetAddress" className="font-bold">Street Address</label>
        <br/>
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="A-1/1"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-b-blue-200"
        />

        <br/>
        <label htmlFor="city" className="font-bold">City</label>
        <br/>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="A-1/1"
          value={formData.city}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-t-blue-200"
        />

      <br/>
        <label htmlFor="state" className="font-bold">State / Province</label>
        <br/>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Minnesota"
          value={formData.state}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-b-blue-200"
        />

        <br/>
        <label htmlFor="postalCode" className="font-bold">ZIP / Postal Code</label>
        <br/>
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="55112"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline-blue-300 border w-full rounded-md p-1 border-t-blue-200"
        />


   </div>

    
    <br/>
    <br/>
    <fieldset  style={{ border: "1px solid #ccc", padding: "1em" }} >
      <legend className="font-bold">By Email</legend>

        <div className="flex">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={formData.comments}
            onChange={changeHandler}
          ></input>  

          <div className="p-2">
            <label htmlFor="comments" className="font-bold">Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
          </div>

        </div>

        <div className="flex" >
          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}
          ></input>  

          <div className="p-2"> 
            <label htmlFor="candidates" className="font-bold">Candidates</label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
      
        </div>  


      <div className="flex" >
        <input
          id="offers"
          name="offers"
          type="checkbox"
          checked={formData.offers}
          onChange={changeHandler}
        ></input>  

        <div className="p-2 ">
          <label htmlFor="offers" className="font-bold">Offers</label>
          <p>Get notified when a candidate accepts or rejects an offer.</p>
        </div>

      </div>

    </fieldset>

    <br/>
    <br/>

    <fieldset style={{ border: "1px solid #ccc", padding: "1em" }}>
      <legend className="font-bold">Push Notifications</legend>
      <p className="opacity-60 pb-3">These are delivered via SMS to your mobile phone.</p>

      <div>
          <input
            type="radio"
            id="pushEverything"
            name="pushNotifications"
            value="Everything"
            onChange={changeHandler}
          />

          <label htmlFor="pushEverything" className="font-bold p-2">Everything</label>
      </div>
      
      <br/>

      <div>
          <input
            type="radio"
            id="pushEmail"
            name="pushNotifications"
            value="Same as email"
            onChange={changeHandler}
          />

          <label htmlFor="pushEmail" className="font-bold p-2">Same as email</label>
      </div>

      <br/>

      <div>
          <input
            type="radio"
            id="pushNothing"
            name="pushNotifications"
            value="No Push Notifications"
            onChange={changeHandler}
          />

          <label htmlFor="pushNothing" className="font-bold p-2">No Push Notifications</label>
      </div>
      

    </fieldset>

    <br/>
    <button
    className="bg-blue-500 text-white font-bold rounded py-2 px-4"
    >Save</button>






   </form>

   </div>
  );
}

export default App;
