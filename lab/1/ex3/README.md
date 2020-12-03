

# Exercise 3 ( Lesson 6 ) 

In this exercise, we used **push buttons** to connect two points in a circuit . 
We used : pinMode(buttonPin, INPUT); in setup.
To read the digital signal you can use buttonState = digitalRead(buttonPin); 
And finally we used a if :  if (buttonState == HIGH){....}else{....}.


## Schematic 
![Test Image](photo.png?raw=true)

## Code
 ```Arduino
void setup(){
  ....
}

void loop(){
  ....
}
```
  
## Board Image
![Board](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/1/ex3/Capture%20d%E2%80%99e%CC%81cran%202020-12-02%20a%CC%80%2009.40.11.png)


## Issues
So when we press the button, the built-in LED will light up, release is extinguished.
