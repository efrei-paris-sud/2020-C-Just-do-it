


# Exercise 1  



## Schematic 
![Test Image00](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/1/ex4/Capture%20d%E2%80%99e%CC%81cran%202020-12-03%20a%CC%80%2011.22.33.png)

## Code
const int led = 21;
 
// the setup routine runs once when you press reset:
void setup() {                
  // initialize the digital pin as an output.
  pinMode(led, OUTPUT);     
}
 
// the loop routine runs over and over again forever:
void loop() {
  digitalWrite(led, HIGH);      // turn the LED on (HIGH is the voltage level)
  delay(1000);                  // wait for a second
  digitalWrite(led, LOW);       // turn the LED off by making the voltage LOW
  delay(1000);                  // wait for a second
}
## Board Image
![Board](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/1/ex4/Capture%20d%E2%80%99e%CC%81cran%202020-12-02%20a%CC%80%2009.38.41.png)


## Issues

![Test Image2](https://github.com/efrei-paris-sud/2020-C-Just-do-it/blob/main/lab/1/ex4/Capture%20d%E2%80%99e%CC%81cran%202020-12-02%20a%CC%80%2009.38.46.png)
