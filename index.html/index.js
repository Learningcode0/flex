<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Flex Panels 💪</title>
      <link href='https://fonts.googleapis.com/css?family=Amatic+SC' rel='stylesheet' type='text/css'>
    </head>
    <body>
      <style>
        html {
          box-sizing: border-box;
          background: #ffc600;
          font-family: 'helvetica neue';
          font-size: 20px;
          font-weight: 200;
        }
        
        body {
          margin: 0;
        }
        
        *, *:before, *:after {
          box-sizing: inherit;
        }
    
        .panels {
          min-height: 100vh;
          overflow: hidden;
          display: flex;
        }
    
        .panel {
          background: #6B0F9C;
          box-shadow: inset 0 0 0 5px rgba(255,255,255,0.1);
          color: white;
          text-align: center;
          align-items: center;
          /* Safari transitionend event.propertyName === flex */
          /* Chrome + FF transitionend event.propertyName === flex-grow */
          transition:
            font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
            background 0.2s;
          font-size: 20px;
          background-size: cover;
          background-position: center;
          flex: 1;
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
    
        .panel1 { background-image:url(https://wallpaperaccess.com/thumb/896902.jpg); }
        .panel2 { background-image:url(https://cf.bstatic.com/xdata/images/hotel/max1024x768/253208005.jpg?k=bdfe36461a845fc477355637756579457391b0c0c43e4f3872771242c5f3d78d&o=&hp=1); }
        .panel3 { background-image:url(https://static01.nyt.com/images/2018/07/03/well/physed-walk/physed-walk-videoSixteenByNineJumbo1600.jpg); }
        .panel4 { background-image:url(https://i.pinimg.com/736x/92/c5/c5/92c5c52a7ef482f7e9f2148cf282e7ed.jpg); }
        .panel5 { background-image:url(https://t4.ftcdn.net/jpg/03/90/37/71/360_F_390377167_NYd4Zi29xUAxEFDcVwX8SYSbagv4At8N.jpg); }
    
        /* Flex Items */
        .panel > * {
          margin: 0;
          width: 100%;
          transition: transform 0.5s;
          flex: 1 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    
        .panel > *:first-child { transform: translateY(-100%); }
        .panel.open-active > *:first-child { transform: translateY(0); }
        .panel > *:last-child { transform: translateY(100%); }
        .panel.open-active > *:last-child { transform: translateY(0); }
    
        .panel p {
          text-transform: uppercase;
          font-family: 'Amatic SC', cursive;
          text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
          font-size: 2em;
        }
        
        .panel p:nth-child(2) {
          font-size: 4em;
        }
    
        .panel.open {
          flex: 5;
          font-size: 40px;
        }
        
        @media only screen and (max-width: 600px) {
          .panel p {
            font-size: 1em;
          }
        }
      </style>
    
    
      <div class="panels">
        <div class="panel panel1">
          <p>Hey</p>
          <p>How</p>
          <p>Are YOu</p>
        </div>
        <div class="panel panel2">
          <p>isn't</p>
          <p>The weather</p>
          <p>Perfect</p>
        </div>
        <div class="panel panel3">
          <p>Today</p>
          <p>Want To Go</p>
          <p>For a Run </p>
        </div>
        <div class="panel panel4">
          <p>Or</p>
          <p>A Bike</p>
          <p>Ride</p>
        </div>
        <div class="panel panel5">
          <p>Let</p>
          <p>Me Know</p>
          <p>Subscribe</p>
        </div>
      </div>
    
      <script>
        const panels = document.querySelectorAll('.panel');
    
        function toggleOpen() {
          console.log('Hello');
          this.classList.toggle('open');
        }
    
        function toggleActive(e) {
          console.log(e.propertyName);
          if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
          }
        }
    
        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
      </script>
    
    </body>
    </html>


    <script src="index.js"></script>
</body>
</html>
