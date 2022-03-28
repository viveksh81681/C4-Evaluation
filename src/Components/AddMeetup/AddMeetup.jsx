// User should be able to add/create new meetups 
import {useState} from 'react'
import axios from 'axios'

export const AddMeetup = () => {

  const [MeetUpData,setMeetUp] = useState({});

  const onchangeHandler = (e) => {
    const {id,value} = e.target
    setMeetUp({  ...MeetUpData, [id]:value  })
    console.log(MeetUpData)
}

  const onSubmitMeetUp = () => {

      function postData(url){
      axios.post(url,MeetUpData).then(console.log('posted'))
      }
      postData('http://localhost:8080/meetups')

  }

  return (
    <div className="addMeetupContainer">
      <form onSubmit={onSubmitMeetUp} >
        <h1>Add Meetup</h1>
        <label>title</label>
        <input type="text" className=" capitalize pl-2 px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 title" onChange={onchangeHandler} id="title" required />
        <label>Location</label>
        <select id="location" value={""} className=" capitalize pl-2 px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 location" onChange={onchangeHandler}>
          <option value=""></option>
          <option id="location" value="bangalore">Bangalore</option>
          <option id="location" value="kolkata">Kolkata</option>
          <option id="location" value="delhi">Delhi</option>
          <option id="location" value="mumbai">Mumbai</option>
        </select>
        <br />
        <label>date</label>
        <input
          type="text"
          className=" capitalize pl-2 px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 date"
          onChange={onchangeHandler}
          id="data"
          placeholder="format YYYY-MM-DD"
          required
        />
        <br />
        <label>time</label>
        <input
          type="text"
          id="time"
          className=" capitalize pl-2 px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 time"
          onChange={onchangeHandler}
          placeholder="format HH:MM"
          required
        />
        <br />
        <label>Theme</label>
        <select id="theme" value={""} className=" capitalize pl-2 px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 theme" onChange={onchangeHandler}>
          <option value="">-----------</option>
          <option value="technology">Technology</option>
          <option value="food">Food</option>
          <option value="movies">Movies</option>
          <option value="culture">Culture</option>
          <option value="art">Art</option>
          <option value="drama">Drama</option>
        </select>
        <label>description</label>
        <input
          type="text"
          id="description"
          className=" capitalize pl-2 px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 description"
          onChange={onchangeHandler}
          placeholder="Description"
          required
        />
        <br />
        <label>Image</label>
        <input
          type="text"
          id="image"
          className=" capitalize pl-2 px-1 m-1 rounded border-[0.5px] border-gray-400 focus:border-1 focus: border-gray-700 image"
          onChange={onchangeHandler}
          required
        />
        <br />
        <input className=" capitalize pl-2 px-1 p-2  mx-3 rounded-full border-[0.5px] bg-blue-400 focus:border-1 text-white font-semibold submitMeetupForm" type="submit" />
      </form>
    </div>
  );
};