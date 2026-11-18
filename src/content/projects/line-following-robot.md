---
shortTitle: Line-Following Robot
category: Robotics & controls
order: 11
featured: false
hero: /images/robot-side.webp
role: ECEG 205 lab group. Assembly, sensor mount, Arduino code and potentiometer speed tuning
period: Fall 2026 · Final week in progress
tools:
- Arduino Uno (C++)
- Pololu QTR-8 reflectance array
- TB6612 motor driver
- LDR + potentiometer (analog inputs)
- CAD + 3D printing
facts:
- value: 8 sensors
  label: Infrared reflectance array that finds the line
- value: 4 sketches
  label: One Arduino sketch per lab day, all readable on this page
- value: 0 to 250
  label: Motor speed (PWM) set live with a potentiometer knob
figures:
- src: /images/robot-top.webp
  alt: Top view of the red line-following robot showing the Arduino shield, the blue TB6612 motor driver board, four black potentiometer knobs and a light-dependent resistor.
  caption: Top view. The TB6612 motor driver (blue board), the potentiometers and the light-dependent resistor (LDR) added in Week 4.
- src: /images/robot-front-sensor.webp
  alt: Front view of the robot showing the QTR-8 reflectance sensor strip held in a black 3D-printed bracket, with a rainbow ribbon cable running up to the shield.
  caption: Front view. The QTR-8 sensor strip in its 3D-printed bracket, with the ribbon cable running up to the Arduino.
courses:
- eceg-205
title: Line-Following Robot
summary: Over four weekly labs in ECEG 205, we took a kit robot from a bare chassis to one that steers itself along a taped line with eight infrared sensors. The final version adds a speed knob and a light sensor that stops it when the room goes dark.
status: In progress
concept: false
heroAlt: Side view of the finished line-following robot on a lab table, with its red aluminum chassis, Arduino stack, rear drive wheel and the sensor strip mounted at the front.
heroCaption: The finished robot, November 2026. Drive wheels at the back, Arduino and battery in the middle, sensor strip at the front.
---

## Problem

A line-following robot drives along dark tape on a light floor with no one steering it. Eight infrared sensors under its nose measure how much light bounces back: the floor reflects a lot, the tape very little. When the tape drifts off center, the robot turns to bring it back, many times a second. The project ran over four weekly labs in ECEG 205 (Electrical and Computer Engineering Fundamentals), each adding one layer.

## My role

This was a lab group project. I worked on all four stages: assembling the robot, designing the 3D-printed sensor mount, writing the Arduino code and tuning its speed with a potentiometer.

## What I built

### Week 1: Drive

The kit has a red aluminum chassis, two DC gear motors, a TB6612 motor driver and an Arduino Uno. I wrote four direction functions. Each sets a speed (PWM, 0 to 255) and a direction for each motor, and turns come from running the two wheels at different speeds. I also designed and printed a bracket that holds the sensor strip 3 to 6 mm off the floor, square to the direction of travel.

### Week 2: Sense

Each sensor returns a time from 0 to 2,500 µs, and tape reads higher than floor. We measured the floor and three kinds of tape and picked a threshold between them. Each sensor $i$ (0 to 7) that reads above the threshold adds a weight $2i+1$, and the line position is the average weight minus 8:

$$c = \frac{1}{n}\sum_{\text{sensors on tape}} (2i+1) - 8$$

where $n$ is the number of sensors on tape. $c$ runs from $-7$ to $+7$, and $0$ means the line is centered.

### Week 3: Follow

The loop reads the strip, turns toward the line when $c$ is off center and drives straight when it is centered. It holds that command for a short drive time, then reads again. If no sensor or all eight see tape, the robot stops, because it has lost the line or is looking off a table edge.

### Week 4: Application

The robot had to react to a new sensor and use a potentiometer. The potentiometer sets speed live, $v = \text{reading} \times 250/1023$. Turning that knob, not editing code, was how we tuned speed for the speed extra credit. A light-dependent resistor (LDR) works as a lights-out switch: when its voltage passes 4.0 V the room is dark, and the robot stops.

## Evidence

- **Photos.** Three photos of the finished robot (November 2026) show the sensor bracket, the motor driver, the potentiometers and the LDR.
- **Code.** The four Arduino sketches below, one per lab day.
- **Lab check-offs.** Weekly demos for the professor or TA: driving in four directions, printing sensor data, finding the line, following the track and running the application.

### Code

Click a day to read its sketch, or [download all four](../../documents/Robot_Arduino_Code.zip) as Arduino IDE folders. Each starts from the lab's template; the `runMotor` function is adapted from a Maker's Digest TB6612 tutorial, as credited in the code.

<details class="code-panel">
<summary><span>Day 1</span> Motor basics: four direction functions</summary>

```cpp
// Initializatons
int PWMA = 11;
int Ain1 = 12;
int Ain2 = 13;
int PWMB = 10;
int Bin1 = A4;
int Bin2 = A5;
double velocity = 100;
double turnRatio = 0;
bool offWheel = 1;


// Edit here

//********************************************//
// Setup function

void setup() {
  pinMode(PWMA, OUTPUT);
  pinMode(Ain1, OUTPUT);
  pinMode(Ain2, OUTPUT);
  pinMode(PWMB, OUTPUT);
  pinMode(Bin1, OUTPUT);
  pinMode(Bin2, OUTPUT);
  Serial.begin(9600);

}

//********************************************//
// Loop function

void loop() {
  forward(100);
  delay(1000);
  backward(100);
  delay(1000);
  turnRight(100);
  delay(1000);
  turnLeft(100);
  delay(1000);

}

//********************************************//
// Motor functions

// The direction functions send commands to
// the motor driver in the following format:
// runMotor(*which motor*, *how fast*, *what direction*);
//
// Motor A is 1, Motor B is 0
//
// Speed is how fast out of 250
//
// turnRatio is the speed of the off-wheel in compasiron to
// the turning wheel
//
// turnWheel is the direction of the off-wheel, forward for
// wide turns, backward for sharp turns
//
// Forward is 1, Backward is 0


// Motor A forward at full speed, Motor B backward at quarter speed
void turnLeft(int spd) {
  runMotor(1, spd, 1);
  runMotor(0, spd*turnRatio, offWheel);
}

// Motor A backward at quarter speed, Motor B forward at full speed
void turnRight(int spd) {
  runMotor(1, spd*turnRatio, offWheel);
  runMotor(0, spd, 1);
}

// Both Motors forward at full speed
void forward(int spd) {
  runMotor(1, spd, 1);
  runMotor(0, spd, 1);
}

// Both Motors backward at full speed
void backward(int spd) {
  runMotor(0, spd, 0);
  runMotor(1, spd, 0);
}





// The runMotor function writes the motor, direction, and
// speed information to the motor driver

void runMotor(int motor, int spd, int dir) {
  boolean dirPin1 = LOW;
  boolean dirPin2 = HIGH;

  if(dir == 1) {
    dirPin1 = HIGH;
    dirPin2 = LOW;
  }

  if(motor == 1) {
    analogWrite(PWMA, spd);
    digitalWrite(Ain1, dirPin1);
    digitalWrite(Ain2, dirPin2);
  } else {
    analogWrite(PWMB, spd);
    digitalWrite(Bin1, dirPin1);
    digitalWrite(Bin2, dirPin2);
  }
}

// Credit to: Maker's Digest
// This code for the TB6612 Motor Driver is an adapted version of the tutorial from Maker's Digest on how to use said motor driver
// Their full tutorial can be found here: https://github.com/makersdigest/T06-TB6612FNG-Motor-Controller
```

</details>

<details class="code-panel">
<summary><span>Day 2</span> Detecting the line: threshold and line position</summary>

```cpp
// Include the QTR Sensor Library and load as reflect_snsr

#include <QTRSensors.h>

QTRSensors reflect_snsr;


//********************************************//
// Initializatons for various sensor value arrays

// Number of sensors on the strip
const uint8_t sensorCount = 8;

// An array for the raw sensor data
uint16_t sensorValues[sensorCount];

// An array for the position of the sensor
uint16_t sensorPosition[sensorCount];

// Initializations for some variables that will be used later
int lineCount;
int linePosition = 0;

// Assign threshold for line detection
int threshold = 1000;

// Initialize variable which marks the center of the line
int center;


//********************************************//
// Setup function

void setup() {

  // Configure the sensors as pins 2-9 (1 and 0 don't work because they are used for serial)
  reflect_snsr.setTypeRC();
  reflect_snsr.setSensorPins((const uint8_t[]){2, 3, 4, 5, 6, 7, 8, 9}, sensorCount);

  // Start the serial interface
  Serial.begin(9600);
}

//********************************************//
// Loop function

void loop() {

  // edit here for steps 19-23
  reflect_snsr.read(sensorValues);

  for(int i = 0; i < sensorCount; i++)
  {
    Serial.println(sensorValues[i]);
  }
  Serial.println("\n\n");
  //********************************************//
  // Reset the position and count for the new read
  linePosition = 0;
  lineCount = 0;


  // Multiply the resulting array elements by 2 times the position of the
  // corresponding sensor plus one (odd numbers 1-15) if the value is above
  // the threshold, otherwise set the array element to zero
  for (int i = 0; i < sensorCount; i++) {
    if (sensorValues[i] >= threshold) {
      sensorPosition[i] = (2*i) + 1;
      lineCount = lineCount + 1;
    } else {
      sensorPosition[i] = 0;
    }

    // Start to take the average by adding the values
    linePosition = linePosition + sensorPosition[i];
  }


  // Finish taking the average. If any sensors see the line, divide the position
  // by the number of lines to get the center. This test is just in case no
  // sensors see it, which would otherwise have the robot try to divide by zero
  if (!(lineCount==0)) {
    linePosition = linePosition/lineCount;
  }


  // To make zero the center of the line, we subtract 8
  center = linePosition-8;

  // Print where the line is
  Serial.println(center);
  Serial.println(" "); Serial.println(" ");  //********************************************//

  delay(500);
}
```

</details>

<details class="code-panel">
<summary><span>Day 3</span> Following the line (working draft)</summary>

```cpp
int PWMA = 11;
int Ain1 = 12;
int Ain2 = 13;
int PWMB = 10;
int Bin1 = A4;
int Bin2 = A5;
double velocity = 100;
double turnRatio = 0.2;
bool offWheel = 1;
int driveTime = 50;

// Include the QTR Sensor Library and load as reflect_snsr

#include <QTRSensors.h>

QTRSensors reflect_snsr;


//********************************************//
// Initializatons for various sensor value arrays

// Number of sensors on the strip
const uint8_t sensorCount = 8;

// An array for the raw sensor data
uint16_t sensorValues[sensorCount];

// An array for the position of the sensor
uint16_t sensorPosition[sensorCount];

// Initializations for some variables that will be used later
int lineCount;
int linePosition = 0;

// Assign threshold for line detection
int threshold = 1000;

// Initialize variable which marks the center of the line
int center;


void setup() {
  // put your setup code here, to run once:
  pinMode(PWMA, OUTPUT);
  pinMode(Ain1, OUTPUT);
  pinMode(Ain2, OUTPUT);
  pinMode(PWMB, OUTPUT);
  pinMode(Bin1, OUTPUT);
  pinMode(Bin2, OUTPUT);
  // Configure the sensors as pins 2-9 (1 and 0 don't work because they are used for serial)
  reflect_snsr.setTypeRC();
  reflect_snsr.setSensorPins((const uint8_t[]){2, 3, 4, 5, 6, 7, 8, 9}, sensorCount);

  // Start the serial interface
  Serial.begin(9600);

}

void loop() {

 center = sense();

  // if((lineCount == 8) or (lineCount == 0)) {
  //   forward(0);


  //   // Test whether the line is indeed read by some of the sensors
  // }
  // else if (!(linePosition == 0)) {

    // If the line's position is greater than 0, do what?

    if (center > 1) {
      // if(center >= 4)
      // {
      //   if(center >= 6)
      //   {
      //     turnRight(150);
      //     delay(driveTime);
      //   }
      //   else
      //   {
      //     turnRight(100);
      //     delay(driveTime);
      //   }

      // }
      // else
      // {
      //   turnRight(75);
      //   delay(driveTime);
      // }
      // // If the line's position is less than 0, do what?
      delay(driveTime);
      turnRight(20);

      while(center > 6 && !(center > 7.9) && !(center == 8))
      {
        delay(driveTime);
        turnRight(40);
        center = sense();
      }
    }
    else if (center < -1) {

      // add direction here
      // if(center >= -4)
      // {
      //   if(center >= -6)
      //   {
      //     turnLeft(150);
      //     delay(driveTime);
      //   }
      //   else
      //   {
      //     turnLeft(100);
      //     delay(driveTime);
      //   }

      // }
      // else
      // {
      //   turnLeft(75);
      //   delay(driveTime);
      // }

      // If the line's position is 0, do what?
      delay(driveTime);
      turnLeft(20);
      while(center > -6  && !(center < -7.9) && !(center == 8))
      {
        delay(driveTime);
        turnLeft(40);
        center = sense();
      }

    }
    else {

      // add direction here

      delay(driveTime);
      forward(velocity);
    }
  //}
}



int sense()
{
   // edit here for steps 19-23
  reflect_snsr.read(sensorValues);

  for(int i = 0; i < sensorCount; i++)
  {
    Serial.println(sensorValues[i]);
  }
  Serial.println("\n\n");
  //********************************************//
  // Reset the position and count for the new read
  linePosition = 0;
  lineCount = 0;


  // Multiply the resulting array elements by 2 times the position of the
  // corresponding sensor plus one (odd numbers 1-15) if the value is above
  // the threshold, otherwise set the array element to zero
  for (int i = 0; i < sensorCount; i++) {
    if (sensorValues[i] >= threshold) {
      sensorPosition[i] = (2*i) + 1;
      lineCount = lineCount + 1;
    } else {
      sensorPosition[i] = 0;
    }

    // Start to take the average by adding the values
    linePosition = linePosition + sensorPosition[i];
  }


  // Finish taking the average. If any sensors see the line, divide the position
  // by the number of lines to get the center. This test is just in case no
  // sensors see it, which would otherwise have the robot try to divide by zero
  if (!(lineCount==0)) {
    linePosition = linePosition/lineCount;
  }


  // To make zero the center of the line, we subtract 8
  center = linePosition-8;

  // Print where the line is
  Serial.println(center);
  Serial.println(" "); Serial.println(" ");  //********************************************//

  // Test whether none of the sensors see the line (not on the line or threshold
  // too high) or whether all of the sensors see the line (wrong way on the line
  // or, more likely, the robot is looking off the edge of a table). For both of
  // these cases, stop moving
  //
  // This is the auto-break system

  Serial.println(lineCount);
  Serial.println(linePosition);
  Serial.println(center);
  return(center);
}


//********************************************//
// Motor functions

// The direction functions send commands to
// the motor driver in the following format:
// runMotor(*which motor*, *how fast*, *what direction*);
//
// Motor A is 1, Motor B is 0
//
// Speed is how fast out of 250
//
// turnRatio is the speed of the off-wheel in compasiron to
// the turning wheel
//
// turnWheel is the direction of the off-wheel, forward for
// wide turns, backward for sharp turns
//
// Forward is 1, Backward is 0


// Motor A forward at full speed, Motor B backward at quarter speed
void turnLeft(int spd) {
  runMotor(1, spd, 1);
  runMotor(0, spd*turnRatio, offWheel);
}

// Motor A backward at quarter speed, Motor B forward at full speed
void turnRight(int spd) {
  runMotor(1, spd*turnRatio, offWheel);
  runMotor(0, spd, 1);
}

// Both Motors forward at full speed
void forward(int spd) {
  runMotor(1, spd, 1);
  runMotor(0, spd, 1);
}

// Both Motors backward at full speed
void backward(int spd) {
  runMotor(0, spd, 0);
  runMotor(1, spd, 0);
}





// The runMotor function writes the motor, direction, and
// speed information to the motor driver

void runMotor(int motor, int spd, int dir) {
  boolean dirPin1 = LOW;
  boolean dirPin2 = HIGH;

  if(dir == 1) {
    dirPin1 = HIGH;
    dirPin2 = LOW;
  }

  if(motor == 1) {
    analogWrite(PWMA, spd);
    digitalWrite(Ain1, dirPin1);
    digitalWrite(Ain2, dirPin2);
  } else {
    analogWrite(PWMB, spd);
    digitalWrite(Bin1, dirPin1);
    digitalWrite(Bin2, dirPin2);
  }
}
```

</details>

<details class="code-panel">
<summary><span>Day 4</span> Final: speed knob and lights-out stop</summary>

```cpp
// Include the QTR Sensor Library and load as reflect_snsr

#include <QTRSensors.h>

QTRSensors reflect_snsr;


//********************************************//
// Initializatons for various sensor value arrays

// Number of sensors on the strip
const uint8_t sensorCount = 8;

// An array for the raw sensor data
uint16_t sensorValues[sensorCount];

// An array for the position of the sensor
uint16_t sensorPosition[sensorCount];

// Initializations for some variables that will be used later
int lineCount;
int linePosition = 0;

// Assign threshold for line detection
int threshold = 1500;

// Initialize variable which marks the center of the line
int center;


// Initializatons
int PWMA = 11;
int Ain1 = 12;
int Ain2 = 13;
int PWMB = 10;
int Bin1 = A4;
int Bin2 = A5;
int potentch = A0;
int LDR = A1;
double velo = 100;
double turnRatio = 0;
bool offWheel = 1;
int driveTime = 50;




void setup() {
  pinMode(PWMA, OUTPUT);
  pinMode(Ain1, OUTPUT);
  pinMode(Ain2, OUTPUT);
  pinMode(PWMB, OUTPUT);
  pinMode(Bin1, OUTPUT);
  pinMode(Bin2, OUTPUT);
  pinMode(potentch, INPUT);
  pinMode(LDR, INPUT);
  // Configure the sensors as pins 2-9 (1 and 0 don't work because they are used for serial)
  reflect_snsr.setTypeRC();
  reflect_snsr.setSensorPins((const uint8_t[]){2, 3, 4, 5, 6, 7, 8, 9}, sensorCount);
  Serial.begin(9600);
}

void loop()
{

  Serial.println("The reading of the Potentiometer is: ");
  Serial.println(analogRead(potentch));
  Serial.println("\n\n");

  velo = analogRead(potentch)*(250.0/1023.0);
  Serial.println("The adjusted speed of the Robot is: ");
  Serial.println(velo);

  int ldrVal = analogRead(LDR);
  float volt = ldrVal * (5.0/1023.0);

  reflect_snsr.read(sensorValues);

  for(int i = 0; i < sensorCount; i++)
  {
    Serial.println(sensorValues[i]);
  }
  Serial.println("\n\n");
  //********************************************//
  // Reset the position and count for the new read
  linePosition = 0;
  lineCount = 0;


  // Multiply the resulting array elements by 2 times the position of the
  // corresponding sensor plus one (odd numbers 1-15) if the value is above
  // the threshold, otherwise set the array element to zero
  for (int i = 0; i < sensorCount; i++)
  {
    if (sensorValues[i] >= threshold)
    {
      sensorPosition[i] = (2*i) + 1;
      lineCount = lineCount + 1;
    }
    else
    {
      sensorPosition[i] = 0;
    }

    // Start to take the average by adding the values
    linePosition = linePosition + sensorPosition[i];
  }


  // Finish taking the average. If any sensors see the line, divide the position
  // by the number of lines to get the center. This test is just in case no
  // sensors see it, which would otherwise have the robot try to divide by zero
  if (!(lineCount==0))
  {
    linePosition = linePosition/lineCount;
  }


  // To make zero the center of the line, we subtract 8
  center = linePosition-8;

  // Print where the line is
  Serial.println(center);
  Serial.println(" "); Serial.println(" ");  //********************************************//

  // Test whether none of the sensors see the line (not on the line or threshold
  // too high) or whether all of the sensors see the line (wrong way on the line
  // or, more likely, the robot is looking off the edge of a table). For both of
  // these cases, stop moving
  //
  // This is the auto-break system

  //Serial.println(lineCount);
  //Serial.println(linePosition);
  Serial.println("The center of the sensor val reads: ");
  Serial.println(center);


  if ((lineCount == 8) or (lineCount == 0) or (volt > 4.0))
  {
    forward(0);
    if(volt > 4.0)
    {
      Serial.println("The lights are off, the Robot is not Moving.\n");
    }
  }
  else if (!(linePosition == 0))
  {
    if (center > 0)
    {

      // if(center > 5)
      // {
      //   turnLeft(velo);
      //   delay(driveTime);
      //   turnLeft(velo);
      //   delay(driveTime);
      //   forward(velo);
      //   delay(driveTime);
      // }
      turnLeft(velo);

      delay(driveTime);

      forward(velo);
    }
    else if (center < 0)
    {

      // if(center < -5)
      // {
      //   turnRight(velo);
      //   delay(driveTime);
      //   turnRight(velo);
      //   delay(driveTime);
      //   forward(velo);
      //   delay(driveTime);
      // }

      turnRight(velo);

      delay(driveTime);

      forward(velo);
    }
    else
    {

      forward(velo);

      delay(driveTime);

      forward(velo);
    }
  }
}



void turnLeft(int spd)
{
  runMotor(1, spd, 1);
  runMotor(0, spd*turnRatio, offWheel);
}

// Motor A backward at quarter speed, Motor B forward at full speed
void turnRight(int spd)
{
  runMotor(1, spd*turnRatio, offWheel);
  runMotor(0, spd, 1);
}

// Both Motors forward at full speed
void forward(int spd)
{
  runMotor(1, spd, 1);
  runMotor(0, spd, 1);
}

// Both Motors backward at full speed
void backward(int spd)
{
  runMotor(0, spd, 0);
  runMotor(1, spd, 0);
}

// The runMotor function writes the motor, direction, and
// speed information to the motor driver

void runMotor(int motor, int spd, int dir)
{
  boolean dirPin1 = LOW;
  boolean dirPin2 = HIGH;

  if(dir == 1) {
    dirPin1 = HIGH;
    dirPin2 = LOW;
  }

  if(motor == 1) {
    analogWrite(PWMA, spd);
    digitalWrite(Ain1, dirPin1);
    digitalWrite(Ain2, dirPin2);
  } else {
    analogWrite(PWMB, spd);
    digitalWrite(Bin1, dirPin1);
    digitalWrite(Bin2, dirPin2);
  }
}
```

</details>

## Status

Week 4 (the application demo, final code and write-up) is due November 18, 2026. A run video and lap time will be added after the demo.

What I am taking from it: the class topics showed up on the robot. Voltage dividers explain how the LDR and potentiometer are read, and the MOSFET and DC motor lectures explain how the driver turns a PWM number into wheel speed.
