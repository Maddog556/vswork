import React from "react";


export default function Badge(){
    
const [Form, setForm] = React.useState(
    {
    firstName:"",
    lastName:"",
    email:"",
    placeOfBirth:"",
    phone: "",
    favoriteFood:"",
    comment:""
    }
)

function handleChange(event) {
    const {name, value} = event.target;
    setForm((prevForm) =>{
        return{
            ...prevForm,
            [name]: value,
        };
    });
}
const [finalBages, setfinalBages] = React.useState("")
function finalSubmit(event){
    event.preventDefault();
    console.log(Form)

setfinalBages((prevfinalBages)=>{
    return[
        ...prevfinalBages,
        <div className="badge">
            <div className="border">
            <p className="Name">
                Name: {Form.firstName} {Form.lastName}
                </p>
            <p className="email">
                Email: {Form.email}
                </p>
            <p className="birth">
                Birth Place: {Form.placeOfBirth}
                </p>
            <p className="phone">
                Phone # {Form.phone}
                </p>
            <p className="food">
                Your Favorite Food: {Form.favoriteFood}
                </p>
            <p className="comment">
                Your Comment: {Form.comment}
                </p>
                </div>
        </div>
    ]
})

}
    return(
        <div>
            <h1 className="title">Badge Maker</h1>
        <form className="form"onChange={handleChange}>
            <input
            className="input1"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name = "firstName"
            value={Form.firstName}
            />
            <input
            className="input2"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name = "lastName"
            value={Form.lastName}
            />
            <input
            className="input3"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            name = "email"
            value={Form.email}
            />
            <input
            className="input4"
            type="text"
            placeholder="Place Of Birth"
            onChange={handleChange}
            name = "placeOfBirth"
            value={Form.placeOfBirth}
            />
            <input
            className="input5"
            type="text"
            placeholder="Phone"
            onChange={handleChange}
            name = "phone"
            value={Form.phone}
            />
            <input
            className="input6"
            type="text"
            placeholder="Favorite Food"
            onChange={handleChange}
            name = "favoriteFood"
            value={Form.favoriteFood}
            />
            <textarea
            maxLength="60"
            className="textArea"
            type="text"
            placeholder="Comment Limit 60 characters"
            onChange={handleChange}
            name = "comment"
            value={Form.comment}
           
            />
            <button type="submit" className="submitBtn" onClick={finalSubmit}>Submit</button>

        </form>
        <div>
            {finalBages}
        </div>
        </div>
    )
}