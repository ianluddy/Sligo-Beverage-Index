# Sligo Beverage Index

http://livetiles.ianluddy.com/

### Stack

- Angular CLI 6.0.8
- Angular 6.1.3
- Node 10.0.10
- Bootstrap 3.3.7
- Google Places API

### Running Locally

Install the above dependencies
Clone the project
Change directory to the root of the project
Use 'ng serve' to run locally
Navigate to http://localhost:4200

### Deploying

Use 'ng build --prod' to build project for production
Files for production can be found in the 'dist' directory
Serve using Apache on a Linux box

### Q/A

1. How long did it take to complete the solution?

  About 4 hours

2. What would you add if you had more time?

  Automated testing
  SASS
  A nice navbar logo
  Pagination

3. How would you deploy this to production?

  Use the Angular CLI to build solution in production mode using 'ng build --prod'
  Serve using Apache on an AWS EC2 instance
  Configure SSL encryption
  Configure Google Analytics

4. How would you debug it in production?

  Client side:
  Load the app in Chrome
  Check the console for errors, use debugger if necessary
  Check network console for failing requests
  You could also use something like Augury to debug: https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd

  Server side:
  SSH onto the box
  Check Apache error and access logs
  Check resource levels using 'top' to identify performance/memory issues

5. How would you know if it is failing at 2am?

  For failing processes I would use a tool like monit (https://mmonit.com/monit/) to monitor the Apache
  processes, restart any that fail, and send an alert email.

  For catching live issues I would use rollbar (https://rollbar.com/), it's very easy to
  setup and integrates with Angular nicely.
