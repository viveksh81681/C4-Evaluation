import {useState} from 'react'
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'

// const login = useSelector(state=>state.login)



export const LoginSignUp = () => {
 

const [SignUpData,setSignUp] = useState({});
const [loginData,setlogin] = useState({});

  const onchangeHandler = (e) => {
      const {id,value} = e.target
      setSignUp({  ...SignUpData, [id]:value  })
      console.log(SignUpData)
  }
  const onSubmitSignUp = () => {
  
    // {name,password,location,image,tech,movie,culture,art,drama} =  SignUpData
    

    function postData(url){
    axios.post(url,SignUpData).then(console.log('posted'))
    }
    postData('http://localhost:8080/users')

  }


  const onchangeHandlerLogin = (e) => {
    const {id,value} = e.target
    setlogin({  ...loginData, [id]:value  })
    console.log(loginData)
}

const dispatch = useDispatch();
// const loginDatastore = useSelector(({loginData})=> login);
  const onSubmitLogin = (e) => {
    e.preventDefault();
    function fetchData(url) { 
    axios.get(url).then(res=>{
      // setlogin(res.data)
      if(res.data.length!==0){
        dispatch({type:'LOGIN',payload:{login:true,loginDatastore:res.data}});
      }
    
    })
    }
    fetchData(`http://localhost:8080/users?name=${loginData.name}&password=${loginData.password}`)
  }


  return (
    <div className="flex justify-between loginSignUp">
      <form className="signUp" onSubmit={onSubmitSignUp}>
        <h1>SignUp</h1>
        <label>name</label>
        <input
          type="text"
      
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize name"
          onChange={onchangeHandler}
          id="name"
          required
        />
        <br />
        <label>password</label>
        <input
          type="text"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize password"
          onChange={onchangeHandler}
          id="password"
          required
        />
        <br />
        <select
          // value={""}
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize location"
          onChange={onchangeHandler}
          id="location"
        >
          <option value=""></option>
          <option value="bangalore">Bangalore</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <label>Interests</label>
        <br />
        <label>technology</label>
        <input
          type="checkbox"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize technology"
          onChange={onchangeHandler}
          value="true"
          id="tech"
        />
        <br />
        <label>food</label>
        <input
          type="checkbox"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize food"
          onChange={onchangeHandler}
          value="true"
          id="food"
        />
        <br />
        <label>movies</label>
        <input
          type="checkbox"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize movies"
          onChange={onchangeHandler}
          id="movie"
          value="true"
        />
        <br />
        <label>culture</label>
        <input
          type="checkbox"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize culture"
          onChange={onchangeHandler}
          id="culture"
          value="true"
        />
        <br />
        <label>art</label>
        <input
          type="checkbox"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize art"
          onChange={onchangeHandler}
          id="true"
          value="art"
        />
        <br />
        <label>drama</label>
        <input
          type="checkbox"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize drama"
          onChange={onchangeHandler}
          id="drama"
          value="true"
        />
        <br />
        <label>image</label>
        <input
          type="text"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize image"
          onChange={onchangeHandler}
          id="image"
          required
        />
        <br />
        <input
          type="submit"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize submitSignUpForm"
        />
      </form>
      <form
        className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize login"
        onSubmit={onSubmitLogin}
      >
        <h1 className="text-4xl" >Login</h1>
        <label>name</label>
        <input
          type="text"
          id="name"
          className=" px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 capitalize name"
          onChange={onchangeHandlerLogin}
          required
        />
        <br />
        <label>password</label>
        <input
        id="password"
          type="text"
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 password"
          onChange={onchangeHandlerLogin}
          required
        />
        {/* <input value={} onChange={onChange} className='px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-400'  /> */}
        <br />
        <input
          type="submit"
          className="px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700  submitLoginForm"
        />
      </form>
    </div>
  );
};