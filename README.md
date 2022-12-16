# User Booking System in React

### Recorded video:

[![Alt text](https://img.youtube.com/vi/DMMDBAxL9H8/0.jpg)](https://www.youtube.com/watch?v=DMMDBAxL9H8)


### Steps for how you run:

```sh
$ git clone https://github.com/sgreact/sysBook.git
$ cd sysBook
$ npm install
$ npm start
```

# Login

  ### Sign In
      - UserName should be the email id pattern
      - Password can be any as per user defined
      - While signIn the user will be validated from localstorage
      - On successful login user will be redirected to Dashboard
	  
	  
  ### Sign Up
      - Once User already signed up its directly logged in and redirect to Dashboard
      - New users details are stored in local storage and able to login directly
  
  ### Logout
      - User Logout is availabe at left-bottom of the page by clicking on user name
  

	  
# WorkStation
   
   ### Once Sign In, Workstation grid table is availabe (Mock table)
      - where you can see the workstation details and booked/not booked status and booked date with pagination...

   ### Booking
      - If any user wants to book the workstation system, he/she can able to do click Book button in the Grid Table
      - Also We can direct to booking page by selection of Edit/Delete action button from the Grid Table of ... Column(table-action-dropdown)

   ### Booking Details
      - In the calender  : 5 days only visible for every user to booking
      - Current Day is the start date for every user for booking
      - Also Future 4 days only visible for the user to booking(Include current day)
      - Available Booking time is from 06AM to 06PM(12 hrs)	  
      - Each user can book maximum of 3 times for a day.
      - Each booking duration is only 30Mins(As per requirement)
      - If any user going beyond above conditions ,will thrown error message
		
# Booking Guidelines
      - Select calender date and time, 
      - Where you have Add Event column, you can enter the Booking user name
      - By default start time and end time will have 30 min
      - No conflicts on same day/time for the user bookings 
      - Can Update and Delete the booking as well.
	
# Alert
      - We can reshedule the booking after the time crossed and notify to corresponding users(Not implemented)	
