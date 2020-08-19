# moving-bubbles-plugin<br>
A highly customizable pure javascript plugin that allow you add interactive bubbles to sections of your site.<br><br>

This plugin is fully developed with vanilla javascript and does not require any dependency.<br><br>

Basically, the plugin has a Ball javascript prototype class which can be initialized with the configuration object to create a single ball.<br>
The plugin also come with a createMultipleBalls function that help you create multiple balls based on your configuration. The only difference from the configuration needed to instantiate the Ball class is that it requires a balls_count property which defines the number of balls to be created.<br><br><br>


PLUGIN CONFIGURATION PROPERTIES<br><br>

Ball CLASS<br>
  parent => required, string: a target element on your page which will house the created balls. <br>
  size => integer: this specifies the size of the balls to be generated in px.<br>
  color: => hex value without # or a random colour is generated<br>
  stepsX => speed to move in X axis in px per defined speed<br>
  stepsY => steps to move in Y axix in px per defined speed<br>
  x => the ball's initial x position, defaults to 0<br>
  y => the ball's initial y position, defaults to 0<br>
  onClickSpeed => the ball's speed increase when it is clicked in milliseconds, defaults to 100ms<br>
  height => initial box height, overwrites the size property is specified<br>
  width => initial box width, overwrites the size property is specified<br>
  opacity: between 0 and 1, specifies how transparent the box or boxes are. Defaults to 1<br>
  zIndex: specifies the dept of the boxes<br><br>
  
createMultipleBalls function <br>
  balls_count => required, specifies the number of balls to generate<br>
  #accepts all other properties accepted by the Ball class.<br>
