# System/Computer Booking application in React

### Steps for how you can start using this:

##### clone respository

### $ npm install

### $ npm start

# Login

  ### SignIn
      UserName should be the email id pattern
	  Password can be any as per userdefined
	  While signIn the user will be validated in localstorage
	  On successfull login it should redirect to Dashboard
	  
	  
  ### SignUp
      Once User already signed up its directly logged in and redirect to Dashboard
	  New users details are stored in local storage and able to login directly
  
  ### Logout
      User Logout is availabe at left-bottom of the page
  
      All the user details are stored in local storage
  
  
	  
# WorkStation
   
   ### Once LogedIn, The workstation grid table is availabe (Mock table)
      -where you can see the workstation details and booked/not booked status and booked date with pagination...

   ### Booking
      -If any user wants to book the workstation system, he/she can able to do click Book button in the Grid Table
      -Also We can direct to booking page by selection of Edit/Delete action button from the Grid Table of ... Column(table-action-dropdown)

   ### Booking Details
      -In the calender  : 5 days only visible for every user to booking
      -Current Day is the start date for every user for booking
      -Also Future 4 days only visible for the user to booking(Include current day)
      -Booking time is from 6AM to 6PM(12hrs)	  
      -Per user can book 3 times for the day.
      -Each booking duration is only 30Mins(As per requirement)
      -If any user going beyond above conditions ,will thrown error message
		
# Booking Guidelines

  -Select the calender date and time, 
  -Wher you have Add Event column, you can enter the Booking user name
  -By default start time and end time will have 30 min
  -No conflicts on same day/time for the user bookings 
  -Can Update and Delete the booking as well.
	
# Alert
  -We can reshedule the booking after the time crossed and notify to corresponding users(Not implemented)	
