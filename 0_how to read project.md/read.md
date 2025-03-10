ways to make react project:

    1.using create-react-app utility- it has node module
        cmd-npx create-react-app project name 
        // it install on local machine and take a time 

//-we will follow 2nd to make project--
    2. using Vite :- it does not have node module 
        cmd  -npm create vite@latest


//--------------------how to read project--------
      1.first go to >>>package.json 
      read file it has name ,scripts,dependencies,devdependencies(require only in build phase)

//---------------------to install node module in vite--------------
     -firt check that it is present project or not
      -cmd-cd project name 
      cmd-ls
    -if not:
           
           npm install
                     : it start install required package 


//---how to run ------
    go to package.json >> 
    "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
    }
    cmd -npm run dev
        : VITE v6.2.1  ready in 464 ms

         ➜  Local:   http://localhost:5173/
         ➜  Network: use --host to expose
          ➜  press h + enter to show help