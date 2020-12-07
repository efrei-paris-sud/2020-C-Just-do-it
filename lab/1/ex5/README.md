


# Exercise 5 ( Lesson 5 ) 

In this exercise, we used analogWrite(pin, value).
We have An LED connected to digital output pin 5 (D5) through a 220 ohm resistor.


## Schematic 
![Test Image](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/1/ex5/Capture%20d%E2%80%99e%CC%81cran%202020-12-03%20a%CC%80%2011.25.17.png)

## Code

int fade = 0;
int LedPin= 5;
int bright = 5;

void setup() {
  // put your setup code here, to run once:
  pinMode(LedPin, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  
//  Value =analogRead(analogPin);
  analogWrite(LedPin, bright);
  bright = bright +fade;
  if(bright <=0 || bright >=255){
      fade = -fade;
    }
delay(100);
}

![Board0](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/1/ex5/Capture%20d%E2%80%99e%CC%81cran%202020-12-03%20a%CC%80%2011.27.25.png)
  
## Board Image
![Board](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/1/ex5/Capture%20d%E2%80%99e%CC%81cran%202020-12-03%20a%CC%80%2011.26.59.png)

## Issues
