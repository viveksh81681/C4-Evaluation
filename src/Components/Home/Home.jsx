// import { useState, useEffect } from "react";
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import {nanoid} from 'nanoid'

export const Home = () => {


const [allMeet,setallMeet] = useState([]);
  

useEffect(()=>{
  function fetchData(url) { 
  axios.get(url).then(res=>{setallMeet(res.data)})
  }
  fetchData('http://localhost:8080/meetups')  
},[]);

let homeMeet = allMeet;
console.log(allMeet)
// console.log(homeMeet)
// .filter((el) => {}) // Filter on the basis of Users interests and location (both true)

  return (
    <div className="grid grid-cols-2 homeContainer">
      {
        allMeet
        .map(({title,theme,date,time,location,image,description,id}) => {
          return (
            <Link key={nanoid()} to={`/${id}`} className="p-2 m-1 events">
              {/* add your children here (divs)
              ex : title, theme, description, date, time, location, image(optional)
              the classNames should be also : title, theme, description, date, time, location, image(optional)
             */}
             <div className="">
             <div className="image"><img className="w-40 h-40" alt={title} src={image}></img> </div>
             <div className="title">Title: {title}</div>
             <div className="theme">Theme: {theme}</div>
             <div className="description">Description: {description}</div>
             <div className="date">Date: {date}</div>
             <div className="time">Time: {time}</div>
             <div className="location">Lcation: {location}</div>
             
             </div>
            </Link>
          );
      })}

      <div className="subscribedData">
        <div>
          <select
            value={"add your value here"}  // add value here
            onChange={(e) => { }}
          >
            <option value="">------</option>
            <option value="bangalore">Bangalore</option>
            <option value="kolkata">Kolkata</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>
        <Link to={`add your route here`}> Add Meetup</Link>
        <h1>Subscribed Events</h1>
        <div className="subscribedEvents">
          {/* All user subcribed events should be displayed here in an ascending order of date */}

          {[]
            .map((el) => {
              return (
                <Link to={`add route here`} className="events">
                  {/* Each event should have these elements/children (divs):
                    ex : title, theme, description, date, time, location, image(optional)
                    the classNames should be also : title, theme, description, date, time, location, image(optional) */}
                </Link>
              );
            })}

        </div>
      </div>
    </div>
  );
};